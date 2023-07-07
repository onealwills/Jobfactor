import { useQuery } from 'react-query';
import { QueryKeys } from '../QueryKey';
import axiosInstance from '../axiosConfig';

export function useGetSavedApplicantByCompanyId(professionalId: string) {
    const getSavedApplicantByCompanyId = async (professionalId: string) => {
        const response = await axiosInstance.get(`/api/saved-applicants/company-profile/${professionalId}`);
        const data = await response.data;
        return data;
    };
    return useQuery(QueryKeys.RetrieveSavedApplicantByCompanyId, () => getSavedApplicantByCompanyId(professionalId));
}


