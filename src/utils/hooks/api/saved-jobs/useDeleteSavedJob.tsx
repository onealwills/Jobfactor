import axiosInstance from '../axiosConfig';
import { UseMutationResult, useMutation } from 'react-query';

async function deleteSavedJob(savedJobId: any) {
    const response = await axiosInstance.delete(`/api/saved-jobs/${savedJobId}`);
    const data = await response.data;
    return data;
}
export function useDeleteSavedJob(): UseMutationResult<
    unknown,
    unknown,
    unknown
> {
    return useMutation(deleteSavedJob);
}
