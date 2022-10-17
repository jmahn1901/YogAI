const Register = () => {
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
                <input type="email" class="form-control" id="email" style={{marginTop: "10px", marginBottom: "20px"}} />
              </div>
              <div class="form-field">
                <label for="password">비밀번호</label>
                <input type="password" class="form-control" id="password" style={{marginTop: "10px", marginBottom: "20px"}} />
              </div>
              <div class="form-field" style={{paddingBottom: "30px"}}>
                <label for="rePassword">비밀번호 확인</label>
                <input type="password" class="form-control" id="rePassword" style={{marginTop: "10px", marginBottom: "5px"}} />
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
