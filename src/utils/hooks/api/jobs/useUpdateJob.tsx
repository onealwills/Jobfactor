import { UseMutationResult, useMutation } from 'react-query';
import axiosInstance from '../axiosConfig';
import { UpdateJobPatchRequest } from './types';

async function UpdateJobPost(patchRequest: UpdateJobPatchRequest) {
    const response = await axiosInstance.patch(`/api/job-postings`, patchRequest);
    const data = await response.data;
    return data;
}
export function useUpdateJobPost(): UseMutationResult<
    unknown,
    unknown,
    UpdateJobPatchRequest
> {
    return useMutation(UpdateJobPost);
}
