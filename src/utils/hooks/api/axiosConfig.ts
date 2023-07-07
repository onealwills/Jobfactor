import axios from 'axios';
import { localStorageConstants } from '../../context/constants';

const axiosInstance = axios.create({
    baseURL: 'https://jobfactor-api-dev.azurewebsites.net'
    // baseURL: 'http://localhost:8000'
});

// //get from local storage
const accessToken = localStorage
    .getItem(localStorageConstants.AccessToken)
    ?.replace(/"/g, '');
const bearerToken = `Bearer ${accessToken}`;
axiosInstance.interceptors.request.use((config) => {
    config.headers.Authorization = bearerToken;
    document.body.classList.add('loading');
    return config;
});

axiosInstance.interceptors.response.use((response) => {
    document.body.classList.remove('loading');
    return response;
}, (error) => {
    document.body.classList.remove('loading');
    return Promise.reject(error);
});
export default axiosInstance;
