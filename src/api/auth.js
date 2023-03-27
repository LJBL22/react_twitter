import axios from 'axios';
const authURL = 'https://dry-lowlands-42863.herokuapp.com/api';

// User
export const login = async ({ account, password }) => {
  try {
    const { data } = await axios.post(`${authURL}/users/signIn`, {
      account,
      password,
    });
    const { token } = data;

    if (token) {
      console.log(data)
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
    const { data } = await axios.post(`${authURL}/users`, {
      account,
      name,
      password,
      checkPassword,
      email,
    });
    const { token } = data;
    if (token) {
      return { success: true, ...data };
    }
    return data;
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
    const { token } = data;
    if (token) {
      return { success: true, ...data };
    }
    return data;
  } catch (error) {
    console.error('[adminLogin failed]:', error);
  }
};
