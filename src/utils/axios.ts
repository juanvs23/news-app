import Axios from "axios";

export const axiosInstance = Axios.create({
    baseURL: process.env.NEXT_PUBLIC_NEWS_ENDPOINT,
    timeout: 1000,
    headers: {
        "Content-Type": "application/json",
    },
    
});