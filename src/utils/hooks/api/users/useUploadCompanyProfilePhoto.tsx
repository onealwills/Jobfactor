import axiosInstance from '../axiosConfig';
import { UseMutationResult, useMutation } from 'react-query';
import { IUploadPhotoRequest } from './types';

async function uploadCompanyProfilePhoto(item: IUploadPhotoRequest) {
    const formData = new FormData();
    formData.append("file", item.file);
    const response = await axiosInstance.post(`/api/company-profiles/${item.profileId}/upload-photo`, formData);
    const data = await response.data;
    return data;
}
export function useUploadCompanyProfilePhoto(): UseMutationResult<
    unknown,
    unknown,
    IUploadPhotoRequest
> {
    return useMutation(uploadCompanyProfilePhoto);
}