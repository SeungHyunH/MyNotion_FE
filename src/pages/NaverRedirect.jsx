import React, { useCallback, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const NaverRedirect = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleOauthNaver = useCallback(
    async (code) => {
      try {
        // 네이버로부터 받아온 code를 서버에 전달하여 카카오로 회원가입 & 로그인한다
        const response = await axios.get(
          `${process.env.REACT_APP_BACKEND}api/v1/oauth/login/naver?code=${code}`
        );
        const data = response.data; // 응답 데이터
        switch (data.code) {
          case "S-01":
            alert("로그인 성공");
            navigate("/", { replace: true });
            break;
          case "S-02":
            localStorage.setItem("oauthId", data.data);
            navigate("/join", { replace: true });
            break;
          default:
            navigate("/", { replace: true });
        }
      } catch (error) {
        console.log(error.response);
      }
    },
    [navigate]
  );

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const code = searchParams.get("code"); // 네이버는 Redirect 시키면서 code를 쿼리 스트링으로 준다.
    if (code) {
      alert("CODE = " + code);
      handleOauthNaver(code);
    }
  }, [location, handleOauthNaver]);

  return (
    <div>
      <div>Processing...</div>
    </div>
  );
};

export default NaverRedirect;
