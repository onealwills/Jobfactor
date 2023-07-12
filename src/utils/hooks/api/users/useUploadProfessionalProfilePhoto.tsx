import axiosInstance from '../axiosConfig';
import { UseMutationResult, useMutation } from 'react-query';
import { IUploadPhotoRequest } from './types';

async function uploadProfessionalProfilePhoto(item: IUploadPhotoRequest) {
    const formData = new FormData();
    formData.append("file", item.file);
    const response = await axiosInstance.post(`/api/professional-profiles/${item.profileId}/upload-photo`, formData);
    const data = await response.data;
    return data;
}
export function useUploadProfessionalProfilePhoto(): UseMutationResult<
    unknown,
    unknown,
    IUploadPhotoRequest
> {
    return useMutation(uploadProfessionalProfilePhoto);
}
