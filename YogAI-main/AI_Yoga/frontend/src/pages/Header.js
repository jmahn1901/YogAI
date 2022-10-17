import imgYoga from './../assets/images/yogaLogo.png';

const Header = () => {
  return (
    <>
      <nav className="site-nav dark js-site-navbar mb-5 site-navbar-target" style={{position:"relative"}}>
        <div className="container">
          <div className="site-navigation">
            {/* 헤더 이미지 코드 - khs */}
          <img className="logo m-0 float-left" style={{width: "100px", height: "50px"}} alt="yogaLog" src={imgYoga} />
            {/* <a href="index.html" className="logo m-0 float-left">
              yogaA!<span className="text-primary"></span>
            </a> */}

            <ul className="js-clone-nav d-none d-lg-inline-block site-menu float-left">
              <li className="active" style={{paddingLeft: "70px"}}>
                <a href="home" className="nav-link">
                  Home
                </a>
              </li>
              <li className="has-children" style={{paddingLeft: "70px"}}>
                <a href="#!" className="nav-link">
                  Info
                </a>
                <ul className="dropdown">
                  <li >
                    <a href="infopose" className="nav-link">
                      Pose
                    </a>
                  </li>
                  <li >
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
                <a href="start" className="nav-link" style={{paddingLeft: "70px"}}>
                  Let`s Start
                </a>
              </li>
              {/* <li>
                <a href="#pricing-section" className="nav-link">
                  Pricing
                </a>
              </li> */}
              <li>
                <a href="#about-section" className="nav-link" style={{paddingLeft: "70px"}}>
                  Community
                </a>
              </li>
              <li>
                <a href="#contact-section" className="nav-link" style={{paddingLeft: "70px"}}>
                  About
                </a>
              </li>
            </ul>

            <ul className="js-clone-nav d-none mt-1 d-lg-inline-block site-menu float-right">
              <li className="cta-button-outline" style={{marginRight: "10px"}}>
                <a href="login">Log In</a>
              </li>
              <li className="cta-primary">
                <a href="register">Sign In</a>
              </li>
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
