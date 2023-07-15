
import { useQuery } from 'react-query';
import { QueryKeys } from '../QueryKey';
import axiosInstance from '../axiosConfig';

export function useGetConnectionRequestReceived(userId: string) {
    const getConnectionRequestReceived = async (userId: string) => {
        const response = await axiosInstance.get(`/api/connection-requests/users/${userId}/received`);
        const data = await response.data;
        return data;
    };
    return useQuery([QueryKeys.RetrieveConnectionRequestReceived, userId], () =>
        getConnectionRequestReceived(userId)
    );
}
