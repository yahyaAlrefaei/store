import axios from "axios";

const baseURL = process.env.BASE_API

const http = axios.create({
    baseURL,
    timeout: 1000,
    headers:{'Content-Type': 'application/json'}
});

export default http