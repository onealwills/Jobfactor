import React, { createContext, useContext, useEffect, useState } from 'react';
import useAccountAuthenticate from '../hooks/api/authentication/useAccountAuthenticate';
import { useLocalStorage } from 'usehooks-ts';
import { localStorageConstants } from './constants';
import jwt_decode, { JwtPayload } from 'jwt-decode';
import axiosInstance from '../hooks/api/axiosConfig';
import { PrimaryProfileType } from '../hooks/api/account/types';
import { SignInResponse } from '../hooks/api/authentication/types';
import axios from 'axios';

interface CurrentEmployment {
    createdAt: number;
    lastUpdatedAt: number;
    id: string;
    jobTitle: string;
    jobDescription: string;
    startYear: string;
    endYear: string;
    isCurrentPosition: boolean;
    companyName: string;
    companyEmail: string;
    employmentType: string;
    employmentLevel: string;
    location: string;
    locationType: string[];
  }
  
  interface Employment {
    id: string;
    companyName: string;
    jobDescription: string;
    jobTitle: string;
    startYear: string;
    endYear: string;
    isCurrentPosition: boolean;
    companyEmail: string;
    employmentType: string;
    employmentLevel: string;
    location: string;
    locationType: string[];
  }
  
  interface Qualification {
    id: string;
    school: string;
    degree: string;
    fieldOfStudy: string;
    startYear: string;
    endYear: string;
    educationLevel: string;
  }
  
  interface ProfessionalProfile {
    id: string;
    emailAddress: string;
    address: string;
    firstName: string;
    lastName: string;
    photoUrl: string;
    currentEmployment?: CurrentEmployment;
    employemnts: Employment[];
    qualifications: Qualification[];
    tagline: string;
  }
  
  interface User {
    id: string;
    isEnabled: boolean;
    createdAt: number;
    lastUpdatedAt: number;
    primaryProfile: string;
    accountId: string;
    primaryCompanyProfile?: CompanyProfile;
    companyProfiles: CompanyProfile[];
    professionalProfile?: ProfessionalProfile;
  }

  interface CompanyProfile {
    id: string;
    emailAddress: string;
    companyName: string;
    companyId: string;
    photoUrl: string;
  }
  
interface Account {
    sub: string;
    primaryProfile: PrimaryProfileType;
    email: string;
    companyProfile: {
        companyName: string;
    };
    professionalProfile: {
        fullName: string;
        userId: string;
    };
}
interface User {
    emailAddress: string;
    firstName: string;
    id: string;
    lastName: string;
}
interface AuthContextType {
    accessToken: string;
    refreshToken: string;
    setAccessToken: React.Dispatch<React.SetStateAction<string>>;
    setRefreshToken: React.Dispatch<React.SetStateAction<string>>;
    setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
    setUser: React.Dispatch<React.SetStateAction<any>>;
    isAuthenticated: boolean | null;
    account: Account | null;
    user: User | null;
    signIn: (email: string, password: string) => Promise<SignInResponse | unknown>;
    signOut: () => void;
}

interface AuthProviderProps {
    children: React.ReactNode;
}

export const AuthContext = createContext<AuthContextType>({
    accessToken: '',
    refreshToken: '',
    isAuthenticated: null,
    account: null,
    user: null,
    setUser: () => {},
    signIn: async () => {},
    signOut: () => {},
    setAccessToken: () => {},
    setRefreshToken: () => {},
    setIsAuthenticated: () => {}
});

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [accessToken, setAccessTokenState] = useLocalStorage(
        localStorageConstants.AccessToken,
        ''
    );
    const [refreshToken, setRefreshTokenState] = useLocalStorage(
        localStorageConstants.RefreshToken,
        ''
    );
    const [isAuthenticated, setIsAuthenticatedState] = useLocalStorage(
        localStorageConstants.IsAuthenticated,
        false
    );

    const [account, setAccount] = useLocalStorage<Account | null>(
        localStorageConstants.Account,
        null
    );

    const [user, setUser] = useLocalStorage<any>(
        localStorageConstants.User,
        null
    );

    const setAccessToken = (
        newToken: string | ((prevState: string) => string)
    ) => {
        setAccessTokenState(newToken);
    };

    const setRefreshToken = (
        newToken: string | ((prevState: string) => string)
    ) => {
        setRefreshTokenState(newToken);
    };

    const setIsAuthenticated = (
        newValue: boolean | ((prevState: boolean) => boolean)
    ) => {
        setIsAuthenticatedState(newValue);
    };

    const retrieveRefreshToken = async () => {
        if (!accessToken) {
            return;
        }
        const decodedToken: JwtPayload = jwt_decode(accessToken);

        const tokenExpiration = decodedToken.exp;

        if (tokenExpiration && new Date() > new Date(tokenExpiration)) {
            // Token has expired - request a new one
            try {
                const response = await axiosInstance.post(
                    '/authentication/refresh-tokens',
                    {
                        refreshToken: localStorage
                            .getItem(localStorageConstants.RefreshToken)
                            ?.replace(/"/g, '')
                    }
                );
                const data = response.data;
                setAccessToken(data.accessToken);
                setRefreshToken(data.refreshToken);
            } catch (error) {
                // Handle error
            }
        }
    };

    useEffect(() => {
        const refreshTimer = setInterval(() => {
            retrieveRefreshToken();
        }, 60000);

        return () => clearInterval(refreshTimer);
    }, []);

    const signInMutation = useAccountAuthenticate();
    const signIn = async (emailAddress: string, password: string) => {
        try {
            return await signInMutation.mutateAsync(
                { emailAddress, password },
                {
                    onSuccess: async (data) => {
                        axiosInstance.interceptors.request.use((config) => {
                            config.headers.Authorization = `Bearer ${data.accessToken}`;
                            return config;
                        });
                        setAccessToken(data.accessToken);
                        setRefreshToken(data.refreshToken);
                        setIsAuthenticated(true);

                        const decodedToken: Account = jwt_decode<Account>(
                            data.accessToken?.replace(/"/g, '')
                        );
                        console.log("HHH: decodedToken", decodedToken);
                        const account: Account = {
                            sub: decodedToken.sub,
                            primaryProfile: decodedToken.primaryProfile,
                            email: decodedToken.email,
                            companyProfile: {
                                companyName:
                                    decodedToken.companyProfile?.companyName
                            },
                            professionalProfile: {
                                fullName:
                                    decodedToken.professionalProfile?.fullName,
                                userId: decodedToken.professionalProfile?.userId,
                            }
                        };
                        setAccount(account);
                    },
                    onError: async (err) => { }
                }
            );
        } catch (error) {
            console.error(error);
            clearAuthInfo();
            if (axios.isAxiosError(error)) {
                return error?.response?.data;
            }
        }
    };

    const clearAuthInfo = () => {
        setAccessToken('');
        setRefreshToken('');
        setUser(null);
        setIsAuthenticated(false);
        setAccount(null);
    };

    const signOut = () => {
        clearAuthInfo();
    };

    return (
        <AuthContext.Provider
            value={{
                accessToken,
                refreshToken,
                isAuthenticated,
                account,
                user,
                signIn,
                signOut,
                setUser,
                setAccessToken,
                setRefreshToken,
                setIsAuthenticated
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export function useAuth() {
    const {
        accessToken,
        refreshToken,
        isAuthenticated,
        account,
        user,
        signIn,
        setUser,
        signOut,
        setAccessToken,
        setIsAuthenticated
    } = useContext(AuthContext);

    const [isRefreshingToken, setIsRefreshingToken] = useState(false);

    useEffect(() => {
        const checkTokenValidity = async () => {
            if (!accessToken || !refreshToken) {
                return;
            }
            const decodedToken: JwtPayload = jwt_decode(
                accessToken?.replace(/"/g, '')
            );
            const tokenExpiration = decodedToken.exp;
            const isTokenExpired =
                tokenExpiration &&
                new Date() > new Date(tokenExpiration * 1000);
            if (isTokenExpired && !!decodedToken) {
                // Access token has expired - request a new one using the refresh token
                if (!isRefreshingToken) {
                    setIsRefreshingToken(true);
                    try {
                        const response = await axiosInstance.post(
                            '/authentication/refresh-tokens',
                            {
                                refreshToken: refreshToken?.replace(/"/g, '')
                            }
                        );
                        const data = response.data;
                        axiosInstance.interceptors.request.use((config) => {
                            config.headers.Authorization = `Bearer ${data.accessToken}`;
                            return config;
                        });
                        setAccessToken(data.accessToken);
                        setAccessToken(data.refreshToken);
                        setIsAuthenticated(true);
                    } catch (error) {
                        console.error(error);
                        signOut();
                    } finally {
                        setIsRefreshingToken(false);
                    }
                }
            } else {
                axiosInstance.interceptors.request.use((config) => {
                    config.headers.Authorization = `Bearer ${accessToken}`;
                    return config;
                });
            }
        };

        checkTokenValidity();
    }, [accessToken, refreshToken, isRefreshingToken, signOut]);

    return {
        accessToken,
        refreshToken,
        isAuthenticated,
        account,
        user,
        signIn,
        signOut,
        setUser
    };
}
