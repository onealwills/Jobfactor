import { useQuery } from 'react-query';
import { QueryKeys } from '../QueryKey';
import axiosInstance from '../axiosConfig';

export function useGetJobById(jobId: string, professionalProfileId: string, isProfessionalProfile?: boolean) {
    const getJobById = async (jobId: string, professionalProfileId: string) => {
        const response = await axiosInstance.get(`/api/job-postings/${jobId}?professionalProfileId=${professionalProfileId}&isProfessionalProfile=${isProfessionalProfile ?? 'false'}`);
        const data = await response.data;
        return data;
    };
    return useQuery(QueryKeys.RetrieveJobById, () => getJobById(jobId, professionalProfileId));
}
