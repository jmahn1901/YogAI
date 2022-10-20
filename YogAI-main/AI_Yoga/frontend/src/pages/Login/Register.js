import {useState, useEffect} from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom";

const server = {
  "url": "http://localhost:8080"
}

const Register = () => {
  const navigate = useNavigate();

  const [registerData, setRegisterData] = useState({
    email: "",
    nickname: "",
    password: "",
    repassword: ""
  })

  const [errorMsg, setErrorMsg] = useState("");

  // input에 데이터를 입력할때마다 singUpData가 변경되는걸 콘솔로 찍어서 보기위해
  // useEffect(() => {
  //   console.log(signUnData);
  // }, [signUnData]);

  const changeInputData = (e) => {
      // e => element  요소 그자체를 가져온거, 요소는 input 
      setRegisterData({
          ...registerData,
          [e.target.name]: e.target.value
      });
  
  }

  const registerFunction = async () => {
    const emailRegex =
      /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&#]{8,}$/;
    
    
    const emailValueCheck = emailRegex.test(registerData.email);
    const passwordValueCheck1 = passwordRegex.test(registerData.password);
    const passwordValueCheck2 = passwordRegex.test(registerData.repassword);

    
    if (!emailValueCheck) {
      alert("이메일 제대로 입력 좀...")
      setRegisterData({
        email: "",
        password: document.getElementById("password").value,
        repassword: document.getElementById("rePassword").value,
        nickname: document.getElementById("nickName").value
      })

      //email input에 포커스
      document.getElementById("email").focus();
      //에러 메시지를 보여주고
      setErrorMsg("이메일 제대로 입력 좀...");
      return;
    }
    else if (registerData.nickname === undefined || registerData.nickname.length === 0) {
      alert("닉네임 한글자라도 좀...")
      return
    }
    else if (!passwordValueCheck1) {
      console.log(passwordValueCheck1)
      alert("pwd 제대로 입력 좀...")

      setRegisterData({
        email: document.getElementById("email").value,
        password: "",
        repassword: "",
        nickname: document.getElementById("nickName").value
      })

      // password input에 포커스
      document.getElementById("password").focus();
      // 에러 메시지를 보여주고
      setErrorMsg("pwd 제대로 입력 좀...");
      return
    }
    else if (!passwordValueCheck2) {
      alert("2차 pwd 제대로 입력 좀...")
      setRegisterData({
        email: document.getElementById("email").value,
        password: "",
        repassword: "",
        nickname: document.getElementById("nickName").value
      })

      // 2차 password input에 포커스
      document.getElementById("password").focus();
      // 에러 메시지를 보여주고
      setErrorMsg("2차 pwd 제대로 입력 좀...");
      return
    }
    else if (registerData.password !== registerData.repassword) {
      alert("1차 비번이랑 2차 비번이랑 달라용 호호홍~")
      setRegisterData({
        email: document.getElementById("email").value,
        password: "",
        repassword: "",
        nickname: document.getElementById("nickName").value
      })

      // 2차 password input에 포커스
      document.getElementById("password").focus();
      // 에러 메시지를 보여주고
      setErrorMsg("1차랑 2차 pwd 같게 입력 좀...");
      return
    }

    console.log(registerData);
    // axios.get(url,[,config])	
    return await axios.post(server.url + '/user/register', registerData)
  }
 
  return (
    <div
      className="container"
      style={{ paddingTop: "100px", marginBottom: "100px" }}
    >
      <div className="row justify-content-center">
        <div className="col-lg-5">
          <div
            class="custom-box aos-init aos-animate"
            data-aos="fade-up"
            data-aos-delay="0"
          >
            <h2 class="heading" style={{marginTop: "10px", marginBottom: "20px"}}>회원 가입</h2>
            <form action="#">
              <div class="form-field">
                <label htmlFor="email">이메일</label>
                <input type="email" class="form-control" value={registerData.email} onChange={changeInputData} name="email" id="email" style={{marginTop: "10px", marginBottom: "20px"}} />
              </div>
              <div class="form-field">
                <label htmlFor="nickName">닉네임</label>
                <input type="text" class="form-control" value={registerData.nickname} onChange={changeInputData} name="nickname" id="nickName" style={{marginTop: "10px", marginBottom: "20px"}} />
              </div>
              <div class="form-field">
                <label htmlFor="password">비밀번호</label>
                <input type="password" class="form-control" value={registerData.password} onChange={changeInputData} name="password" id="password" style={{marginTop: "10px", marginBottom: "20px"}} />
              </div>
              <div class="form-field" style={{paddingBottom: "30px"}}>
                <label htmlFor="rePassword">비밀번호 확인</label>
                <input type="password" class="form-control" value={registerData.repassword} onChange={changeInputData} name="repassword" id="rePassword" style={{marginTop: "10px", marginBottom: "5px"}} />
              </div>
              <div className="mb-3">
                    <p className="text-dark">{errorMsg}</p>
              </div>
              <div class="form-field" style={{marginRight: "30px"}}>
                <input
                  type="button"
                  class="btn btn-primary btn-block"
                  value="Sign in"
                  onClick={() => {
                    registerFunction().then((res) => {
                      console.log(res);
                      if (res.data.status) {
                        alert(res.data.message);
                        navigate('/');
                        // window.location.reload();
                      }
                      else {
                        // 1. 이메일이 잘못된 경우
                        if (!res.data.stateEmail) {
                          setRegisterData({
                            email: "",
                            password: document.getElementById("password").value,
                            repassword: document.getElementById("rePassword").value,
                            nickname: document.getElementById("nickName").value
                          })

                          //email input에 포커스
                          document.getElementById("email").focus();
                          //에러 메시지를 보여주고
                          setErrorMsg(res.data.message);
                          return;
                        }

                        // 2. 비번이 잘못된 경우
                        else if (!res.data.statePassword) {
                          setRegisterData({
                            email: document.getElementById("email").value,
                            password: "",
                            repassword: "",
                            nickname: document.getElementById("nickName").value
                          })

                          // password input에 포커스
                          document.getElementById("password").focus();
                          // 에러 메시지를 보여주고
                          setErrorMsg(res.data.message);
                          return;
                        }
                        
                          
                          // 3. 닉네임이 잘못된 경우
                        else if (!res.data.stateNickname) {
                          setRegisterData({
                            email: document.getElementById("email").value,
                            password: document.getElementById("password").value,
                            repassword: document.getElementById("rePassword").value,
                            nickname: ""
                          })

                          // password input에 포커스
                          document.getElementById("nickName").focus();
                          // 에러 메시지를 보여주고
                          setErrorMsg(res.data.message);
                          return;
                        }
                    }
                    }).catch(e => {
                      console.log(e)
                      
                    })

                    }
                  }
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
