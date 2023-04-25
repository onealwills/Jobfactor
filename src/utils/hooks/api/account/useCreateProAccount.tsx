import axiosInstance from '../axiosConfig';
import {
    CompanyProfile,
    CreateCompanyAccountRequest,
    CreateProAccountRequest,
    ProfessionalProfile
} from './types';
import { UseMutationResult, useMutation } from 'react-query';

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
    unknown,
    CreateProAccountRequest
> {
    return useMutation(createProfessionalAccount);
}

export function useCreateCompanyAccount(): UseMutationResult<
    CompanyProfile,
    unknown,
    CreateCompanyAccountRequest
> {
    return useMutation(createCompanyAccount);
}
