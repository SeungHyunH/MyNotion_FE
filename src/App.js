import React, { useEffect } from "react";

function App() {
  useEffect(() => {

    fetch(`${process.env.REACT_APP_BACKEND}/api/hello`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
        credentials: "include", // 인증 정보를 요청에 포함
    })
    .then((res) => res.text())
    .then((data) => console.log(data))
    .catch((err) => console.error(err));

  }, []);

  return <div className="App"></div>;
}

export default App;
