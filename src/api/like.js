import axios from 'axios';
import { baseUrl } from './auth';

const axiosInstance = axios.create({
  baseURL: baseUrl,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    console.error(error);
  }
);

// 對推文按like
export const likeTweet = async (id) => {
  try {
    const res = await axiosInstance.post(`${baseUrl}/tweets/${id}/like`);

    return res.data;
  } catch (error) {
    console.error('[likeTweet failed]', error);
  }
};

// 對推文按unlike
export const unlikeTweet = async (id) => {
  try {
    const res = await axiosInstance.post(`${baseUrl}/tweets/${id}/unlike`);

    return res.data;
  } catch (error) {
    console.error('[UnlikeTweet failed]', error);
  }
};
