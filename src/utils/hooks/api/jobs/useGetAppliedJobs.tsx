import { useQuery } from 'react-query';
import { QueryKeys } from '../QueryKey';
import axiosInstance from '../axiosConfig';

export function useGetAppliedJobs(userId: string) {
    const getAppliedJobs = async (userId: string) => {
        const response = await axiosInstance.get(
            `/api/professional-profiles/${userId}/applied-jobs`
        );
        const data = await response.data;
        return data;
    };
    return useQuery(QueryKeys.RetrieveAppliedJobs, () =>
        getAppliedJobs(userId)
    );
}
