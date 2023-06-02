import { AxiosError } from 'axios';
import { useMutation, UseMutationResult } from 'react-query';
import axiosInstance from '../axiosConfig';
import {
    ICreateVerificationRequest,
    ICreateVerificationResponse
} from './types';

async function getVerificationCode(
    data: ICreateVerificationRequest
): Promise<ICreateVerificationResponse> {
    const res = await axiosInstance.post(
        `/account-verification/create-verification`,
        data
    );
    return res.data;
}

function useGetVerificationCode(): UseMutationResult<
    ICreateVerificationResponse,
    AxiosError,
    ICreateVerificationRequest
> {
    return useMutation(getVerificationCode);
}

export default useGetVerificationCode;
