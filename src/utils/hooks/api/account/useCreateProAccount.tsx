import axiosInstance from '../axiosConfig';
import {
    CompanyProfile,
    CreateCompanyAccountRequest,
    CreateProAccountRequest,
    ProfessionalProfile
} from './types';
import { UseMutationResult, useMutation } from 'react-query';
import { AxiosError } from 'axios';

async function createProfessionalAccount(
    postRequest: CreateProAccountRequest
): Promise<ProfessionalProfile> {
    const response = await axiosInstance.post(
        `/authentication/sign-up/professional`,
        postRequest
    );
    const data = await response.data;
    return data;
}

async function createCompanyAccount(
    postRequest: CreateCompanyAccountRequest
): Promise<CompanyProfile> {
    const response = await axiosInstance.post(
        `/authentication/sign-up/company`,
        postRequest
    );
    const data = await response.data;
    return data;
}

export function useCreateProAccount(): UseMutationResult<
    ProfessionalProfile,
    AxiosError,
    CreateProAccountRequest
> {
    return useMutation(createProfessionalAccount);
}

export function useCreateCompanyAccount(): UseMutationResult<
    CompanyProfile,
    AxiosError,
    CreateCompanyAccountRequest
> {
    return useMutation(createCompanyAccount);
}
