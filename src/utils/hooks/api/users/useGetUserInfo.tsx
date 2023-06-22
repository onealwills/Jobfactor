import { useQuery } from 'react-query';
import { QueryKeys } from '../QueryKey';
import axiosInstance from '../axiosConfig';

export function useGetUserInfo(accountId: string) {
    const getUserInfo = async (accountId: string) => {
        const response = await axiosInstance.get(`/api/users/accounts/${accountId}`);
        const data = await response.data;
        return data;
    };
    return useQuery(QueryKeys.RetrieveUserInfo, () => getUserInfo(accountId));
}
