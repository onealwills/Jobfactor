import { AxiosError } from 'axios';
import { useMutation, UseMutationResult } from 'react-query';
import axiosInstance from '../axiosConfig';
import { IValidateCodeRequest, IValidateCodeResponse } from './types';

async function validateCode(
    data: IValidateCodeRequest
): Promise<IValidateCodeResponse> {
    const res = await axiosInstance.post(
        `/account-verification/validate-code`,
        data
    );
    return res.data;
}

function useValidateCode(): UseMutationResult<
    IValidateCodeResponse,
    AxiosError,
    IValidateCodeRequest
> {
    return useMutation(validateCode);
}

export default useValidateCode;
