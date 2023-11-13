import axios from 'axios';

const url = "http://localhost:5127/api"

export const proyectoApi = axios.create({
    baseURL: url
});



proyectoApi.interceptors.request.use(config => {
    config.headers = {
        ...config.headers,
        'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
    return config;
})
