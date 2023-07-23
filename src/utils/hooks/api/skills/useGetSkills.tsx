import { useQuery } from 'react-query';
import { QueryKeys } from '../QueryKey';
import axiosInstance from '../axiosConfig';

export function useGetSkills(skill: string, length: number) {
    const getSkills = async (skill: string, length: number) => {
        const response = await axiosInstance.get(`/api/skills/${skill !== '' ? skill : 'computer'}/${length}`);
        const data = await response.data;
        return data;
    };
    return useQuery(QueryKeys.RetrieveSkills, () => getSkills(skill, length));
}