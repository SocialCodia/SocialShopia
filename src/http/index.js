import axios from 'axios';
import { toast } from 'react-toastify';


const api = axios.create({
    baseURL: 'https://socialshopia-api.herokuapp.com/api/',
    withCredentials: true
});

//Categories
export const getFeaturedCategories = () => api.get('/public/categories/featured');
export const getCategories = () => api.get('/public/categories');

//Products
export const getFeaturedProducts = () => api.get('/public/products/featured');
export const getProducts = () => api.get('/public/products');
export const getTodaysDealProducts = () => api.get('/public/products/todaysdeal');

//Banners
export const getBanners = () => api.get('/public/banners');


api.interceptors.response.use((response) => {
    return response.data;
}, (error) => {
    toast.error(error.response.data.message);
    return error.response.data;
});

export default api;