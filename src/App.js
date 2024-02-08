import React, { useCallback, useState } from "react";
import axios from "axios";
function App() {
  const [inputData, setInputData] = useState("");
  const test = useCallback(() => {
    axios
      .post(`${process.env.REACT_APP_BACKEND}api/v1/test`, {
        data: inputData,
      })
      .then(({ data }) => console.log(data))
      .catch((err) => console.log(err.response.data));
  }, [inputData]);

  return (
    <div className="App">
      <input type="text" onChange={(e) => setInputData(e.target.value)} />
      <button onClick={test}>테스트</button>
    </div>
  );
}

export default App;
