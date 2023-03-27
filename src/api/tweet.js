import axios from 'axios';
const baseUrl = 'https://dry-lowlands-42863.herokuapp.com/api/tweets';

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

// (暫時使用) 從 localStorage 中讀取 token
const token = localStorage.getItem('token');

// (暫時使用) 在 headers 中添加 token
const headers = {
  Authorization: `Bearer ${token}`,
};

// 觀看所有的推文
export const getTweets = async () => {
  try {
    // const res = await axios.get(`${baseUrl}`);
    // 暫時改寫加入上面取得的header
    const res = await axiosInstance.get(`${baseUrl}`);
    console.log('res', res);
    // 拿到資料庫裡存的所有的推文
    return res.data;
  } catch (error) {
    console.error(`[Get all tweets failed]`, error);
  }
};

// 新增一則推文, 新增的內容 description
export const createTweet = async ({ description }) => {
  try {
    const res = await axiosInstance.post(`${baseUrl}`, { description });
    console.log('res-create', res);
    // 在這裡要抓到目前存的全部的 tweets，後面新增才可以把新的推文推到舊的tweets陣列裡
    return res;
  } catch (error) {
    console.error(`[Create the new tweet failed]`, error);
  }
};

// 觀看所有回覆
export const getReplis = () => {};

// 新增回覆
export const tweetReply = () => {};
