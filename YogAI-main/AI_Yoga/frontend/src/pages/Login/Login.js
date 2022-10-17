import { useState } from "react";

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  // 더미 데이터
  const dummyEmail = "test@test.com";
  const dummyPwd = "Rltwldhr77@";

  const changeInputData = (e) => {
    // e => element  요소 그자체를 가져온거, 요소는 input
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const loginFunction = () => {
    const emailRegex =
      /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&#]{8,}$/;

    const emailValueCheck = emailRegex.test(loginData.email);
    const passwordValueCheck1 = passwordRegex.test(loginData.password);

    if (!emailValueCheck) {
      alert("이메일 제대로 입력 좀...");
      return;
    } else if (!passwordValueCheck1) {
      console.log(passwordValueCheck1);
      alert("pwd 제대로 입력 좀...");
      return;
    }

    console.log(loginData);
    
    if (loginData.email === dummyEmail && loginData.password === dummyPwd) {
      alert("로그인 성공!");
    } else {
      alert("비번이나 아이디가 틀렷네영..!!ㅋㅋ");
    }
  };

  return (
    <>
      <div
        className="container"
        style={{ paddingTop: "100px", paddingBottom: "100px" }}
      >
        <div className="row justify-content-center">
          <div className="col-lg-5">
            <div
              className="custom-box aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay="0"
            >
              <h2
                className="heading"
                style={{ marginTop: "10px", marginBottom: "20px" }}
              >
                로그인
              </h2>
              <form action="#">
                <div className="form-field">
                  <label htmlFor="email">이메일</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    value={loginData.email}
                    onChange={changeInputData}
                    style={{ marginTop: "10px", marginBottom: "20px" }}
                    name="email"
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="password">비밀번호</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    value={loginData.password}
                    onChange={changeInputData}
                    style={{ marginTop: "10px", marginBottom: "40px" }}
                    name="password"
                  />
                </div>
                <div className="form-field">
                  <input
                    type="button"
                    className="btn btn-primary btn-block"
                    value="Sign in"
                    onClick={loginFunction}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
