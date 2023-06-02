import { useQuery } from 'react-query';
import { QueryKeys } from '../QueryKey';
import axiosInstance from '../axiosConfig';

export function useGetApplicantById(jobId: string) {
    const getApplicantById = async (jobId: string) => {
        const response = await axiosInstance.get(`/api/job-postings/${jobId}`);
        const data = await response.data;
        return data;
    };
    return useQuery(QueryKeys.RetrieveApplicantById, () =>
        getApplicantById(jobId)
    );
}
