import { useQuery } from 'react-query';
import { QueryKeys } from '../QueryKey';
import axiosInstance from '../axiosConfig';
import { AccountResponse } from './types';

export function useGetAccount(accountId: string) {
    const getAccount = async (accountId: string): Promise<AccountResponse> => {
        const response = await axiosInstance.get(`/accounts/${accountId}`);
        const data = await response.data;
        return data;
    };
    return useQuery([QueryKeys.RetrieveAccount, accountId], () =>
        getAccount(accountId)
    );
}
