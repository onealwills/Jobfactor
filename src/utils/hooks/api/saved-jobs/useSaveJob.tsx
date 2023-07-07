import axiosInstance from '../axiosConfig';
import { SaveJobPostRequest, SaveJobPostResponse } from './types';
import { UseMutationResult, useMutation } from 'react-query';

async function saveJob(postRequest: SaveJobPostRequest) {
    const response = await axiosInstance.post(`/api/saved-jobs`, postRequest);
    const data = await response.data;
    return data;
}
export function useSaveJob(): UseMutationResult<
    SaveJobPostResponse,
    unknown,
    SaveJobPostRequest
> {
    return useMutation(saveJob);
}
