import { useQuery } from 'react-query';
import { QueryKeys } from '../QueryKey';
import axiosInstance from '../axiosConfig';

export function useGetSavedJobsByProfessionalId(professionalId: string) {
    const getSavedJobsByProfessionalId = async (professionalId: string) => {
        const response = await axiosInstance.get(`/api/saved-jobs/professional-profile/${professionalId}`);
        const data = await response.data;
        return data;
    };
    return useQuery(QueryKeys.RetrieveSavedJobsByProfessionalId, () => getSavedJobsByProfessionalId(professionalId));
}


