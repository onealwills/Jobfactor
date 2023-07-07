import axiosInstance from '../axiosConfig';
import { UseMutationResult, useMutation } from 'react-query';

async function deleteSavedApplicant(savedApplicantId: any) {
    const response = await axiosInstance.delete(`/api/saved-applicants/${savedApplicantId}`);
    const data = await response.data;
    return data;
}
export function useDeleteSavedApplicant(): UseMutationResult<
    unknown,
    unknown,
    unknown
> {
    return useMutation(deleteSavedApplicant);
}
