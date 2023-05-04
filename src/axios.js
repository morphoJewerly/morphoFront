import axios from "axios";
const instance = axios.create({
    baseURL : "https://140e-188-191-234-130.eu.ngrok.io"
})
instance.interceptors.request.use((config) => {
config.headers.Authorization = window.localStorage.getItem("token");
return config;
})

export default instance;