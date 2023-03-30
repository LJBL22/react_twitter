import axios from 'axios';
const baseUrl = 'https://dry-lowlands-42863.herokuapp.com/api';

const axiosInstance = axios.create({
  baseURL: baseUrl,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('adminToken');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    console.error(error);
  }
);

// 後台取得推文
export const adminGetTweets = async () => {
  try {
    const res = await axiosInstance.get(`${baseUrl}/admin/tweets/`);
    // console.log('res', res);
    // 拿到資料庫裡存的所有的推文
    return res.data;
  } catch (error) {
    console.error('[adminGetTweets failed]', error);
  }
};

// 刪除一篇推文
export async function deleteTweet
  (id) {
  try {
    const res = await axiosInstance.delete(`${baseUrl}/admin/tweets/${id}`);
    const { data, status } = res;
    return { data, status };
  } catch (error) {
    console.error('[Admin Delete Tweet failed]:', error);
  }
}

// 後台查看使用者
export async function adminGetAllUsers() {
  try {
    console.log('test api');
    const res = await axiosInstance.get(`${baseUrl}/admin/users`);
    return res.data;
  } catch (error) {
    console.error('[Admin Delete Tweet failed]: ', error);
  }
}