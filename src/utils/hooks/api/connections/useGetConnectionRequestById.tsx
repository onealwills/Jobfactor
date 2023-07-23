
import { useQuery } from 'react-query';
import { QueryKeys } from '../QueryKey';
import axiosInstance from '../axiosConfig';

export function useGetConnectionRequestById(id: string) {
    const getConnectionRequestById = async (id: string) => {
        const response = await axiosInstance.get(`/api/connection-requests/${id}`);
        const data = await response.data;
        return data;
    };
    return useQuery([QueryKeys.RetrieveConnectionRequestById, id], () =>
        getConnectionRequestById(id)
    );
}