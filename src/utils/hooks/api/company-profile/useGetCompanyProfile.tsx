import { useQuery } from 'react-query';
import { QueryKeys } from '../QueryKey';
import axiosInstance from '../axiosConfig';

export function useGetCompanyProfileById(id: string) {
    const getCompanyProfileById = async (id: string) => {
        const response = await axiosInstance.get(`/api/company-profiles/company/${id}`);
        const data = await response.data;
        return data;
    };
    return useQuery(QueryKeys.RetrieveCompanyProfileById, () => getCompanyProfileById(id));
}


