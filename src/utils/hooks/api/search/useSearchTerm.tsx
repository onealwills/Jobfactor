import { useQuery } from 'react-query';
import { QueryKeys } from '../QueryKey';
import axiosInstance from '../axiosConfig';

export function useGetSearchTerm(term: string, userId: string) {
    const getSearchTerm = async (term: string, userId: string) => {
        const response = await axiosInstance.get(`/api/search?term=${term}&userId=${userId}`);
        const data = await response.data;
        return data;
    };
    return useQuery(QueryKeys.RetrieveSearchTerm, () => getSearchTerm(term, userId), {
        enabled: (term && term.length > 2) ? true : false
    });
}