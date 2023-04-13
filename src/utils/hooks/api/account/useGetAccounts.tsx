import { useQuery } from 'react-query';
import { QueryKeys } from '../QueryKey';
import axiosInstance from '../axiosConfig';
import { AccountResponse } from './types';

export function useGetAccounts() {
    const getAccounts = async (): Promise<AccountResponse[]> => {
        const response = await axiosInstance.get(`/accounts`);
        const data = await response.data;
        return data;
    };
    return useQuery(QueryKeys.RetrieveAccount, () => getAccounts());
}
