import axios from 'axios';
import 'babel-polyfill';

/**
 * Define axios constant instance (path)
 */
const Api = axios.create({
    baseURL: 'https://exemple.com/api/',
    headers: {
        "Content-Type": "application/json"
    }
});

export default Api;