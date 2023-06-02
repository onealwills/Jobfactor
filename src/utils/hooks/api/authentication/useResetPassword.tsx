import { AxiosError } from 'axios';
import { useMutation, UseMutationResult } from 'react-query';
import axiosInstance from '../axiosConfig';
import { IResetRequest, IResetResponse } from './types';

async function resetPassword(data: IResetRequest): Promise<IResetResponse> {
    const res = await axiosInstance.post(
        `/authentication/reset-password`,
        data
    );
    return res.data;
}

function useResetPassword(): UseMutationResult<
    IResetResponse,
    AxiosError,
    IResetRequest
> {
    return useMutation(resetPassword);
}

export default useResetPassword;
