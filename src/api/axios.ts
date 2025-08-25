import axios from 'axios';
const token = localStorage.getItem('token');
const AcceptLanguage = localStorage.getItem('language');

export const customAxios = axios.create({
  baseURL: import.meta.env.VITE_API_URL as string,
  headers: {
    Authorization: token ? `Bearer ${token}` : '',
    'Accept-Language': `${AcceptLanguage}`,
  },
});
