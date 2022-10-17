const Login = () => {
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
              <h2 className="heading" style={{marginTop: "10px", marginBottom: "20px"}}>로그인</h2>
              <form action="#">
                <div className="form-field">
                  <label htmlFor="email">이메일</label>
                  <input type="email" className="form-control" id="email" style={{marginTop: "10px", marginBottom: "20px"}}/>
                </div>
                <div className="form-field">
                  <label htmlFor="password">비밀번호</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    style={{marginTop: "10px", marginBottom: "40px"}}
                  />
                </div>
                <div className="form-field">
                  <input
                    type="submit"
                    className="btn btn-primary btn-block"
                    value="Sign in"
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
