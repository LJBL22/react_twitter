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

// 看特定使用者資料
export async function getUserData(userId) {
  try {
    // 這裡要取得 currentMember的 userId
    const res = await axiosInstance.get(`${baseUrl}/users/${userId}`);
    // console.log('getUser', res);
    return res.data;
  } catch (error) {
    console.error('[Get User Data failed]:', error);
  }
}
// 看某使用者的推文
export async function getUserTweets(userId) {
  try {
    const res = await axiosInstance.get(`${baseUrl}/users/${userId}/tweets`);
    // console.log('getUserTweets', res);
    return res.data;
  } catch (error) {
    console.error('[Get user tweets failed]:', error);
  }
}

//看某使用者回覆的推文
export async function getUserRelies(userId) {
  try {
    const res = await axiosInstance.get(
      `${baseUrl}/users/${userId}/replied_tweets`
    );
    // console.log('getUserReplies', res);
    return res.data;
  } catch (error) {
    console.error('[Get user replies failed]:', error);
  }
}

// 看特定使用者的likes
export async function getUserLikes(userId) {
  try {
    const res = await axiosInstance.get(`${baseUrl}/users/${userId}/likes`);
    // console.log('getUserLikes', res);
    return res.data;
  } catch (error) {
    console.error('[Get user likes failed]:', error);
  }
}

// 看特定使用者的追隨者
export const getFollowers = async (userId) => {
  try {
    const res = await axiosInstance.get(`${baseUrl}/users/${userId}/followers`);

    return res.data;
  } catch (error) {
    console.log(`[getFollowers failed]`, error);
  }
};
// 看特定使用者的追蹤
export const getFollowings = async (userId) => {
  try {
    const res = await axiosInstance.get(
      `${baseUrl}/users/${userId}/followings`
    );

    return res.data;
  } catch (error) {
    console.log(`[getFollowings failed]`, error);
  }
};
// 使用者編輯自己的資料
export async function changeUserInformation(payload) {
  const {
    userId,
    account,
    name,
    email,
    password,
    checkPassword,
  } = payload;
  try {
    const res = await axiosInstance.patch(`${baseUrl}/users/${userId}`, {
      account,
      name,
      email,
      password,
      checkPassword,
    });
    const { data, status } = res;
    // console.log('updateUser', res);
    return { data, status };
  } catch (error) {
    console.error('[Patch User failed]: ', error);
  }
}

// * 修改個人資料 profile
export async function changeUserProfile(payload) {
  const { userId, name, introduction, avatar, coverUrl } = payload;
  const config = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'multipart/form-data',
    },
  };
  try {
    const res = await axiosInstance.put(
      `${baseUrl}/users/${userId}`,
      {
        name,
        introduction,
        avatar,
        coverUrl,
      },
      config
    );
    const { data, status } = res;
    return { data, status };
  } catch (error) {
    console.error('[Change User Profile failed]: ', error);
  }
}
