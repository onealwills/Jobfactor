import { useQuery } from 'react-query';
import { QueryKeys } from '../QueryKey';
import axiosInstance from '../axiosConfig';

export function useGetConnections(userId: string) {
    const getConnections = async (userId: string) => {
        const response = await axiosInstance.get(`/api/connection-requests/users/${userId}`);
        const data = await response.data;
        return data;
    };
    return useQuery([QueryKeys.RetrieveConnections, userId], () =>
    getConnections(userId)
    );
}