import { useQuery } from 'react-query';
import { QueryKeys } from '../QueryKey';
import axiosInstance from '../axiosConfig';


export function useGetAllApplicantsByCompanyId(companyId: string) {
    const getAllApplicants = async (companyId: string) => {
        const response = await axiosInstance.get(`/api/applicants/company/${companyId}`);
        const data = await response.data;
        return data;
    };
    return useQuery(QueryKeys.RetrieveAllApplicantsByCompanyId, () => getAllApplicants(companyId));
}
