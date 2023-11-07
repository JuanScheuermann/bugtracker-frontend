import axios from 'axios';

const url = "http://localhost:5127/api"

export const proyectoApi = axios.create({
    baseURL: url
});

const { token } = JSON.parse(localStorage.getItem('user'))

proyectoApi.interceptors.request.use(config => {
    config.headers = {
        ...config.headers,
        'Authorization': `Bearer ${token}`
    }

    return config;
})