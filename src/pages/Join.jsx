import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Join = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
    oauthId: parseInt(localStorage.getItem("oauthId")),
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND}api/v1/user/join`,
        userData
      );
      localStorage.setItem("accessToken", response.data.data);
      navigate("/", { replace: true });
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div>
      <h2>Join</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={userData.username}
            onChange={handleChange}
            autoComplete="off"
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={userData.email}
            onChange={handleChange}
            autoComplete="off"
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={userData.password}
            onChange={handleChange}
            autoComplete="off"
            required
          />
        </div>
        <button type="submit">Join</button>
      </form>
    </div>
  );
};

export default Join;
