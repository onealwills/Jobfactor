import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://jobfactor-api-dev.azurewebsites.net'
});

// //get from local storage
// const accessToken = localStorage
//     .getItem(localStorageConstants.AccessToken)
//     ?.replace(/"/g, '');
// const bearerToken = `Bearer ${accessToken}`;
axiosInstance.interceptors.request.use((config) => {
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
