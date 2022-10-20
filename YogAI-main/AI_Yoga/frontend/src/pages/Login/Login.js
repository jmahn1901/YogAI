import axios from "axios";
import { useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const server = {
  "url": "http://localhost:8080"
}

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  // 쿠키
  const [cookies, setCookie, removeCookie] = useCookies(['cookie'])

  //로그인이 제대로 진행되지 않았을 경우, 에러 메시지를 보여주는 부분
  const [errorMsg, setErrorMsg] = useState("");

  // navigate 사용
  const navigate = useNavigate();

  // 더미 데이터
  // const dummyEmail = "test@test.com";
  // const dummyPwd = "Rltwldhr77@";

  const changeInputData = (e) => {
    // e => element  요소 그자체를 가져온거, 요소는 input
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const loginFunction = async () => {
    
    if (loginData.email.length === 0) {
      alert("이메일 제대로 입력 좀...");
      return;

    } else if (loginData.password.length === 0) {
      console.log(loginData);
      alert("pwd 제대로 입력 좀...");
      return;
    }

    console.log(loginData);
    
    // 더미 데이터 체크
    // if (loginData.email === dummyEmail && loginData.password === dummyPwd) {
    //   alert("로그인 성공!");
    // } else {
    //   alert("비번이나 아이디가 틀렷네영..!!ㅋㅋ");
    // }

    return await axios.post(server.url + '/user/login', loginData)
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
                <div className="mb-3">
                    <p className="text-danger">{errorMsg}</p>
                </div>
                <div className="form-field" style={{marginRight: "30px"}}>
                  <input
                    type="button"
                    className="btn btn-primary btn-block"
                    value="Sign in"
                    onClick={() => {
                      loginFunction().then((res) => {
                        // 체크용
                        console.log(res);
                        if (res.data.status) {
                          setCookie("cookie", res.data, { path: "/" })
                          navigate('/');
                          return;
                        }
                        else {
                          setLoginData({
                            email: document.getElementById("email").value,
                            password: ""
                          })
                          setErrorMsg(res.data.message);
                        }

                      }).catch(err => {
                        console.log(err);
                      })
                    }}
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
