import axios from 'axios';
export const baseUrl = 'https://twitter-api-2020-production.up.railway.app/api';

// User
export const login = async ({ account, password }) => {
  try {
    const { data } = await axios.post(`${baseUrl}/users/signIn`, {
      account,
      password,
    });
    // 檢查用，未來可刪除
    // console.log(data)//應該要印出回傳的 data，教案只回傳一個 token
    const { token } = data;
    // console.log(token)//取鍵值，得到 token 一串
    if (token) {
      return { success: true, ...data };
    }
    return data;
  } catch (error) {
    // const { data, status } = error.response;
    // if (status === 401) {
    //   return { status: 'error', statusText: data.statusText };
    // }
    // if (status === 403) {
    //   return { status: 'error', statusText: data.statusText };
    // }
    console.log('[Login Failed]:', error);
  }
};
export const register = async ({
  account,
  name,
  password,
  checkPassword,
  email,
}) => {
  try {
    await axios.post(`${baseUrl}/users`, {
      account,
      name,
      password,
      checkPassword,
      email,
    });
    return { success: true };
  } catch (error) {
    console.error('[Register failed]:', error);
  }
};

// admin
export const adminLogin = async ({ account, password }) => {
  try {
    const { data } = await axios.post(`${baseUrl}/admin/signIn`, {
      account,
      password,
    });
    // 保留檢查用，後端已刪除多一層的 data
    // console.log(data)//應該要印出回傳的 data，教案只回傳一個 token
    const { token } = data;
    // console.log(token)//取鍵值，得到 token 一串
    if (token) {
      return { success: true, ...data };
    }
    return data;
  } catch (error) {
    console.error('[adminLogin failed]:', error);
  }
};

