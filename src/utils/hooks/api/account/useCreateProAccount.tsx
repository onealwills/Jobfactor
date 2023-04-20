import axiosInstance from '../axiosConfig'
import { CreateProAccountRequest, ProfessionalProfile } from './types';
import { UseMutationResult, useMutation } from 'react-query';

async function createProfessionalAccount(postRequest: CreateProAccountRequest):
    Promise<ProfessionalProfile> {
        const response = await axiosInstance.post(
            `/authentication/sign-up/professional`,
            postRequest
        );
        const data = await response.data;
        return data;
}

function useCreateProAccount(): UseMutationResult<
    ProfessionalProfile,
    unknown,
    CreateProAccountRequest
    > {
    return useMutation(createProfessionalAccount);
}

export default useCreateProAccount;