const Footer = () => {
    return (
      <>
        <div className="site-footer bg-white" style={{display: "flex", flexWrap: "wrap"}}>
          <div className="footer-dots"></div>
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <div className="widget">
                  <h3>
                    About Launch<span className="text-primary">.</span>{" "}
                  </h3>
                  <p>
                  <a href="https://ai-yangjae.kr/com/com01.asp?scrID=0000000158&amp;pageNum=5&amp;subNum=1&amp;ssubNum=1" target="_blank">
                      <img style={{}} src="https://media.discordapp.net/attachments/1022832747598843984/1031071527325667338/2.png" />
                          </a>
                  </p>
                </div>
              </div>
  
              <div className="col-lg-2 ml-auto" style={{marginRight: "10vw"}}>
                <div className="widget">
                  {/* 깃허브 주소용 아이콘 코드 */}
                  <h3>Follow Us</h3>
                  <ul className="list-unstyled social" style={{display: "flex", gap: "20px", borderRadius: "30px"}}>
                    <li>
                      <a href="https://github.com/swon95" target='_blank'>
                        <img style={{height: "50px"}} src= "https://avatars.githubusercontent.com/u/96659041?v=4%22%3E" />
                      </a>
                    </li>
                    <li>
                      <a href="https://github.com/goodsosbva" target='_blank'>
                      <img style={{height: "50px"}} src="https://avatars.githubusercontent.com/u/62534722?v=4%22%3E" />
                      </a>
                    </li>
                    <li>
                      <a href="https://github.com/zkdk1241" target='_blank'>
                      <img style={{height: "50px"}} src="https://avatars.githubusercontent.com/u/47853679?v=4%22%3E" />
                      </a>
                    </li>
                    <li>
                      <a href="https://github.com/jmahn1901" target='_blank'>
                      <img style={{height: "50px"}} src="https://avatars.githubusercontent.com/u/72716200?v=4%22%3E" />
                      </a>
                    </li>
                    <li>
                      <a href="https://github.com/hidihi" target='_blank'>
                      <img style={{height: "50px"}} src="https://avatars.githubusercontent.com/u/90600309?v=4%22%3E" />
                      </a>
                    </li>
                    {/* <li>
                      <a href="#!">
                        <span className="icon-dribbble"></span>
                      </a>
                    </li> */}
                  </ul>
                </div>
              </div>
  
              {/* <div className="col-lg-2">
                <div className="widget">
                  <h3>Services</h3>
                  <ul className="list-unstyled float-left links">
                    <li>
                      <a href="#!">Built for Developers</a>
                    </li>
                    <li>
                      <a href="#!">Modern Design</a>
                    </li>
                    <li>
                      <a href="#!">Building Stunning Websites</a>
                    </li>
                    <li>
                      <a href="#!">Bring Ideas To Life</a>
                    </li>
                  </ul>
                </div>
              </div> */}
  
              <div className="col-lg-3">
                <div className="widget">
                  <h3>Quick Contact</h3>
                  <address>AI 양재 허브</address>
                  <ul className="list-unstyled links mb-4">
                    <li>
                      <a href="tel://11234567890">+1(123)-456-7890</a>
                    </li>
                    <li>
                      <a href="tel://11234567890">+1(123)-456-7890</a>
                    </li>
                    <li>
                      <a href="mailto:info@mydomain.com">info@mydomain.com</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
  
            <div className="row mt-5">
              <div className="col-12 text-center">
                {/* <!-- License information: https://untree.co/license/ --> */}
                <p className="copyright">
                  Copyright ©
                  <script>document.write(new Date().getFullYear());</script>2022.
                  All Rights Reserved. — Designed with love by{" "}
                  <a href="https://untree.co">Untree.co</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default Footer;
  