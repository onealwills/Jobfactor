import { AxiosError } from 'axios';
import { useMutation, UseMutationResult } from 'react-query';
import axiosInstance from '../axiosConfig';
import { IVerifyAccountRequest } from './types';

const verifyAccount = async (data: IVerifyAccountRequest) => {
    const res = await axiosInstance.post(
        `/account-verification/verify-account`,
        data
    );
    return res.data;
};

const useVerifyAccount = (): UseMutationResult<
    unknown,
    AxiosError,
    IVerifyAccountRequest
> => {
    return useMutation(verifyAccount);
};

export default useVerifyAccount;
