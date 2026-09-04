import axios from "axios"

const instance = axios.create({
    baseURL: "https://zyloo-api-v1.onrender.com",
    withCredentials: true
});

export default instance