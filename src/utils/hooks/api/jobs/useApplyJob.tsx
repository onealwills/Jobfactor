

import axiosInstance from '../axiosConfig';
import { ApplyJobPostRequest } from './types';
import { UseMutationResult, useMutation } from 'react-query';

async function applyJob(postRequest: ApplyJobPostRequest) {
    const response = await axiosInstance.post(
        `/api/applicants`,
        postRequest
    );
    const data = await response.data;
    return data;
}
export function useApplyJob(): UseMutationResult<unknown, unknown, ApplyJobPostRequest> {
    return useMutation(applyJob);
}