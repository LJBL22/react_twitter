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

const AdminLoginPage = () => {
  const [account, setAccount] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { adminLogin, isAuthenticated, currentUser } = useAuth();

  const handleClick = async () => {
    if (account.length === 0) {
      return;
    }
    if (password.length === 0) {
      return;
    }
    const success = await adminLogin({
      account,
      password,
    });
    if (success) {
      // console.log(currentUser);
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
  useEffect(() => {
    if (isAuthenticated) {
      navigate('/admin/tweets');
    }
  }, [navigate, isAuthenticated]);
  return (
    <AuthContainer>
      <div>
        <IconLogo />
      </div>
      <PageTitle>後台登入</PageTitle>

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
        <Link to='/login'>
          <AuthLinkText>前台登入</AuthLinkText>
        </Link>
      </AuthP>
    </AuthContainer>
  );
};

export default AdminLoginPage;
