import axiosInstance from '../axiosConfig';
import { SaveApplicantPostRequest, SaveApplicantPostResponse } from './types';
import { UseMutationResult, useMutation } from 'react-query';

async function saveApplicant(postRequest: SaveApplicantPostRequest) {
    const response = await axiosInstance.post(`/api/saved-applicants`, postRequest);
    const data = await response.data;
    return data;
}
export function useSaveApplicant(): UseMutationResult<
    SaveApplicantPostResponse,
    unknown,
    SaveApplicantPostRequest
> {
    return useMutation(saveApplicant);
}
