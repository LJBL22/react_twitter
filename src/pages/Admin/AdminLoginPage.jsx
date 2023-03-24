import { IconLogo } from "assets/icons";
import AuthInput from "components/AuthInput";
import {
  AuthContainer,
  AuthInputContainer,
  AuthButton,
  AuthLinkText,
  AuthP,
} from "components/common/auth.styled";
import { Link } from "react-router-dom";
import { useState } from "react";
// import { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import Swal from "sweetalert2";
// import { useAuth } from "contexts/AuthContext";

const AdminLoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const navigate = useNavigate();
  // const { login, isAuthenticated } = useAuth();

  // const handleClick = async () => {
  //   // 拆開寫增加可讀性以及以利擴展
  //   // if (username.length === 0 || password.length === 0) return;
  //   if (username.length === 0) {
  //     return;
  //   }
  //   if (password.length === 0) {
  //     return;
  //   }
  //   const success = await login({
  //     username,
  //     password,
  //   });
  //   if (success) {
  //     Swal.fire({
  //       title: "登入成功",
  //       icon: "success",
  //       showConfirmButton: false,
  //       timer: 1000,
  //       position: "top",
  //     });
  //     return;
  //   }
  //   Swal.fire({
  //     title: "登入失敗",
  //     icon: "error",
  //     showConfirmButton: false,
  //     timer: 1000,
  //     position: "top",
  //   });
  // };
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
      <h1>後台登入</h1>

      <AuthInputContainer>
        <AuthInput
          label="帳號"
          placeholder="請輸入帳號"
          value={username}
          onChange={(nameInputValue) => setUsername(nameInputValue)}
        />
      </AuthInputContainer>

      <AuthInputContainer>
        <AuthInput
          type="password"
          label="密碼"
          placeholder="請輸入密碼"
          value={password}
          onChange={(passwordInputValue) => setPassword(passwordInputValue)}
        />
      </AuthInputContainer>
      {/* <AuthButton onClick={handleClick}>登入</AuthButton> */}
      <AuthButton>登入</AuthButton>
      <AuthP>
        <Link to="/login">
          <AuthLinkText>前台登入</AuthLinkText>
        </Link>
      </AuthP>
    </AuthContainer>
  );
};

export default AdminLoginPage;
