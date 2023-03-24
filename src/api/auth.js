import axios from 'axios';
const authURL = 'https://todo-list.alphacamp.io/api/auth';

export const login = async ({ username, password }) => {
  try {
    const { data } = await axios.post(`${authURL}/login`, {
      username,
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

export const register = async ({ username, email, password }) => {
  try {
    const { data } = await axios.post(`${authURL}/register`, {
      username,
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
