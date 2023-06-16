import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://jobfactor-api-dev.azurewebsites.net'
});

// //get from local storage
// const accessToken = localStorage
//     .getItem(localStorageConstants.AccessToken)
//     ?.replace(/"/g, '');
// const bearerToken = `Bearer ${accessToken}`;
// axiosInstance.interceptors.request.use((config) => {
//     config.headers.Authorization = bearerToken;
//     return config;
// });

export default axiosInstance;
