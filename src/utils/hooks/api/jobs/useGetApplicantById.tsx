import { useQuery } from 'react-query';
import { QueryKeys } from '../QueryKey';
import axiosInstance from '../axiosConfig';

export function useGetApplicantById(applicantId: string) {
    const getApplicantById = async (applicantId: string) => {
        const response = await axiosInstance.get(`/api/applicants/${applicantId}`);
        const data = await response.data;
        return data;
    };
    return useQuery(QueryKeys.RetrieveApplicantById, () =>
        getApplicantById(applicantId)
    );
}
