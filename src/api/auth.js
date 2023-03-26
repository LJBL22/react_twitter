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
      return { success: true, ...data };
    }
    return data;
  } catch (error) {
    console.error('[Login failed]:', error);
  }
};
export const register = async ({ account, name, password, confirmPassword, email, errorMsg }) => {
  try {
    const { data } = await axios.post(`${authURL}/users`, {
      account, name, password, confirmPassword, email
    });
    const { token } = data;
    console.log(data);
    if (token) {
      return { success: true, ...data };
    }
    return data;
  } catch (error) {
    console.error(error);
  }
};

// export const checkPermission = async (token) => {
//   try {
//     const { data } = await axios.get(`${authURL}/test-token`, {
//       headers: {
//         Authorization: 'Bearer ' + token,
//       },
//     });

//     return data.success;
//   } catch (error) {
//     console.error('[Check Permission Failed]:', error);
//   }
// };


// admin
export const adminLogin = async ({ account, password }) => {
  try {
    const { data } = await axios.post(`${authURL}/admin/signIn`, {
      account,
      password,
    });
    const { token } = data;
    console.log(data);
    if (token) {
      return { success: true, ...data };
    }
    return data;
  } catch (error) {
    console.error('[adminLogin failed]:', error);
  }
};
