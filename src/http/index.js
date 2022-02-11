import axios from 'axios';
import { toast } from 'react-toastify';


const api = axios.create({
    baseURL: 'https://socialshopia-api.herokuapp.com/api/',
    // baseURL: 'http://localhost:5500/api/',
    withCredentials: true
});

//Categories
export const getFeaturedCategories = () => api.get('/public/categories/featured');
export const getCategories = () => api.get('/public/categories');

//Products
export const getFeaturedProducts = () => api.get('/public/products/featured');
export const getProducts = () => api.get('/public/products');
export const getProductBySlug = slug => api.get('/public/product/' + slug);
export const getTodaysDealProducts = () => api.get('/public/products/todaysdeal');

//Banners
export const getBanners = () => api.get('/public/banners');

//Auth
export const doLogin = body => api.post('/auth/login', body);
export const doRegister = body => api.post('/auth/register', body);
export const doForgot = body => api.post('/auth/forgot', body);

api.interceptors.response.use((response) => {
    return response.data;
}, (error) => {
    toast.error(error.response.data.message);
    return error.response.data;
});

export default api;