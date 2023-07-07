import { useQuery } from 'react-query';
import { QueryKeys } from '../QueryKey';
import axiosInstance from '../axiosConfig';

export function useGetAppliedJobs(professionalProfileId: string) {
    const getAppliedJobs = async (professionalProfileId: string) => {
        const response = await axiosInstance.get(
            `/api/professional-profiles/${professionalProfileId}/applied-jobs`
        );
        const data = await response.data;
        return data;
    };
    return useQuery(QueryKeys.RetrieveAppliedJobs, () =>
        getAppliedJobs(professionalProfileId)
    );
}
