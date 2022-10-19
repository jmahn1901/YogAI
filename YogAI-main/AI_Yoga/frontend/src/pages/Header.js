import imgYoga from "./../assets/images/yogaLogo.png";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const Header = () => {
  // 쿠키
  const [cookies, setCookie, removeCookie] = useCookies(["cookie"]);

  const navigate = useNavigate();

  let logOutBtn = () => {
    removeCookie("cookie", { path: "/" });
    // 그 후 home 페이지로 이동~
    navigate("/");
  };

  return (
    <>
      <nav
        className="site-nav dark js-site-navbar mb-5 site-navbar-target bg-white"
        style={{ position: "relative" }}
      >
        <div className="container">
          <div className="site-navigation">
            {/* 헤더 이미지 코드 - khs */}
            <img
              className="logo m-0 float-left"
              style={{ width: "100px", height: "50px" }}
              alt="yogaLog"
              src={imgYoga}
            />
            {/* <a href="index.html" className="logo m-0 float-left">
              yogaA!<span className="text-primary"></span>
            </a> */}

            <ul className="js-clone-nav d-none d-lg-inline-block site-menu float-left">
              <li className="active" style={{ paddingLeft: "100px" }}>
                <a href="home" className="nav-link">
                <a h3>Home</a>
                </a>
              </li>
              <li className="has-children" style={{ paddingLeft: "100px" }}>
                <a href="#!" className="nav-link">
                  <a h3>Info</a>
                </a>
                <ul className="dropdown">
                  <li>
                    <a href="infopose" className="nav-link">
                      Pose
                    </a>
                  </li>
                  <li>
                    <a href="infomap" className="nav-link">
                      Map
                    </a>
                  </li>
                  {/* <li className="has-children">
                    <a href="#!">Menu Two</a>
                    <ul className="dropdown">
                      <li>
                        <a href="#!" className="nav-link">
                          Sub Menu One
                        </a>
                      </li>
                      <li>
                        <a href="#!" className="nav-link">
                          Sub Menu Two
                        </a>
                      </li>
                      <li>
                        <a href="#!" className="nav-link">
                          Sub Menu Three
                        </a>
                      </li>
                    </ul>
                  </li> */}
                  {/* <li>
                    <a href="#!" className="nav-link">
                      Menu Three
                    </a>
                  </li> */}
                </ul>
              </li>
              <li>
                <a
                  href="start"
                  className="nav-link"
                  style={{ paddingLeft: "100px" }}
                >
                   <a h3>Let's start</a>
                </a>
              </li>
              {/* <li>
                <a href="#pricing-section" className="nav-link">
                  Pricing
                </a>
              </li> */}
              <li>
                <a
                  href="community"
                  className="nav-link"
                  style={{ paddingLeft: "100px" }}
                >
                   <a h3>Community</a>
                </a>
              </li>
              
            </ul>

            <ul className="js-clone-nav d-none mt-1 d-lg-inline-block site-menu float-right">
              {
                // 만약 쿠키에 token이 존재하지 않는다면 로그아웃 버튼을 보여주지 않음.
                cookies.cookie === undefined ? (
                  <li
                    className="cta-button-outline"
                    style={{ marginRight: "10px" }}
                  >
                    <a href="login">Log In</a>
                  </li>
                ) : (
                  <li
                    className="cta-button-outline"
                    style={{ marginRight: "10px" }}
                  >
                    <a
                      className="cta-button-outline"
                      style={{
                        paddingTop: "9px",
                        paddingBottom: "8px",
                        paddingLeft: "23px",
                        paddingRight: "23px",
                      }}
                      onClick={logOutBtn}
                    >
                      Log Out
                    </a>
                  </li>
                )
              }

              {cookies.cookie === undefined ? (
                <li className="cta-primary">
                  <a href="register">Sign In</a>
                </li>
              ) : (
                <></>
              )}
            </ul>

            <a
              href="#!"
              className="burger ml-auto float-right site-menu-toggle js-menu-toggle d-inline-block dark d-lg-none"
              data-toggle="collapse"
              data-target="#main-navbar"
            >
              <span></span>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;