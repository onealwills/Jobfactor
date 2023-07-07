import { useQuery } from 'react-query';
import { QueryKeys } from '../QueryKey';
import axiosInstance from '../axiosConfig';

export function useGetJobs(professionalProfileId: string) {
    const getJobs = async (professionalProfileId: string) => {
        const response = await axiosInstance.get(`/api/job-postings?professionalProfileId=${professionalProfileId}&isProfessionalProfile=true`);
        const data = await response.data;
        return data;
    };
    return useQuery(QueryKeys.RetrieveJobs, () => getJobs(professionalProfileId));
}


