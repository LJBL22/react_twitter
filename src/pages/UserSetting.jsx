import AuthInput from 'components/AuthInput';
import { AuthInputContainer } from 'components/common/auth.styled';
import { Header, ThemeButton } from 'components/common/common.styled';
import { useAuth } from 'contexts/AuthContext';
import { useUser } from 'contexts/UserContext';
import { useState } from 'react';

const UserSetting = () => {
  const { currentUser } = useUser();
  const { handleUserUpdate } = useAuth();
  const nextUser = { ...currentUser };
  const { account: userAccount, name: userName, email: userEmail } = nextUser;
  const [account, setAccount] = useState(userAccount);
  const [name, setName] = useState(userName);
  const [email, setEmail] = useState(userEmail);
  const [password, setPassword] = useState('');
  const [checkPassword, setCheckPassword] = useState('');
  //  const [showErrorMsg, setShowErrorMsg] = useState('');
  //  const [showSuccessMsg, setShowSuccessMsg] = useState(false);
  //  const nameLength = name.length;

  // const handleClick = async () => {
  //   if (
  //     account.length === 0 ||
  //     name.length === 0 ||
  //     email.length === 0 ||
  //     password.length === 0 ||
  //     checkPassword.length === 0
  //   ) {
  //     setShowErrorMsg('欄位不可空白!');
  //     setTimeout(() => {
  //       setShowErrorMsg(false);
  //     }, 1000);
  //     return;
  //   }
  //   if (password !== checkPassword) {
  //     setShowErrorMsg('密碼與確認密碼不符!');
  //     setTimeout(() => {
  //       setShowErrorMsg(false);
  //     }, 1000);
  //     return;
  //   }
  //   const token = localStorage.getItem('token');
  //   if (!token) {
  //     setShowErrorMsg('unauthorized');
  //     setTimeout(() => {
  //       setShowErrorMsg(false);
  //     }, 1000);
  //     return;
  //   }

  //   const { data, status } = await changeUserInformation({
  //     id: currentUser.id,
  //     account,
  //     name,
  //     email,
  //     password,
  //     checkPassword,
  //   });
  //   console.log(status);
  //   if (data && status === 200) {
  //     setShowSuccessMsg(true);
  //     setTimeout(() => {
  //       setShowSuccessMsg(false);
  //     }, 1000);
  //   }
  //   // 將新data修正至 currentUser
  //   const newCurrentUser = {
  //     ...currentUser,
  //     account: data.account,
  //     name: data.name,
  //     email: data.email,
  //   };
  //   handleUserUpdate(newCurrentUser);
  // };
  return (
    <>
      <Header>帳戶設定</Header>
      <AuthInputContainer>
        <AuthInput
          label='帳號'
          placeholder='請輸入帳號'
          value={account}
          onChange={(accountInputValue) => setAccount(accountInputValue)}
        />
      </AuthInputContainer>
      <AuthInputContainer>
        <AuthInput
          label='名稱'
          placeholder='請輸入使用者名稱'
          value={name}
          onChange={(nameInputValue) => setName(nameInputValue)}
        />
      </AuthInputContainer>
      <AuthInputContainer>
        <AuthInput
          type='email'
          label='Email'
          placeholder='請輸入 Email'
          value={email}
          onChange={(emailInputValue) => setEmail(emailInputValue)}
        />
      </AuthInputContainer>

      <AuthInputContainer>
        <AuthInput
          type='password'
          label='密碼'
          value={password}
          placeholder='請設定密碼'
          onChange={(passwordInputValue) => setPassword(passwordInputValue)}
        />
      </AuthInputContainer>
      <AuthInputContainer>
        <AuthInput
          type='password'
          label='密碼再確認'
          value={checkPassword}
          placeholder='請再次輸入密碼'
          onChange={(passwordInputValue) =>
            setCheckPassword(passwordInputValue)
          }
          // 自定義正則表達式，確認密碼確認和密碼是否一致
          pattern={`^${password}$`}
          // required 屬性表示這個欄位必填
          required
        />
        {checkPassword !== password ? (
          <span style={{ color: 'purple' }}>密碼不一致，請重新確認</span>
        ) : (
          ''
        )}
      </AuthInputContainer>
      <ThemeButton width='88px' onClick={handleUserUpdate}>
        儲存
      </ThemeButton>
    </>
  );
};

export default UserSetting;
