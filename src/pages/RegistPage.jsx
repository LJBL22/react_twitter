import { register } from "api/auth";
import { IconLogo } from "assets/icons";
import AuthInput from "components/AuthInput";
import {
  AuthContainer,
  AuthInputContainer,
  AuthButton,
  AuthLinkText,
  AuthP,
} from "components/common/auth.styled";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Swal from "sweetalert2";
// import { useAuth } from "contexts/AuthContext";

const RegistPage = () => {
  const [account, setAccount] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");
  // const navigate = useNavigate();
  // const { register, isAuthenticated } = useAuth();

  const handleClick = async () => {
    if (account.length === 0) {
      return;
    }
    if (name.length === 0) {
      return;
    }
    if (password.length === 0) {
      return;
    }
    if (email.length === 0) {
      return;
    }

    if (checkPassword !== password) {
      Swal.fire({
        title: "密阿怪怪喔",
        icon: "success",
        showConfirmButton: false,
        timer: 3000,
        position: "top",
      });
      return;
    }

    const success = await register({
      account,
      name,
      password,
      checkPassword,
      email,
    });
    if (success) {
      Swal.fire({
        title: "註冊成功",
        icon: "success",
        showConfirmButton: false,
        timer: 3000,
        position: "top",
      });
      return;
    }
    Swal.fire({
      title: "註冊失敗",
      text: "重複的使用者帳號",
      icon: "error",
      showConfirmButton: false,
      timer: 3000,
      position: "top",
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
      <h1>建立你的帳號</h1>

      <AuthInputContainer>
        <AuthInput
          label="帳號"
          placeholder="請輸入帳號"
          value={account}
          onChange={(accountInputValue) => setAccount(accountInputValue)}
        />
      </AuthInputContainer>
      <AuthInputContainer>
        <AuthInput
          label="名稱"
          placeholder="請輸入使用者名稱"
          value={name}
          onChange={(nameInputValue) => setName(nameInputValue)}
        />
      </AuthInputContainer>
      <AuthInputContainer>
        <AuthInput
          label="Email"
          placeholder="請輸入 Email"
          value={email}
          onChange={(emailInputValue) => setEmail(emailInputValue)}
        />
      </AuthInputContainer>

      <AuthInputContainer>
        <AuthInput
          type="password"
          label="密碼"
          value={password}
          placeholder="請設定密碼"
          onChange={(passwordInputValue) => setPassword(passwordInputValue)}
        />
      </AuthInputContainer>
      <AuthInputContainer>
        <AuthInput
          type="password"
          label="密碼確認"
          value={checkPassword}
          placeholder="請再次輸入密碼"
          onChange={(passwordInputValue) =>
            setCheckPassword(passwordInputValue)
          }
        />
      </AuthInputContainer>
      <AuthButton onClick={handleClick}>註冊</AuthButton>
      <AuthP>
        {/* 尚未置中，再思考 */}
        <Link to="/login">
          <AuthLinkText>取消</AuthLinkText>
        </Link>
      </AuthP>
    </AuthContainer>
  );
};

export default RegistPage;
