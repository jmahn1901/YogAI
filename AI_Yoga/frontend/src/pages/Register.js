import {useState} from 'react'


const Register = () => {
  const [signUnData, setSignData] = useState({
    email: "",
    password: "",
    repassword: ""
  })

  const changeInputData = () => {
    let changeSignInData = (e) => {
      // e => element  요소 그자체를 가져온거, 요소는 input 
      setSignData({
          ...signUnData,
          [e.target.name]: e.target.value
      });
  }
  }

  const signInFunction = () => {
    const emailRegex =
    /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&#]{8,}$/;
    
    const emailValueCheck = emailRegex.test(signUnData.email);
    const passwordValueCheck1 = passwordRegex.test(signUnData.password);
    const passwordValueCheck2 = passwordRegex.test(signUnData.repassword);

    
    if (emailValueCheck) {
      alert("id 제대로 입력 좀...")
      return
    }
    else if (passwordValueCheck1) {
      alert("pwd 제대로 입력 좀...")
      return
    }
    else if (passwordValueCheck2) {
      alert("2차 pwd 제대로 입력 좀...")
      return
    }
    else if (passwordValueCheck1 !== passwordValueCheck2) {
      alert("1차 비번이랑 2차 비번이랑 달라용 호호홍~")
      return
    }


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
                <label for="email">이메일</label>
                <input type="email" class="form-control" value={signUnData.email} onChange={changeInputData} id="email" style={{marginTop: "10px", marginBottom: "20px"}} />
              </div>
              <div class="form-field">
                <label for="password">비밀번호</label>
                <input type="password" class="form-control" value={signUnData.password} onChange={changeInputData} id="password" style={{marginTop: "10px", marginBottom: "20px"}} />
              </div>
              <div class="form-field" style={{paddingBottom: "30px"}}>
                <label for="rePassword">비밀번호 확인</label>
                <input type="password" class="form-control" value={signUnData.repassword} onChange={changeInputData} id="rePassword" style={{marginTop: "10px", marginBottom: "5px"}} />
              </div>
              <div class="form-field">
                <input
                  type="submit"
                  class="btn btn-primary btn-block"
                  value="Sign in"
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
