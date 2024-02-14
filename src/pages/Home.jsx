import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Link to={"/login"}>로그인하러가기</Link>
    </div>
  );
};

export default Home;
