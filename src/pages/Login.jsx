import React from "react";

const Login = () => {
  const handleLoginKakao = () => {
    window.location.href = `${process.env.REACT_APP_BACKEND}api/v1/oauth/kakao`;
  };
  const handleLoginNaver = () => {
    window.location.href = `${process.env.REACT_APP_BACKEND}api/v1/oauth/naver`;
  };
  return (
    <div>
      <button onClick={handleLoginKakao}>카카오 로그인</button>
      <button onClick={handleLoginNaver}>네이버 로그인</button>
    </div>
  );
};

export default Login;
