import axios from "axios";

const baseURL = 'http://localhost:4000'

const http = axios.create({
    baseURL,
    timeout: 1000,
    headers:{'Content-Type': 'application/json'}
});

export default http