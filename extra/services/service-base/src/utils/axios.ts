import axios from 'axios';

export const initInstance = (baseUrl: string) => {
    return axios.create({
        baseURL: baseUrl,
    });
};
