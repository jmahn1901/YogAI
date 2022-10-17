import {useState, useEffect} from 'react'


const Register = () => {
  const [signUnData, setSignData] = useState({
    email: "",
    nickname: "",
    password: "",
    repassword: ""
  })

  // input에 데이터를 입력할때마다 singUpData가 변경되는걸 콘솔로 찍어서 보기위해
  // useEffect(() => {
  //   console.log(signUnData);
  // }, [signUnData]);

  const changeInputData = (e) => {
      // e => element  요소 그자체를 가져온거, 요소는 input 
      setSignData({
          ...signUnData,
          [e.target.name]: e.target.value
      });
  
  }

  const signInFunction = () => {
    const emailRegex =
      /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&#]{8,}$/;
    
    
    const emailValueCheck = emailRegex.test(signUnData.email);
    const passwordValueCheck1 = passwordRegex.test(signUnData.password);
    const passwordValueCheck2 = passwordRegex.test(signUnData.repassword);

    
    if (!emailValueCheck) {
      alert("이메일 제대로 입력 좀...")
      return
    }
    else if (signUnData.nickname.length === 0) {
      alert("닉네임 한글자라도 좀...")
    }
    else if (!passwordValueCheck1) {
      console.log(passwordValueCheck1)
      alert("pwd 제대로 입력 좀...")
      return
    }
    else if (!passwordValueCheck2) {
      alert("2차 pwd 제대로 입력 좀...")
      return
    }
    else if (signUnData.password !== signUnData.repassword) {
      alert("1차 비번이랑 2차 비번이랑 달라용 호호홍~")
      return
    }

    console.log(signUnData);
    setSignData({
      email: "",
      password: "",
      rePassword: "",
      name: ""
    })
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
                <input type="email" class="form-control" value={signUnData.email} onChange={changeInputData} name="email" id="email" style={{marginTop: "10px", marginBottom: "20px"}} />
              </div>
              <div class="form-field">
                <label htmlFor="nickName">닉네임</label>
                <input type="text" class="form-control" value={signUnData.nickname} onChange={changeInputData} name="nickname" id="nickName" style={{marginTop: "10px", marginBottom: "20px"}} />
              </div>
              <div class="form-field">
                <label htmlFor="password">비밀번호</label>
                <input type="password" class="form-control" value={signUnData.password} onChange={changeInputData} name="password" id="password" style={{marginTop: "10px", marginBottom: "20px"}} />
              </div>
              <div class="form-field" style={{paddingBottom: "30px"}}>
                <label htmlFor="rePassword">비밀번호 확인</label>
                <input type="password" class="form-control" value={signUnData.repassword} onChange={changeInputData} name="repassword" id="rePassword" style={{marginTop: "10px", marginBottom: "5px"}} />
              </div>
              <div class="form-field">
                <input
                  type="button"
                  class="btn btn-primary btn-block"
                  value="Sign in"
                  onClick={() => {
                    signInFunction()
                  }}
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
