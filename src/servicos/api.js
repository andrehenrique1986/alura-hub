import axios from "axios";

const api = axios.create({
    baseURL: "http://172.24.240.1:3000/"
});

export default api;