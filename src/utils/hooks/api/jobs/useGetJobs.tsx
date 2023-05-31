import { useQuery } from 'react-query';
import { QueryKeys } from '../QueryKey';
import axiosInstance from '../axiosConfig';

export function useGetJobs() {
    const getJobs = async () => {
        const response = await axiosInstance.get(`/api/job-postings`);
        const data = await response.data;
        return data;
    };
    return useQuery(QueryKeys.RetrieveJobs, () => getJobs());
}
