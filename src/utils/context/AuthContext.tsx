import React, { createContext, useContext, useEffect, useState } from 'react';
import useAccountAuthenticate from '../hooks/api/authentication/useAccountAuthenticate';
import { useLocalStorage } from 'usehooks-ts';
import { localStorageConstants } from './constants';
import axios from 'axios';
import jwt_decode, { JwtPayload } from 'jwt-decode';
import axiosInstance from '../hooks/api/axiosConfig';
import { PrimaryProfileType } from '../hooks/api/account/types';

interface Account {
    sub: string;
    primaryProfile: PrimaryProfileType;
    email: string;
}

interface AuthContextType {
    accessToken: string;
    refreshToken: string;
    setAccessToken: React.Dispatch<React.SetStateAction<string>>;
    setRefreshToken: React.Dispatch<React.SetStateAction<string>>;
    setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
    isAuthenticated: boolean | null;
    account: Account | null;
    signIn: (email: string, password: string) => Promise<void>;
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
                const response = await await axiosInstance.post(
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
            signInMutation.mutate(
                { emailAddress, password },
                {
                    onSuccess: async (data) => {
                        setAccessToken(data.accessToken);
                        setRefreshToken(data.refreshToken);
                        setIsAuthenticated(true);

                        const decodedToken: Account = jwt_decode<Account>(
                            data.accessToken?.replace(/"/g, '')
                        );

                        const account: Account = {
                            sub: decodedToken.sub,
                            primaryProfile: decodedToken.primaryProfile,
                            email: decodedToken.email
                        };
                        setAccount(account);
                    }
                }
            );
        } catch (error) {
            console.error(error);
            clearAuthInfo();
        }
    };

    const clearAuthInfo = () => {
        setAccessToken('');
        setRefreshToken('');
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
                signIn,
                signOut,
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
        signIn,
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
            }
        };

        checkTokenValidity();
    }, [accessToken, refreshToken, isRefreshingToken, signOut]);

    return {
        accessToken,
        refreshToken,
        isAuthenticated,
        account,
        signIn,
        signOut
    };
}
