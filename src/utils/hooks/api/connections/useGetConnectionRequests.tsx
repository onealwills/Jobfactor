import { useQuery } from 'react-query';
import { QueryKeys } from '../QueryKey';
import axiosInstance from '../axiosConfig';

export function useGetConnectionRequests() {
    const getConnectionRequests = async () => {
        const response = await axiosInstance.get(`/api/connection-requests`);
        const data = await response.data;
        return data;
    };
    return useQuery([QueryKeys.RetrieveConnectionRequests], () =>
    getConnectionRequests()
    );
}