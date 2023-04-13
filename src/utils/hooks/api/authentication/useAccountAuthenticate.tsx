import { useMutation, UseMutationResult } from 'react-query';
import axiosInstance from '../axiosConfig';
import { SignInRequest, SignInResponse } from './types';
import axios from 'axios';

async function signIn(signInRequest: SignInRequest): Promise<SignInResponse> {
    const res = await axiosInstance.post(
        `/authentication/sign-in`,
        signInRequest
    );
    return res.data;
}

function useAccountAuthenticate(): UseMutationResult<
    SignInResponse,
    unknown,
    SignInRequest
> {
    return useMutation(signIn);
}

export default useAccountAuthenticate;
