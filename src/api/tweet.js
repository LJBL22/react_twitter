import axios from 'axios';
const baseUrl = 'https://dry-lowlands-42863.herokuapp.com/api';

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

// 觀看所有的推文
export const getTweets = async () => {
  try {
    const res = await axiosInstance.get(`${baseUrl}/tweets`);
    // console.log('res', res);
    // 拿到資料庫裡存的所有的推文
    return res.data;
  } catch (error) {
    console.error(`[Get all tweets failed]`, error);
  }
};

// 新增一則推文, 新增的內容 description
export const createTweet = async ({ description }) => {
  try {
    const res = await axiosInstance.post(`${baseUrl}/tweets`, { description });
    // console.log('res-create', res);
    // 在這裡要抓到目前存的全部的 tweets，後面新增才可以把新的推文推到舊的tweets陣列裡
    return res.data;
  } catch (error) {
    console.error(`[Create the new tweet failed]`, error);
  }
};

// 觀看一則推文
export const getSingleTweet = async (id) => {
  try {
    const res = await axiosInstance.get(`${baseUrl}/tweets/${id}`);
    console.log('res_getATweet', res.data);
    return res.data;
  } catch (error) {
    console.error(`[Get a tweet failed]`, error);
  }
};

// 觀看所有回覆
export const getReplies = async (id) => {
  try {
    const res = await axiosInstance.get(`${baseUrl}/tweets/${id}/replies`);
    console.log('res_getReplies', res.data);
    return res.data;
  } catch (error) {
    console.error(`[Get all tweet replies failed]`, error);
  }
};

// 在特定貼文新增回覆
export const replyTweet = async (payload) => {
  const { id, comment } = payload;
  try {
    const res = await axiosInstance.post(`${baseUrl}/tweets/${id}/replies`, {
      comment,
    });
    // console.log('res_tweetReply', res.data);
    return res.data;
  } catch (error) {
    console.error('[Reply tweet failed]', error);
  }
};
