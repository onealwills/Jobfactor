import { useQuery } from 'react-query';
import { QueryKeys } from '../QueryKey';
import axiosInstance from '../axiosConfig';

export function useGetAllApplicants() {
    const getAllApplicants = async () => {
        const response = await axiosInstance.get(`/api/applicants`);
        const data = await response.data;
        return data;
    };
    return useQuery(QueryKeys.RetrieveAllApplicants, () => getAllApplicants());
}
