import React, { useCallback, useState } from "react";

function App() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");

  const login = useCallback(() => {
    fetch(`${process.env.REACT_APP_BACKEND}api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: id,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.code === 200) {
          alert(data.message);
          setToken(data.data);
        } else {
          throw data;
        }
      }) // 받은 토큰을 상태에 저장
      .catch((err) => console.log(err));
  }, [id, password]);

  const test = useCallback(() => {
    fetch(`${process.env.REACT_APP_BACKEND}api/hello`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }, [token]);

  return (
    <div className="App">
      <form>
        <label>
          아이디
          <input autoComplete="username" onChange={(e) => setId(e.target.value)} />
        </label>
        <label>
          비밀번호
          <input
            autoComplete="new-password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="button" onClick={login}>
          로그인
        </button>
      </form>
      <button type="button" onClick={test}>
        테스트
      </button>
      <div>토큰 : {token}</div>
    </div>
  );
}

export default App;
