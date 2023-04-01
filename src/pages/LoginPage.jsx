import { IconLogo } from 'assets/icons';
import AuthInput from 'components/AuthInput';
import {
  AuthContainer,
  AuthInputContainer,
  AuthLinkText,
  AuthP,
} from 'components/common/auth.styled';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useAuth } from 'contexts/AuthContext';
import { ThemeButton, PageTitle } from 'components/common/common.styled';

const LoginPage = () => {
  const [account, setAccount] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { login, isAuthenticated } = useAuth();

  const handleClick = async () => {
    if (account.length === 0) {
      return;
    }
    if (password.length === 0) {
      return;
    }

    // 只能單純 success
    //現在這個寫法會 undefined
    const { success, status, statusText } = await login({
      account,
      password,
    });
    console.log('success', success);
    console.log('account', account);
    console.log('password', password);
    if (success) {
      Swal.fire({
        title: '登入成功',
        icon: 'success',
        showConfirmButton: false,
        timer: 1000,
        position: 'top',
      });
      navigate('/tweets');
      return;
    }
    if (status === 'error' && statusText)
      Swal.fire({
        title: '登入失敗',
        icon: 'error',
        text: `${statusText}`,
        showConfirmButton: false,
        timer: 1000,
        position: 'top',
      });
  };
  useEffect(() => {
    if (isAuthenticated) {
      navigate('/tweets');
    }
  }, [navigate, isAuthenticated]);
  return (
    <AuthContainer>
      <div>
        <IconLogo />
      </div>
      <PageTitle>登入 Alphitter</PageTitle>

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
          placeholder='請輸入密碼'
          value={password}
          onChange={(passwordInputValue) => setPassword(passwordInputValue)}
        />
      </AuthInputContainer>
      <ThemeButton width='100%' onClick={handleClick}>
        登入
      </ThemeButton>
      <AuthP>
        <Link to='/regist'>
          <AuthLinkText>註冊</AuthLinkText>
        </Link>
        &ensp;．&ensp;
        <Link to='/admin'>
          <AuthLinkText>後台登入</AuthLinkText>
        </Link>
      </AuthP>
    </AuthContainer>
  );
};

export default LoginPage;
