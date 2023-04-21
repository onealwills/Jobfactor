import React, { useContext, createContext, useEffect } from 'react';
import axiosInstance from '../hooks/api/axiosConfig';
import { useStateMachine } from 'little-state-machine';
import { updateAction } from '../../pages/Accounts/Professional/CreationSteps/updateAction';
import useCreateProAccount from '../hooks/api/account/useCreateProAccount';

interface AccountContextType {
    accountType: string;
    firstName: string;
    lastName: string,
    emailAddress: string;
    password: string;
}

export const AccountContext = createContext<AccountContextType>({
    accountType: '',
    firstName: '',
    lastName: '',
    emailAddress: '',
    password: ''
});


export function useCreateNewAccount() {
    const {
        accountType,
        firstName,
        lastName,
        emailAddress,
        password,
    } = useContext(AccountContext);

    const { state } = useStateMachine({updateAction});
    const accountData = state;

    const createAccountMutation = useCreateProAccount();

    const createAccount = async (emailAddress: string, firstName: string, lastName: string, password: string) => {
        // try {
        //     createAccountMutation.mutate({
        //         emailAddress,
        //         password,
        //         firstName,
        //         lastName
        //     }, {
        //         onSuccess: async (data) => {
        //             console.log(data);
        //         }
        //     })
        // } catch (error) {
        //     console.error(error)
        // }
    }
    useEffect(() => {
        // const createProfessionalAccount = async () => {
        //     if (accountType === 'professional')
        //         try {
        //             const response = await axiosInstance.post(`/authentication/sign-up/professional`, {
        //                 emailAddress,
        //                 password,
        //                 firstName,
        //                 lastName
        //             })
        //             return response;
        //         } catch (error) {
        //             console.error(error);
        //         }
        // }
        // createProfessionalAccount();
        
    }, [])

    return {
        createAccount
    };
}
