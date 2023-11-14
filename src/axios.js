import axios from "axios";
const instance = axios.create({
    baseURL : "https://walrus-app-fq6cy.ondigitalocean.app"
    // baseURL : "http://localhost:4444"
})
instance.interceptors.request.use((config) => {
config.headers.Authorization = window.localStorage.getItem("token");
return config;
})

export default instance;