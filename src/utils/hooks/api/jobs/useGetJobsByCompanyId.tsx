import { useQuery } from 'react-query';
import { QueryKeys } from '../QueryKey';
import axiosInstance from '../axiosConfig';


export function useGetJobsByCompanyId(companyId: string) {
    const getJobs = async (companyId: string) => {
        const response = await axiosInstance.get(`/api/job-postings/company/${companyId}`);
        const data = await response.data;
        return data;
    };
    return useQuery(QueryKeys.RetrieveJobsByCompanyId, () => getJobs(companyId));
}
