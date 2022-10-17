import React from "react";
import Register from "./Register";
import Login from "./Login";
import { useState } from "react";

const Test = () => {
  // 로그인 폼이나 회원가입 폼을 버튼 누름에 따라 보여주는 부분
  const [status, setStatus] = useState({
    login: false,
    signUp: false,
  });

  const highFunction = (text) => {
    console.log(text);
  };
  return (
    <>
      {status.signUp === true ? <Register /> : <></>}
      {status.login === true ? <Login /> : <></>}
    </>
  );
};

export default Test;
