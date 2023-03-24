import axios from 'axios';
const authURL = 'https://dry-lowlands-42863.herokuapp.com/api';

export const login = async ({ account, password }) => {
  try {
    const { data } = await axios.post(`${authURL}/users/signIn`, {
      account,
      password,
    });
    const { authToken } = data;
    console.log(data);
    if (authToken) {
      return { success: true, ...data };
    }
    return data;
  } catch (error) {
    console.error('[Login failed]:', error);
  }
};

export const register = async ({ account, email, password }) => {
  try {
    const { data } = await axios.post(`${authURL}/register`, {
      account,
      email,
      password,
    });
    const { authToken } = data;
    if (authToken) {
      return { success: true, ...data };
    }
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const checkPermission = async (authToken) => {
  try {
    const { data } = await axios.get(`${authURL}/test-token`, {
      headers: {
        Authorization: 'Bearer ' + authToken,
      },
    });

    return data.success;
  } catch (error) {
    console.error('[Check Permission Failed]:', error);
  }
};
