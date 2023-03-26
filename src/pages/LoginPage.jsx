import { IconLogo } from 'assets/icons';
import AuthInput from 'components/AuthInput';
import {
  AuthContainer,
  AuthInputContainer,
  AuthButton,
  AuthLinkText,
  AuthP,
} from 'components/common/auth.styled';
// import { Link } from "react-router-dom";
// import { useState } from "react";
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { login } from 'api/auth';
// import { useAuth } from "contexts/AuthContext";

const LoginPage = () => {
  const [account, setAccount] = useState('');
  const [password, setPassword] = useState('');
  // const navigate = useNavigate();
  // const { login, isAuthenticated } = useAuth();

  const handleClick = async () => {
    if (account.length === 0) {
      return;
    }
    if (password.length === 0) {
      return;
    }

    const { success, token } = await login({
      account,
      password,
    });
    if (success) {
      localStorage.setItem('token', token);
      Swal.fire({
        title: '登入成功',
        icon: 'success',
        showConfirmButton: false,
        timer: 1000,
        position: 'top',
      });
      return;
    }
    Swal.fire({
      title: '登入失敗',
      icon: 'error',
      showConfirmButton: false,
      timer: 1000,
      position: 'top',
    });
  };
  // useEffect(() => {
  //   if (isAuthenticated) {
  //     navigate("/todos");
  //   }
  // }, [navigate, isAuthenticated]);
  return (
    <AuthContainer>
      <div>
        <IconLogo />
      </div>
      <h1>登入 Alphitter</h1>

      <AuthInputContainer>
        <AuthInput
          label='帳號'
          placeholder='請輸入帳號'
          value={account}
          onChange={(nameInputValue) => setAccount(nameInputValue)}
        />
      </AuthInputContainer>

      <AuthInputContainer>
        <AuthInput
          type='password'
          label='密碼'
          placeholder='請輸入密碼123456789$%'
          value={password}
          onChange={(passwordInputValue) => setPassword(passwordInputValue)}
        />
      </AuthInputContainer>
      <AuthButton onClick={handleClick}>登入</AuthButton>
      <AuthP>
        <Link to='/regist'>
          <AuthLinkText>註冊</AuthLinkText>
        </Link>
        ．
        <Link to='/admin'>
          <AuthLinkText>後台登入</AuthLinkText>
        </Link>
      </AuthP>
    </AuthContainer>
  );
};

export default LoginPage;
