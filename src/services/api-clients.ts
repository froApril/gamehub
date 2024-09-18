import axios from "axios";

export interface FectchResponse<T> {
    count : number;
    results : T[];
}

export default axios.create({
    baseURL: 'https://api.rawg.io/api/',
    params: {
        key: '24ca8606b1ff4eef9030c285f456cc63'
    }
})