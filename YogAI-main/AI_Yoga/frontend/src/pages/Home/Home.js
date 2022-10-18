import React from 'react';
import { Link } from 'react-router-dom';

import './Home.css'

import imgdash from './../../assets/images/dashboard.jpg'
import imgpose from './../../utils/images/yoga_pose.png'

const Home = () => {
    return (
        <>
            <main>
                {/* home */}
                <div className="untree_co-hero pb-0" id="home-section">
                    <div className="container">
                        <div className="row">

                            <div className="col-12">
                                {/* <div className="dots"></div> */}
                                <div className="row justify-content-center">
                                    <div className="col-md-7 text-center mb-5">

                                    </div>
                                </div>
                                <div className="row align-items-center">
                                    {/* <div className="col-lg-4">
                                    
									<h2><a href="#">Welcome to Yog-A!</a></h2>
									<p>Aenean ornare velit lacus varius enim ullamcorper proin aliquam
									facilisis ante sed etiam magna interdum congue. Lorem ipsum dolor
									amet nullam sed etiam veroeros.</p>
								</div> */}
                                    <div className="col-lg-4">
                                        <div className="intro">

                                            <div className="excerpt aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
                                                <span className="caption">Welcome to Yog-A!</span>
                                                <h1 className="font-weight-bold">Explore The Platform</h1>
                                                <p>This is the greatest platform</p>
                                            </div>
                                            <p data-aos="fade-up" data-aos-delay="200" className="aos-init aos-animate">
                                                <a href="#features-section" className="btn btn-primary smoothscroll mr-1">팀원들에 대해</a>
                                                <a href="#pricing-section" className="btn btn-outline-primary smoothscroll">모델에 대한 설명</a>
                                            </p>
                                        </div>

                                    </div>
                                    <div className="col-lg-8">
                                        <div className="illustration">
                                            <a href="#" className="image main"> <img src="https://i0.wp.com/worldyogaforum.com/wp-content/uploads/2022/04/34a.png?resize=1024%2C845&ssl=1" alt="" /></a>
                                            {/* <img src="https://i0.wp.com/worldyogaforum.com/wp-content/uploads/2022/04/34a.png?resize=1024%2C845&ssl=1" alt="Image" className="img-fluid" /> */}
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="illustration">

                    </div>
                </div>

                {/* features */}
                <div className="untree_co-section" id="features-section">
                    <div className="container">

                        <div className="row mb-5">
                            <div className="col-12 text-center aos-init aos-animate" data-aos="fade-up" data-aos-delay="0">
                                <span className="caption">About Us</span>
                                <h2 className="heading">Introducing our Developers</h2>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-6 mb-4 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
                                <div className="service horizontal d-flex">
                                    <div className="service-icon color-1 mb-4">
                                        <svg className="bi bi-app-indicator" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" d="M5.5 2A3.5 3.5 0 0 0 2 5.5v5A3.5 3.5 0 0 0 5.5 14h5a3.5 3.5 0 0 0 3.5-3.5V8a.5.5 0 0 1 1 0v2.5a4.5 4.5 0 0 1-4.5 4.5h-5A4.5 4.5 0 0 1 1 10.5v-5A4.5 4.5 0 0 1 5.5 1H8a.5.5 0 0 1 0 1H5.5z"></path>
                                            <path d="M16 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"></path>
                                        </svg>
                                    </div>
                                    <div className="service-contents">
                                        <h3>사람1</h3>
                                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                        <p><a href="#" className="read-more">Learn More</a></p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6 mb-4 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
                                <div className="service horizontal d-flex">
                                    <div className="service-icon color-2 mb-4">
                                        <svg className="bi bi-arrow-repeat" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" d="M2.854 7.146a.5.5 0 0 0-.708 0l-2 2a.5.5 0 1 0 .708.708L2.5 8.207l1.646 1.647a.5.5 0 0 0 .708-.708l-2-2zm13-1a.5.5 0 0 0-.708 0L13.5 7.793l-1.646-1.647a.5.5 0 0 0-.708.708l2 2a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0 0-.708z"></path>
                                            <path fill-rule="evenodd" d="M8 3a4.995 4.995 0 0 0-4.192 2.273.5.5 0 0 1-.837-.546A6 6 0 0 1 14 8a.5.5 0 0 1-1.001 0 5 5 0 0 0-5-5zM2.5 7.5A.5.5 0 0 1 3 8a5 5 0 0 0 9.192 2.727.5.5 0 1 1 .837.546A6 6 0 0 1 2 8a.5.5 0 0 1 .501-.5z"></path>
                                        </svg>
                                    </div>
                                    <div className="service-contents">
                                        <h3>사람2</h3>
                                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                        <p><a href="#" className="read-more">Learn More</a></p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6 mb-4 aos-init aos-animate" data-aos="fade-up" data-aos-delay="300">
                                <div className="service horizontal d-flex">
                                    <div className="service-icon color-3 mb-4">
                                        <svg className="bi bi-briefcase" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-6h-1v6a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-6H0v6z"></path>
                                            <path fill-rule="evenodd" d="M0 4.5A1.5 1.5 0 0 1 1.5 3h13A1.5 1.5 0 0 1 16 4.5v2.384l-7.614 2.03a1.5 1.5 0 0 1-.772 0L0 6.884V4.5zM1.5 4a.5.5 0 0 0-.5.5v1.616l6.871 1.832a.5.5 0 0 0 .258 0L15 6.116V4.5a.5.5 0 0 0-.5-.5h-13zM5 2.5A1.5 1.5 0 0 1 6.5 1h3A1.5 1.5 0 0 1 11 2.5V3h-1v-.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5V3H5v-.5z"></path>
                                        </svg>
                                    </div>
                                    <div className="service-contents">
                                        <h3>사람3</h3>
                                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                        <p><a href="#" className="read-more">Learn More</a></p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6 mb-4 aos-init aos-animate" data-aos="fade-up" data-aos-delay="400">
                                <div className="service horizontal d-flex">
                                    <div className="service-icon color-4 mb-4">
                                        <svg className="bi bi-collection" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" d="M14.5 13.5h-13A.5.5 0 0 1 1 13V6a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5zm-13 1A1.5 1.5 0 0 1 0 13V6a1.5 1.5 0 0 1 1.5-1.5h13A1.5 1.5 0 0 1 16 6v7a1.5 1.5 0 0 1-1.5 1.5h-13zM2 3a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 0-1h-11A.5.5 0 0 0 2 3zm2-2a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7A.5.5 0 0 0 4 1z"></path>
                                        </svg>
                                    </div>
                                    <div className="service-contents">
                                        <h3>사람4</h3>
                                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                        <p><a href="#" className="read-more">Learn More</a></p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6 mb-4 aos-init aos-animate" data-aos="fade-up" data-aos-delay="400">
                                <div className="service horizontal d-flex">
                                    <div className="service-icon color-4 mb-4">
                                        <svg className="bi bi-collection" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" d="M14.5 13.5h-13A.5.5 0 0 1 1 13V6a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5zm-13 1A1.5 1.5 0 0 1 0 13V6a1.5 1.5 0 0 1 1.5-1.5h13A1.5 1.5 0 0 1 16 6v7a1.5 1.5 0 0 1-1.5 1.5h-13zM2 3a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 0-1h-11A.5.5 0 0 0 2 3zm2-2a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7A.5.5 0 0 0 4 1z"></path>
                                        </svg>
                                    </div>
                                    <div className="service-contents">
                                        <h3>사람5</h3>
                                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                        <p><a href="#" className="read-more">Learn More</a></p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* pricing */}
                    <div className="untree_co-section bg-light" id="pricing-section">
                        <div className="container">

                            <div className="row pricing-title">
                                <div className="col-12 text-center aos-init aos-animate" data-aos="fade-up" data-aos-delay="0">
                                    <span className="caption">Model Description</span>
                                    <h2 className="heading">AI model(대충 부제목)</h2>
                                </div>
                            </div>

                            <div className="row justify-content-center">
                                <div className="col-lg-10">
                                    <div className="row">
                                        <div className="col-lg-4 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
                                            <div className="pricing">
                                                <div className="body">
                                                    <div className="price">
                                                        <span className="price"><sup></sup><span>model1</span></span>
                                                        <span className="d-block plan mb-4"></span>
                                                    </div>
                                                    <ul className="list-unstyled ul-check primary mb-5">
                                                        <li>asdf</li>
                                                        <li>asdf</li>
                                                        <li>asdf</li>
                                                    </ul>
                                                    <p className="text-center mb-0"><a href="#" className="btn btn-outline-primary">Get Started</a></p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-4 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
                                            <div className="pricing active">
                                                <div className="body">
                                                    <div className="price">
                                                        <span className="price"><sup></sup><span>model2</span></span>
                                                        <span className="d-block plan mb-4"></span>
                                                    </div>
                                                    <ul className="list-unstyled ul-check primary mb-5">
                                                        <li>asdf</li>
                                                        <li>asdf</li>
                                                        <li>asdf</li>
                                                    </ul>
                                                    <p className="text-center mb-0"><a href="#" className="btn btn-primary">Get Started</a></p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-4 aos-init aos-animate" data-aos="fade-up" data-aos-delay="300">
                                            <div className="pricing">

                                                <div className="body">
                                                    <div className="price">
                                                        <span className="price"><sup></sup><span>model3</span></span>
                                                        <span className="d-block plan mb-4"></span>
                                                    </div>
                                                    <ul className="list-unstyled ul-check primary mb-5">
                                                        <li>asdf</li>
                                                        <li>asdf</li>
                                                        <li>asdf</li>
                                                    </ul>
                                                    <p className="text-center mb-0"><a href="#" className="btn btn-outline-primary">Get Started</a></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>














                <div className="untree_co-section bg-light">
                    <div className="container">
                        <div className="row justify-content-between">
                            <div className="col-lg-5 order-lg-2 js-custom-dots">

                                <a href="#!" className="service link horizontal d-flex aos-init aos-animate active" data-aos="fade-left" data-aos-delay="0" data-index="1">
                                    <div className="service-icon color-1 mb-4">
                                        <svg className="bi bi-app-indicator" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" d="M5.5 2A3.5 3.5 0 0 0 2 5.5v5A3.5 3.5 0 0 0 5.5 14h5a3.5 3.5 0 0 0 3.5-3.5V8a.5.5 0 0 1 1 0v2.5a4.5 4.5 0 0 1-4.5 4.5h-5A4.5 4.5 0 0 1 1 10.5v-5A4.5 4.5 0 0 1 5.5 1H8a.5.5 0 0 1 0 1H5.5z"></path>
                                            <path d="M16 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"></path>
                                        </svg>
                                    </div>
                                    <div className="service-contents">
                                        <h3>MoveNet</h3>
                                        <p>Bottom-up 방식의 자세 추정 모델</p>
                                        <p>TensorFlow.js로 경량화된  모델</p>
                                    </div>
                                </a>
                                {/* <!-- /.service --> */}

                                <a href="#!" className="service link horizontal d-flex aos-init aos-animate" data-aos="fade-left" data-aos-delay="100" data-index="2">
                                    <div className="service-icon color-2 mb-4">
                                        <svg className="bi bi-arrow-repeat" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" d="M2.854 7.146a.5.5 0 0 0-.708 0l-2 2a.5.5 0 1 0 .708.708L2.5 8.207l1.646 1.647a.5.5 0 0 0 .708-.708l-2-2zm13-1a.5.5 0 0 0-.708 0L13.5 7.793l-1.646-1.647a.5.5 0 0 0-.708.708l2 2a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0 0-.708z"></path>
                                            <path fill-rule="evenodd" d="M8 3a4.995 4.995 0 0 0-4.192 2.273.5.5 0 0 1-.837-.546A6 6 0 0 1 14 8a.5.5 0 0 1-1.001 0 5 5 0 0 0-5-5zM2.5 7.5A.5.5 0 0 1 3 8a5 5 0 0 0 9.192 2.727.5.5 0 1 1 .837.546A6 6 0 0 1 2 8a.5.5 0 0 1 .501-.5z"></path>
                                        </svg>
                                    </div>
                                    <div className="service-contents">
                                        <h3>Active dataset</h3>
                                        <p>Pose Detection만을 위한 구글의 새 데이터셋</p>
                                        <p>유튜브의 요가, 운동, 춤 등을 캡쳐한 dataset</p>
                                    </div>
                                </a>


                                <a href="#!" className="service link horizontal d-flex aos-init aos-animate" data-aos="fade-left" data-aos-delay="200" data-index="3">
                                    <div className="service-icon color-3 mb-4">
                                        <svg className="bi bi-briefcase" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-6h-1v6a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-6H0v6z"></path>
                                            <path fill-rule="evenodd" d="M0 4.5A1.5 1.5 0 0 1 1.5 3h13A1.5 1.5 0 0 1 16 4.5v2.384l-7.614 2.03a1.5 1.5 0 0 1-.772 0L0 6.884V4.5zM1.5 4a.5.5 0 0 0-.5.5v1.616l6.871 1.832a.5.5 0 0 0 .258 0L15 6.116V4.5a.5.5 0 0 0-.5-.5h-13zM5 2.5A1.5 1.5 0 0 1 6.5 1h3A1.5 1.5 0 0 1 11 2.5V3h-1v-.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5V3H5v-.5z"></path>
                                        </svg>
                                    </div>
                                    <div className="service-contents">
                                        <h3>Fast, Precise Model</h3>
                                        <p>17개의 keypoint를 감지하여 정확한 요가 포즈를 확인</p>
                                        <p>초당 30개의 Frame에 대해 Detection을 보장(30FPS)</p>
                                    </div>
                                </a>


                            </div>

                            <div className="col-lg-7">
                                <div className="img-shadow">
                                    <div className="owl-single no-dots owl-carousel owl-loaded">




                                        <div className="owl-stage-outer owl-height" style={{ height: "510.05" }}>
                                            <div className="owl-stage" style={{trnasform: "translate3d(-1340px, 0px, 0px)", width: "4690px", transition: "all 0s ease 0s"}}>


                                                <div className="owl-item cloned" style={{ width: "670px" }}>
                                                    <div className="item">
                                                        {/* <span className="number">2/3</span> */}
                                                        {/* <img src="images/dashboard.jpg" alt="Image" className="img-fluid" /> */}
                                                        <img src={imgpose} alt="Image" className="img-fluid" />
                                                        {/* <img className="logo m-0 float-left" style={{width: "100px", height: "50px"}} alt="yogaLog" src={imgYoga} /> */}
                                                        
                                                    </div>
                                                </div>




                                            </div>
                                        </div>



                                    </div>

                                </div>

                        </div>





















                            {/* <!-- /.col-md-4 --> */}
                        </div>
                        {/* <!-- /.row --> */}
                    </div>
                    {/* <!-- /.container --> */}
                </div>


            </main>
        </>
    )
}

export default Home;
