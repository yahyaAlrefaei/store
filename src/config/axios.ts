import axios from "axios";

const baseURL = process.env.REACT_APP_API_URL

const http = axios.create({
    baseURL,
    timeout: 1000,
    headers:{'Content-Type': 'application/json'}
});

export default http