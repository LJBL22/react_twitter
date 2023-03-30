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

// 推薦跟隨的排名 get follow
export const getFollow = async (token) => {
  try {
    const res = await axiosInstance.get(`${baseUrl}/followships/top`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    // 拿到排名前十的推薦跟隨
    return res.data;
  } catch (error) {
    console.error(`[Get followship failed]`, error);
  }
};

export const following = async (id) => {
  try {
    const res = await axiosInstance.post(`${baseUrl}/followships`, {
      id
    })
    return res.data
  } catch (error) {
    console.error(`[Following failed]`, error)
  }
}

export const unfollow = async (id) => {
  try {
    const res = await axiosInstance.delete(`${baseUrl}/followships/${id}`)
    return res.data
  } catch (error) {
    console.error('[Unfollow failed]', error)
  }
}