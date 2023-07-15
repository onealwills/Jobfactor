import { useQuery } from 'react-query';
import { QueryKeys } from '../QueryKey';
import axiosInstance from '../axiosConfig';

export function useGetSearchTerm(term: string) {
    const getSearchTerm = async (term: string) => {
        const response = await axiosInstance.get(`/api/search?term=${term}`);
        const data = await response.data;
        return data;
    };
    return useQuery(QueryKeys.RetrieveSearchTerm, () => getSearchTerm(term), {
        enabled: (term && term.length > 2) ? true : false
    });
}