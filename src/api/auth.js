import axios from 'axios';
const authURL = 'https://dry-lowlands-42863.herokuapp.com/api';

// User
export const login = async ({ account, password }) => {
  try {
    const { data } = await axios.post(`${authURL}/users/signIn`, {
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
    console.error('[Login failed]:', error);
  }
};
export const register = async ({
  account,
  name,
  password,
  checkPassword,
  email,
  errorMsg,
}) => {
  try {
    await axios.post(`${authURL}/users`, {
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
    const { data } = await axios.post(`${authURL}/admin/signIn`, {
      account,
      password,
    });
    console.log(data)//應該要印出回傳的 data，教案只回傳一個 token
    // 檢查發現資料多一個 data
    const { token } = data.data;
    console.log(token)//取鍵值，得到 token 一串
    if (token) {
      return { success: true, ...data.data };
    }
    return data;
  } catch (error) {
    console.error('[adminLogin failed]:', error);
  }
};
