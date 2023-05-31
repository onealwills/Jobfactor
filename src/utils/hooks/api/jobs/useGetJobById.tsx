import { useQuery } from 'react-query';
import { QueryKeys } from '../QueryKey';
import axiosInstance from '../axiosConfig';

export function useGetJobById(jobId: string) {
    const getJobById = async (jobId: string) => {
        const response = await axiosInstance.get(`/api/job-postings/${jobId}`);
        const data = await response.data;
        return data;
    };
    return useQuery(QueryKeys.RetrieveJobById, () => getJobById(jobId));
}
