import { useQuery } from 'react-query';
import { QueryKeys } from '../QueryKey';
import { localStorageConstants } from '../../../context/constants';
import axios from 'axios';

export function useGetUserInfo(accountId: string) {
    const accessToken = localStorage.getItem(localStorageConstants.AccessToken)?.replace(/"/g, '');
    const getUserInfo = async (accountId: string) => {
        const response = await axios.get(
            `https://jobfactor-api-dev.azurewebsites.net/api/users/accounts/${accountId}`,
            { headers: { Authorization: `Bearer ${accessToken}` } }
        );
        const data = await response.data;
        return data;
    };
    return useQuery(QueryKeys.RetrieveUserInfo, () => getUserInfo(accountId));
}
