
import axiosInstance from '../axiosConfig';
import { CreateJobPostRequest } from './types';
import { UseMutationResult, useMutation } from 'react-query';

async function createJobPost(postRequest: CreateJobPostRequest) {
    const response = await axiosInstance.post(
        `/api/job-postings`,
        postRequest
    );
    const data = await response.data;
    return data;
}
export function useCreateJobPost(): UseMutationResult<unknown, unknown, CreateJobPostRequest> {
    return useMutation(createJobPost);
}