
import { useQuery } from 'react-query';
import { QueryKeys } from '../QueryKey';
import axiosInstance from '../axiosConfig';

export function useGetConnectionRequestSent(userId: string) {
    const getConnectionRequestSent = async (userId: string) => {
        const response = await axiosInstance.get(`/api/connection-requests/users/${userId}/sent`);
        const data = await response.data;
        return data;
    };
    return useQuery([QueryKeys.RetrieveConnectionRequestSent, userId], () =>
        getConnectionRequestSent(userId)
    );
}