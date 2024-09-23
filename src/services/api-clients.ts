import axios, { AxiosRequestConfig } from "axios";

export interface FectchResponse<T> {
    count : number;
    results : T[];
    next: string | null;
}

const axiosInstance = axios.create({
    baseURL: 'https://api.rawg.io/api/',
    params: {
        key: '24ca8606b1ff4eef9030c285f456cc63'
    }
})

class APIClient<T> {
    endpoint: string;
    
    constructor(endpoint: string) {
        this.endpoint = endpoint;
    }
    getAll = (config : AxiosRequestConfig) => {
        return axiosInstance.get<FectchResponse<T>>(this.endpoint, config).then(res=>res.data)
    }
}

export default APIClient
