import { useQuery } from 'react-query';
import { QueryKeys } from '../QueryKey';
import axiosInstance from '../axiosConfig';

export function useGetProfessionalProfileById(id: string) {
    const getProfessionalProfileById = async (id: string) => {
        const response = await axiosInstance.get(`/api/professional-profiles/${id}`);
        const data = await response.data;
        return data;
    };
    return useQuery(QueryKeys.RetrieveProfessionalProfileById, () => getProfessionalProfileById(id));
}


