import axios from 'axios';
import { toast } from 'react-toastify';


const api = axios.create({
    baseURL: 'https://socialshopia-api.herokuapp.com/api/',
    withCredentials: true
});

export const getFeatureCategories = () => api.get('/public/categories/featured');
export const getCategories = () => api.get('/public/categories');



api.interceptors.response.use((response) => {
    return response.data;
}, (error) => {
    toast.error(error.response.data.message);
    return error.response.data;
});

export default api;