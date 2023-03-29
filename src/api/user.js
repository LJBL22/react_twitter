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
    return Promise.reject(error);
  }
);

// 取得目前登入的使用者資料

// 看特定使用者資料
export async function getUserData(userId) {
  try {
    // 這裡要取得 currentMember的 userId
    const res = await axiosInstance.get(`${baseUrl}/users/${userId}`);
    console.log('getUser', res);
    return res.data;
  } catch (error) {
    console.error('[Get User Data failed]:', error);
  }
}
// 看某使用者的推文
export async function getUserTweets(userId) {
  try {
    const res = await axiosInstance.get(`${baseUrl}/users/${userId}/tweets`);
    console.log('getUserTweets', res);
    return res.data;
  } catch (error) {
    console.error('[Get user tweets failed]:', error);
  }
}

//看某使用者回覆的推文
// 看特定使用者的likes
// 看特定使用者的追隨者
// 看特定使用者的追蹤
// 使用者編輯自己的資料
