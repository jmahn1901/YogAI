import React from 'react';
import { Link } from 'react-router-dom';
import imgpose from './../../utils/images/yoga_pose.png'
import img2 from './../../utils/images/2.jpg'
import img3 from './../../utils/images/3.jpg'

import './Home.css'

import { useState, useEffect } from 'react'

// import React, { useState, useEffect } from 'react'




const Home = () => {

    const [descimg, setDesimg] = useState(imgpose)

    return (
        <>
            <main>
                {/* home */}
                <div className="untree_co-hero pb-0 bg-light" id="home-section" >
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
                                                <a href="#about-section" className="btn btn-primary smoothscroll mr-1">팀원들에 대해</a>
                                                <a href="#model-section" className="btn btn-outline-primary smoothscroll">모델에 대한 설명</a>
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

                {/* about-section */}
                <div className="untree_co-section" id="about-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="mb-4 aos-init aos-animate" data-aos="fade-up" data-aos-delay="300">
                                    <div className="untree_co-testimonial d-flex">

                                        <div className="text">
                                            <div className="author d-flex mb-3">
                                                <div className="pic mr-3">
                                                    <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBIVFRgVFhUYGRgaGhocGBkcGhgcGR4cGhoaGhocGRwcIS4lIR8rIRgaJjgnKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHhISHjUsISE0NDQ0MTExNDQ0NDQ0NDQ0NDE0NDE0NDQ0NDQ0NDQ0NDQ0NDQ0NDE0NDQ0NDQ0NDQ0NP/AABEIAP4AxwMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAQIDBAUGBwj/xABFEAACAQIEAgcDCQUHAwUAAAABAgADEQQSITEFQSJRYXGBkaEGMrETFBVCUpKiwdEHcoLS8CMzU7LC4eJDYvEWJCWTo//EABkBAQEBAQEBAAAAAAAAAAAAAAABAgQDBf/EACURAQEAAgEEAgICAwAAAAAAAAABAhEhAzFBUSJhEqFCcQQygf/aAAwDAQACEQMRAD8A9RiRYSKSLCEBRAGJC8B0SKIGA2KDIcTiFQXJA0J1IAsNySdh2zzDjf7VGVmSjQClWtnqMWJFtSEWwU3sQc7AixtrA9K4lxWhh0z1nCLewJvqeQUDVj2AEzkfaD9oNOiMtMC7e47hypW9sxpqAwUm4Uki9jbQTyLjHGsViX+UrVXdrFRmIChW3VVUKoBtqANbaiZoqXW1hbfa3Z2QPbMH7fYeq6IgquSbMWCoLW6RHStbMQt+iBznbUcQDyIIA0OTbrXKxBHLefMOHxrobq1uiRp1Eg27tBpOqwX7QMWmQEI6qAtyhzW5/wB2yanncm/pA94+cAWuG155SR+G9vG0mR1YAggg7EaieW4H9peGYAtemfsnPUUkA21VdL2FyqixI97UnY4V+0HAO5IqfJEsA61cqh7i+dWW6kra1ybnQWGkDvbRbRqMCLjaPgJaLaLCVCWhaOhaA20W0W0LQEhFhCqcIsJFJCLCEJCLaFoCFwASSABuSbADrJM889rv2jYdadSjh3ZqhFlqpk+TU36VnJuWA2KqRfS+hj/2k+1VBcPWwyO3yzWQqqmwDZS4Y6AXQnvnjOUXGwsLdXnv18oF/inHcTiSDVqsxChfeYA2IIut7XuAdABcXte5lB3ucx9763aeZ7+yDi2o1HWCDIHcnn8IVMaotZvA85AH/rS0ZEyyokJN4Zv94i02tsfKBtAQ/wBf1vLNfF5ipyICNyua7G9+mSxv1ctJWMb5wPQ/Yb28rYYpRc58OL3XpM6jW3yeZ7EDToixtqATe/uHD8bTrotWmwdHF1YeviDpafJ6ORqNPSejfsw9sGw9RcPUZTQdiATfMjuQFIO5Vjod7FgbgXge6RYCKJACFoohKEtC0dCA20I6EClCEJFEIsIQATj/AGy9s0whKIwLJ/eWyF1YhSiqruuYENdiobKCL2uJ1WMxSUqb1XNkRGdzYnoqCToN9BtPmn2h4n85xFSsbjOxZRcnKv1QSSbmwF9bX0FgAIEOOxb1WNR2ZnYli5N7k77AWHYBYCw5SDMeZHjb4x9E6WNiL36V9/CSmgp2W3Zc692mkm2pKquw1t+d5ED/AFqZpUcIW2psT1cvHb85oYPgGIqnKEC67AW8zvbxElzkWYZXwwEQnr7d/gJtcH9l6+IOYAog3cjXuUczO+4J7FUqdmqDORsD7t+ZtznUpQCgACwG39dU8sutf4ujDoT+TzPGeyYpJdEqMeZK5jfrAW627zpOYxIUHK6ZTzYA/rbyE90dOyU8Xhabjpor/vAN5XmMepZ3emXSlnDwmqFHuNfwI+MgInr3EPZTCPr8mFI+zoPECcrxT2TVNUt98j0y6ec9ceti8Muhl4cXaXOHYpqbhlvfsbKdOV+rrB0MmxXC6iakfCZxQ856TKXs8csbj3fVnAsalahTdDdSi9W9hcG2lxse2aQE8V/Y37ROK7YZ2ORxdCzXs4HujtZQx/hJ5z2sCVkQiiLaVCCLCLCktCLCBQMIRZAkWFosDC9tsZ8jgcS43+TKLpfpVP7NNP3nG+k+bAL637Z9BftUP/xlcdbUur/GTrnga07C/p2/1bwga/s9wypUbob7ajQdZ6p6Jwv2dpIouMzfWY6kna0zfYfDZad/G/fynZ00nJnlbXd08ZMYrUuGUxoAAOY0tfr/AKvNKhhkUWCgdg0EEWToZiPSkydkYU7JOxjbTWk2hdNJVqLyl2qsp1rzNXFSqCZmJS81XXmZRxCXN5ltz/EcMLHTecHxGgA5A/r+jaejcS29ZwXGh0z6T36N5c3XnBfYqv8AJ47DPrpVUWBI945DqO/bntPqQbT5IVjTbMpIZTmUjcEHMpHaCAfCfV3DMT8pRp1LWzorW7wDOlx1ZtFtFiSoSLCLASEWEDPtFhCRRAQgIGJ7b4NKmAxGdcypTNS17XNLpgE9RKWPYZ87qhyi/LT+vD4z6d4nQz0KqWvnputuvMpFvWfMmFa6jXqPp/y9JKsep+ydHLQQ9YnQoJl+zyWw9P8AdH5yzjMWU0UXJnJZy78bw1EWTohnLNWxTC9MX20vykqYrGjdgNNityPHmJZIbtdMwvpBl5TIwOKqE2cy+785V0nZe2V61K/OUcXi3UdE69uszfmeMq3PyjAclsAJOKl3GhiFUD3vWZ1VtJWbhNdfffN1bnzMq1vlUIzajnaS4xZkh4gbzjONp0vCdjizfXkZyftAuo8Zvp8V59XnFkA2cEjQEMRoDa9yB22vPqnAYdKdJKaKFRVVVUbBQAAB4T5Ww1I1KqUxa71EUXNh0mC2J6ulr4z6vpiwA7BOmOKnwiwlQkIsIBCEIGfC0ISNC0BFiQJFnzl7QYF6WMroVsFqvlFrdAsWTwyMpn0Ys8o/aVQFZ2qIpD0syv0bBl6HSBG+hN7/AGfPOVkXDG28Nj2cT/21G++QfnNBqCkgm0qcCH9hT/cEt4ygzCwYr2gC/hObK8u3GcH/ADqlSGZ2VQN2YhQO0kyhi+PYUsqrUQlhmUB16Q5MvWDY69hjE4NTJbMMxdSjM/SJVt1uToO60y8H7J0MNUz0i5ex1JJGu5t1xLjrksv5cN2jiFc3G8vMt0mdgMIqageewJ5CaJcBSJmV6aZtNhn12EdivaBKQc5HcJbPlGi5trsbAHsvK1FgH153kwwlMh0KdB751zaNfmesy42eWc8bezPX2yw9RnXK6slywylgALXJZbi2o5wbE03UOpDKeYIIklDg+HpE/JUlQnRioOo6u6RfRNMXYLYk3JFxfvsZcrN8JjjdcqmLobGcb7TU8uVusz0DF0gEtbb+uc4z2mw+anccm+IlwvLHUnxZXsPgvlsfhlOxqhj25Mz/ABQT6cE+c+FYQ0HSqo6eZQnYdOkeZ7Bz1v2/RKHQdwnTjlK5c8Ljq3ykhCE08xCEIBCEIFGJFhIohCEBRMDieFRmdWAIYG/ioH5zoBMniqWe/wBpbeIOvxHlMdScPXo35a9sPhlDIip9m48ASB6CXSkZSEnAnPY68TUpczEcDlLCgWlHE4oKbKLnlJeFk3SkcuqI50MhTOdWPhLD0zkvJ3b7MN/fmvh3JG0xHoM9QjNYAXv28pp4DGZbo2pG/wCRki3lpoAZTxC6y8rqRcSpWM3XnGXjRoZz3EMOvyTE7BlJ8Df8pv486TH4qLYVj2Nf1A9SJcYxn4Z3so61sTSuM39qrHmBl2HhYeU90E8Q/Zvw9xiKVxqGJPdlNyezUeJE9vnv0+1c/X7yHQiRZ6PAQhCAQhCBShaLCRSRYRRAJW4jRzIetekPDf0vLUURZtZdXbl3bW8A8u8UwOQZ1OmbbqB/3mWZy5TV5dmGUs3CYzFZFMycAlR3NRtvqj85fqYfNvJ0UDQbTHevaXUZuOx2KQ5adEOObE2t3Sti+OFEu6sh6jt4EaGb5ZRuYOtN1u2UgHs9ZYb+nnL+0mJd/wCyp6X943Jt2KJcw+KrtXDlGVSoWx0vre5E6eu9AMcuUeUhbKdQRFu1nCzQrMuh265JVqStSe4tyjnUgSb0KONqX0lXiOuHta4Nlt3m/wCUs1aNye6dL7LcNR0JqIGAsRfr19bWnrhzw5+pl+PNP9huC/Jp8u3v1FGW+4Xc+Z9AJ11o1VAFhHT3xmppx5ZXK7pYQhNIIQhAIQhApwiwkUCLCLAIoiRwgVuIUc6MvPcd41HwnM5diJ185vilHI5+y2o/Mefxnj1ceNvfo5av4qzLpMPj9PFZS2HdVZdSGGjDnN1XvpEqJoZ4R1sPAcIxVRQXrJc2uFudOfj3y83s9WCkLVF72902IvK9SgyG63y31tvJHx6gAXft1m5prWXiqOM9mnUNeqBYC2nMm2t+U5XFcIxDViiVmVVa2fQA23yjnOlx1ao+iA95MXA4UrubnnJbrstxuuauYPCqiqilmsLZmNyTzJk2I5KN49DYX6pWoVr3c+EwwMQmUBRqzaeJnccBoZaQ7T6DQegnE4Il3LnZdu+eh4amFVVGwAnT0sdOTr5b4TwhCeznEIQgEIQgEIQgVoQi2kUkWAELQACKIWiiACUeMYcNTYndekPCaEZVUFSD1H4SWbiy6u3GU2se6WmMotp+cmpVb6TlymuzuxvsrpGHCrzEsIkme0Rq1k1aA7pFTTQmX66yhXqgC3VM1ravxDEZUmcap0QRmJqF27JBVewsJrHHzWMsvTUHEFUZRsNfHYT0zBVwyKwN7gefMd88Rqvb851X7O+LOalUEko1SxHLMVU3Hnae+F3XN1ceNvToQhPVziEIQCEIQCEIQK8BCKJGiRRARYQR0I0sBvAdIi5LW5fGVX4gA+TKR/3H0sJaUaGa1Z3RyeJphXcdTH11+Bmbi0caqbGP+e5sTikPvU6o8mp0yPzk7icWXGVfQwm8YxRx1kNnUg9Y2llON0/tRcVgUcWImBjPZ190MzK1W3W4wttDMzEY7P2CYNTh9VDreIFcbzU0aaz4kcpAzXlVSZOsXImKtj2OU2na+xHCTRwYqPcPWcuAbggWCrvrqqg95Mz/AGa9nvnNQM63ooenfZiNQnaOvutzM7vFOGaw91RpPfo43u5uvlP9Y1eH4kOt+akqe8aS3OLbEVFYmmTmLGwGoJN/eHMAfl1zb4ZjqxU/KINDYldDsLEqevfSe343W3M2YSFMQhNgwvvbnbrt1dsmkBCEIBCEIFeLEjKtUgEqpc9QsPUwqSIzgbm3UOZ7hIUdyNRl7AbnxNvhKOIo08wLOFYG/vqCTpYm+oPaOuamKbaNd2ynKQptoTaUMJi8oPyjrfl0rnXuvEHDqb9Iszg88xIPjJqfDKItZfxMfO5mpJII0xNGo63uGU9EnS/Zfn3TRTciU8X8gRlciwI0F7gjb3dpbpuDZgbg85KPPvauicPj0rfUroEOmzoSQSesg/gl9CCJs+2HChiMOVFg6nPTJ5Mvrrse+cnwXFFkswIZdGB3BG95w9bHWW/bv6GX5Y69NCpRO4kaVbHUS8CDIatC8xG6zcfkI5TDqYInWbVXAHNzk6YU6CGuI5pcAZs8F9mqlYgkWS/SY6adS9d50+D4IiWZxmO9tMo79r+c3Ur9C+XLbS3Id098Ojbzk5up1/GKFlSmgRAFUaAAWlC4AMtYlrC3OYmPxqIjOTZF947XJ0VFPWTp/wCDOuTXEcmxTo1HrgU3yBULO9iffNlVe3olr32y9c0MPiK1J2R0apoCrpvY3uGB53HrK2Bq1jTFWmoKvqQ4szW0AAv7o2Guss0+LKWyuCjAAag9XVuPXvmpLpFf5ZWq56iuBfQZduq/O35iav0iqpmFRWsNiQSTyHXfsPb1Rp4nQ2DBj1AMT5AStU4tTDWKOL8ygHpeLN+Ds08HxIOLlWXt3B7ufpLquDsQZlUcfTI0caciD+nwleq9JyGFfLY8jlsOdr2OumpvMXHk26CEzfpBB/1EbsLKD/QiTP41VKvxPpWU59Oiij3uZ6VtbWOwtttHJi8S+q0rDlm0PjmI+EnR6FNdCijYZbeVlgOKUcvvX7AGv8J6f1EQCli2OrKo7CAfwr+clp8Lp/XUOTvmFx5GJ9KK3RRWZjtcADv3kZ4dWb36nbYZiB3DQCXnzwp1XhVEcsn7rFB5XtIxgqe3zh+7Oh+IkicHHNz/AAgD43kg4PStrmPaTb4Wjc9ofhuH0u1u8/EDSWqdBVvlFgeQ2B7O/wDKVk4ZTX3Syn7Qdr+ptGthaubSoewk+hGxmbz5EddSHDNsTa/dsJzvtBgmSt8ugujgB7fVbrPeOfZOqxNJnQg9FzpcWNjyIuPGZWGavYCqispBV8vu6aFhf4W65554fnjp6dPP8btn0BcXkzrpGrR+TcpcEbqbjY7SwVnFcbjdV3TKZTcUXU9UfhqZDAnYES4lOPsJYXtpq1bZsx2I0/WNqVVI94bdHw5jr3lKsmZFJLaEgZbDY8za/rKVKmzB8hZizBSxOpUC5tsN9L9QE7secdvn5TV0XGV819bAaux2AG+v9eoicIxFBgHLWA9xSrA9V7WOp/SWfmFPKPlsuXQ5W1zEc8vO3LSWKRwiEFQikbWQi3d0Zudmagq8WQMEdGRRqtxuO6wt4Xkj8Ww50sW/hU+VzeXkrU2JKsp7NL+W8WproRp1ERx6Falj6J2YL2EZfXb1lg01cagMp7ip/IyvV4ZSYe7b93T029JXXgzAgrUIPaNezUERx7F0cNojXIunZp48pH9HUCb5E16gNfAbxv0WW/vKjvqbakAeZPxletwVMtlZgTpqbjxB/wBol+xaPCqDb01HddfhCRpw6uNBXNv4ura14S7+z/iWnwukpJy3P/cSRr2HSSU+G0RfoDXe9yOXI6cvSUc+MuejzNtKXhzkiDFnQkLvqcn+kEyXftVirUo0dlCnmFAue/b1kY4xT6m/D+ssUMCi6npMd2bU38dvj2yb5sv2R5SbnkZ540n2b/xCN+l2PuoPMt/lAmrlAjvON4+hjmvijsp+6o/z6xRhsSRfMVPUXI9BcTVaoo3YDvIHxjDiaf21+8D8DG/UTSOiaoH9oqtbUMu/iCB6eUrUuIAWULc3OYDQi5OmU65tuqTNxKkPrfhf9Iw8Vob5jf8AdP6RMb6NqXFzSBGdHBNjmC6qe2xufC8rU6qkhQSb+70XBPeCoIPZbymk/FqTW6LG2oNl9LtGHilA6lGv2Bb9+jSZdPfePTHqXHtVbJaS0MKza7DrMh4hiahps9OnfWygsoJ7rgA253J7Jy+J9qnKlKiOumtkyXA5imxuRcgXue6eeP8AjXb0y6/HC/xHijuGwyHITe7jUgbWAB1Nu2wvzkvs37PvTDBa5CMBmUJa9uoljbTQyhwnDOxuKLknm1gPHLmtOmQYpdETKOzIfPMxM95LjNdnhlZWgnD6S/VDE7ltT/t4RtTh9M/Ut3Fh8DKQr4sboT/CP9Me3EK43padiP8AG9o1ff7TglTgyk9F2HYQCPS0aMJiU91gQNhf/Swyjzj6fHUt0lN+YBB+NpNT4tSJ1LL3j+UmX5eYcIVxWKX3qd/C/wDlNvSS08ZXbQUbHmWuAO2x1lleI0d834X+FpA/GaYJADG3MBfTpTPfwIa3ztdcyt2Lk/1KIz6Rqro9PyDj1NxLdLGU3PvgHqPRPrpfulsVUGpdfvLG/cFEYqs46CZP+5jfwFx+R8ISWvxOkB734W/S/OEa+lWHroN2Ud7AfnKT8VDErTVmI52Nh3i1/O0WjwlF94luw2C37h+Zl+wVeSqO4KB8BJxPsZhw+Jf3myDqBt18l0PiYv0Q3+Kfun+aS4jiqLoAW7RYDq3P6WkH06n2fxj9Jr5eInA+g0O7k9wHb1364p4En2m/D+kUcWY+7SJ7mJ9AsaOI1ztRIHaj/wC0fI4SJwSmDfO/4Or92TfRVO/1vMfpKnz/ABP+H+Cp+sBxHEf4X/51P1j5e/2cLo4XR+yfvN+scvD6O2RT3i/xlNMZiTtSF+1WX/Mwj82Lbkq99vyDSfL3+xaHD6XKmn3F/SShFQE5QAByAlIYXEneuPBB8QRAcONyXcuuUgqwJBv3sRaZ/uqz8XxGm6vUUhsm65lXKFIDZyxAA/8AE1sIiOiPlGtmFwL6DlMv/wBP0yWys6XULYO4Ww3UZWDAdgax6o76Kq9FRUAQDRRmtYaWC3085ePFTbcJPVIWrUxu636sy/mZSXgy/Wc+AA+N4h4Om2d/wfyxqe1aS1U3zL5iNNVG0DKewEH4SivBk+0/4f5ZHW4Kh2Y36yAfQWjU9py0igO4v3iRNgqbbon3RfzEz04XVX3aluwF0HpeSJhsWD/eLbtZj8Vl16qracNorrkHjdh5EmFSkjaFVPgNO7qlKvga2/ytzy1ceoJt5SJUxa6+8B2q1/PpRr7Fk8IpttmXuP5MDbwkqcJpjcs3ebeWUCV1xeJ/wh9xv5o9nxTbDL90ejXP/iX5e/2nBOJ4GmUy5ANtRoeR3GvKJKPEKuITKX6SE9KwvbQ2Omo1sOrUQl1fYuLXxFT3QEW+/ZzGa3wAtzjk4P0szOW69NfvEnTw8poqLAATOx3ESLquljYk2vfsG3j6TM3vUGjTooo0VR4a+e5j8wE55fnD/wDUP3mHIdQki8MxTb1B/wDZU/SLjrvTbbz9UUKdzMinweoPeqeILN8bdfXJV4Mv1nJ7gB8bxZParpxdJdM6X6swJ8hrI/pOl9ryVv5ZGvCKZ5t5r/LJBwil1E/xN+snxTk36Uo/aP3W/SIeLUuWY9wH5mSLw2iPqeZY/EyWnhaY2RR/CL+e8fE5Z7caF9EP3gD5f7xtfiLtbIjEfWutxfvU/nL9WiCdVU26wD8RJaFJQLKABqbAAC57BG8Z4OWTT42ALFNdc2Vrm/PS35yyeK0wbZWuFvsAN++XatJWHSAIHIgH4yMYSkpJCLcAa2+HVJvH0cs88bBPufi/4xPpxfsD7/8AxmslNbXsPISS0u8fRyx146Psj7//ABjV42pPu+TA+lhNqRsoO4v36/GSWejlRXi6fZfyX+aMbjSXsEY/dv5Xmh82pj6i368o/SMqhW0IBHUQCJdz0cqS8TpE6kjvU/6by0mNpfbX1jPo6kfqAdxYeikRBwij9k/ff9Y3h9nKb55T+2vibfGJU4hSGmbyDH1AkTcIpDkfP/aSfRtH7H4m/WTeH2cs7imNpFC2YXFrcibkbXtfflCYn7QCMNg3rUvfDIADqNWAO+uxOxEJvhX/2Q==" alt="Image" className="img-fluid" />
                                                </div>
                                                <div>
                                                    <strong className="d-block font-weight-bold h5 mb-0">심상원(리더)</strong><span className="d-block highlight">github link: https://github.com/swon95</span>
                                                </div>

                                            </div>
                                            <blockquote>
                                                “Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. ”
                                            </blockquote>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="mb-4 aos-init aos-animate" data-aos="fade-up" data-aos-delay="300">
                                    <div className="untree_co-testimonial d-flex">

                                        <div className="text">
                                            <div className="author d-flex mb-3">
                                                <div className="pic mr-3">
                                                    <img src="data:image/jpeg;base64,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" alt="Image" className="img-fluid" />
                                                </div>
                                                <div>
                                                    <strong className="d-block font-weight-bold h5 mb-0">권현성</strong><span className="d-block highlight">github link: https://github.com/goodsosbva</span>
                                                </div>

                                            </div>
                                            <blockquote>
                                                “Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. ”
                                            </blockquote>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="mb-4 aos-init aos-animate" data-aos="fade-up" data-aos-delay="300">
                                    <div className="untree_co-testimonial d-flex">
                                        <div className="text">
                                            <div className="author d-flex mb-3">
                                                <div className="pic mr-3">
                                                    <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBIVFRgVFhUYGRgaGhocGBkcGhgcGR4cGhoaGhocGRwcIS4lIR8rIRgaJjgnKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHhISHjUsISE0NDQ0MTExNDQ0NDQ0NDQ0NDE0NDE0NDQ0NDQ0NDQ0NDQ0NDQ0NDE0NDQ0NDQ0NDQ0NP/AABEIAP4AxwMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAQIDBAUGBwj/xABFEAACAQIEAgcDCQUHAwUAAAABAgADEQQSITEFQSJRYXGBkaEGMrETFBVCUpKiwdEHcoLS8CMzU7LC4eJDYvEWJCWTo//EABkBAQEBAQEBAAAAAAAAAAAAAAABAgQDBf/EACURAQEAAgEEAgICAwAAAAAAAAABAhEhAzFBUSJhEqFCcQQygf/aAAwDAQACEQMRAD8A9RiRYSKSLCEBRAGJC8B0SKIGA2KDIcTiFQXJA0J1IAsNySdh2zzDjf7VGVmSjQClWtnqMWJFtSEWwU3sQc7AixtrA9K4lxWhh0z1nCLewJvqeQUDVj2AEzkfaD9oNOiMtMC7e47hypW9sxpqAwUm4Uki9jbQTyLjHGsViX+UrVXdrFRmIChW3VVUKoBtqANbaiZoqXW1hbfa3Z2QPbMH7fYeq6IgquSbMWCoLW6RHStbMQt+iBznbUcQDyIIA0OTbrXKxBHLefMOHxrobq1uiRp1Eg27tBpOqwX7QMWmQEI6qAtyhzW5/wB2yanncm/pA94+cAWuG155SR+G9vG0mR1YAggg7EaieW4H9peGYAtemfsnPUUkA21VdL2FyqixI97UnY4V+0HAO5IqfJEsA61cqh7i+dWW6kra1ybnQWGkDvbRbRqMCLjaPgJaLaLCVCWhaOhaA20W0W0LQEhFhCqcIsJFJCLCEJCLaFoCFwASSABuSbADrJM889rv2jYdadSjh3ZqhFlqpk+TU36VnJuWA2KqRfS+hj/2k+1VBcPWwyO3yzWQqqmwDZS4Y6AXQnvnjOUXGwsLdXnv18oF/inHcTiSDVqsxChfeYA2IIut7XuAdABcXte5lB3ucx9763aeZ7+yDi2o1HWCDIHcnn8IVMaotZvA85AH/rS0ZEyyokJN4Zv94i02tsfKBtAQ/wBf1vLNfF5ipyICNyua7G9+mSxv1ctJWMb5wPQ/Yb28rYYpRc58OL3XpM6jW3yeZ7EDToixtqATe/uHD8bTrotWmwdHF1YeviDpafJ6ORqNPSejfsw9sGw9RcPUZTQdiATfMjuQFIO5Vjod7FgbgXge6RYCKJACFoohKEtC0dCA20I6EClCEJFEIsIQATj/AGy9s0whKIwLJ/eWyF1YhSiqruuYENdiobKCL2uJ1WMxSUqb1XNkRGdzYnoqCToN9BtPmn2h4n85xFSsbjOxZRcnKv1QSSbmwF9bX0FgAIEOOxb1WNR2ZnYli5N7k77AWHYBYCw5SDMeZHjb4x9E6WNiL36V9/CSmgp2W3Zc692mkm2pKquw1t+d5ED/AFqZpUcIW2psT1cvHb85oYPgGIqnKEC67AW8zvbxElzkWYZXwwEQnr7d/gJtcH9l6+IOYAog3cjXuUczO+4J7FUqdmqDORsD7t+ZtznUpQCgACwG39dU8sutf4ujDoT+TzPGeyYpJdEqMeZK5jfrAW627zpOYxIUHK6ZTzYA/rbyE90dOyU8Xhabjpor/vAN5XmMepZ3emXSlnDwmqFHuNfwI+MgInr3EPZTCPr8mFI+zoPECcrxT2TVNUt98j0y6ec9ceti8Muhl4cXaXOHYpqbhlvfsbKdOV+rrB0MmxXC6iakfCZxQ856TKXs8csbj3fVnAsalahTdDdSi9W9hcG2lxse2aQE8V/Y37ROK7YZ2ORxdCzXs4HujtZQx/hJ5z2sCVkQiiLaVCCLCLCktCLCBQMIRZAkWFosDC9tsZ8jgcS43+TKLpfpVP7NNP3nG+k+bAL637Z9BftUP/xlcdbUur/GTrnga07C/p2/1bwga/s9wypUbob7ajQdZ6p6Jwv2dpIouMzfWY6kna0zfYfDZad/G/fynZ00nJnlbXd08ZMYrUuGUxoAAOY0tfr/AKvNKhhkUWCgdg0EEWToZiPSkydkYU7JOxjbTWk2hdNJVqLyl2qsp1rzNXFSqCZmJS81XXmZRxCXN5ltz/EcMLHTecHxGgA5A/r+jaejcS29ZwXGh0z6T36N5c3XnBfYqv8AJ47DPrpVUWBI945DqO/bntPqQbT5IVjTbMpIZTmUjcEHMpHaCAfCfV3DMT8pRp1LWzorW7wDOlx1ZtFtFiSoSLCLASEWEDPtFhCRRAQgIGJ7b4NKmAxGdcypTNS17XNLpgE9RKWPYZ87qhyi/LT+vD4z6d4nQz0KqWvnputuvMpFvWfMmFa6jXqPp/y9JKsep+ydHLQQ9YnQoJl+zyWw9P8AdH5yzjMWU0UXJnJZy78bw1EWTohnLNWxTC9MX20vykqYrGjdgNNityPHmJZIbtdMwvpBl5TIwOKqE2cy+785V0nZe2V61K/OUcXi3UdE69uszfmeMq3PyjAclsAJOKl3GhiFUD3vWZ1VtJWbhNdfffN1bnzMq1vlUIzajnaS4xZkh4gbzjONp0vCdjizfXkZyftAuo8Zvp8V59XnFkA2cEjQEMRoDa9yB22vPqnAYdKdJKaKFRVVVUbBQAAB4T5Ww1I1KqUxa71EUXNh0mC2J6ulr4z6vpiwA7BOmOKnwiwlQkIsIBCEIGfC0ISNC0BFiQJFnzl7QYF6WMroVsFqvlFrdAsWTwyMpn0Ys8o/aVQFZ2qIpD0syv0bBl6HSBG+hN7/AGfPOVkXDG28Nj2cT/21G++QfnNBqCkgm0qcCH9hT/cEt4ygzCwYr2gC/hObK8u3GcH/ADqlSGZ2VQN2YhQO0kyhi+PYUsqrUQlhmUB16Q5MvWDY69hjE4NTJbMMxdSjM/SJVt1uToO60y8H7J0MNUz0i5ex1JJGu5t1xLjrksv5cN2jiFc3G8vMt0mdgMIqageewJ5CaJcBSJmV6aZtNhn12EdivaBKQc5HcJbPlGi5trsbAHsvK1FgH153kwwlMh0KdB751zaNfmesy42eWc8bezPX2yw9RnXK6slywylgALXJZbi2o5wbE03UOpDKeYIIklDg+HpE/JUlQnRioOo6u6RfRNMXYLYk3JFxfvsZcrN8JjjdcqmLobGcb7TU8uVusz0DF0gEtbb+uc4z2mw+anccm+IlwvLHUnxZXsPgvlsfhlOxqhj25Mz/ABQT6cE+c+FYQ0HSqo6eZQnYdOkeZ7Bz1v2/RKHQdwnTjlK5c8Ljq3ykhCE08xCEIBCEIFGJFhIohCEBRMDieFRmdWAIYG/ioH5zoBMniqWe/wBpbeIOvxHlMdScPXo35a9sPhlDIip9m48ASB6CXSkZSEnAnPY68TUpczEcDlLCgWlHE4oKbKLnlJeFk3SkcuqI50MhTOdWPhLD0zkvJ3b7MN/fmvh3JG0xHoM9QjNYAXv28pp4DGZbo2pG/wCRki3lpoAZTxC6y8rqRcSpWM3XnGXjRoZz3EMOvyTE7BlJ8Df8pv486TH4qLYVj2Nf1A9SJcYxn4Z3so61sTSuM39qrHmBl2HhYeU90E8Q/Zvw9xiKVxqGJPdlNyezUeJE9vnv0+1c/X7yHQiRZ6PAQhCAQhCBShaLCRSRYRRAJW4jRzIetekPDf0vLUURZtZdXbl3bW8A8u8UwOQZ1OmbbqB/3mWZy5TV5dmGUs3CYzFZFMycAlR3NRtvqj85fqYfNvJ0UDQbTHevaXUZuOx2KQ5adEOObE2t3Sti+OFEu6sh6jt4EaGb5ZRuYOtN1u2UgHs9ZYb+nnL+0mJd/wCyp6X943Jt2KJcw+KrtXDlGVSoWx0vre5E6eu9AMcuUeUhbKdQRFu1nCzQrMuh265JVqStSe4tyjnUgSb0KONqX0lXiOuHta4Nlt3m/wCUs1aNye6dL7LcNR0JqIGAsRfr19bWnrhzw5+pl+PNP9huC/Jp8u3v1FGW+4Xc+Z9AJ11o1VAFhHT3xmppx5ZXK7pYQhNIIQhAIQhApwiwkUCLCLAIoiRwgVuIUc6MvPcd41HwnM5diJ185vilHI5+y2o/Mefxnj1ceNvfo5av4qzLpMPj9PFZS2HdVZdSGGjDnN1XvpEqJoZ4R1sPAcIxVRQXrJc2uFudOfj3y83s9WCkLVF72902IvK9SgyG63y31tvJHx6gAXft1m5prWXiqOM9mnUNeqBYC2nMm2t+U5XFcIxDViiVmVVa2fQA23yjnOlx1ao+iA95MXA4UrubnnJbrstxuuauYPCqiqilmsLZmNyTzJk2I5KN49DYX6pWoVr3c+EwwMQmUBRqzaeJnccBoZaQ7T6DQegnE4Il3LnZdu+eh4amFVVGwAnT0sdOTr5b4TwhCeznEIQgEIQgEIQgVoQi2kUkWAELQACKIWiiACUeMYcNTYndekPCaEZVUFSD1H4SWbiy6u3GU2se6WmMotp+cmpVb6TlymuzuxvsrpGHCrzEsIkme0Rq1k1aA7pFTTQmX66yhXqgC3VM1ravxDEZUmcap0QRmJqF27JBVewsJrHHzWMsvTUHEFUZRsNfHYT0zBVwyKwN7gefMd88Rqvb851X7O+LOalUEko1SxHLMVU3Hnae+F3XN1ceNvToQhPVziEIQCEIQCEIQK8BCKJGiRRARYQR0I0sBvAdIi5LW5fGVX4gA+TKR/3H0sJaUaGa1Z3RyeJphXcdTH11+Bmbi0caqbGP+e5sTikPvU6o8mp0yPzk7icWXGVfQwm8YxRx1kNnUg9Y2llON0/tRcVgUcWImBjPZ190MzK1W3W4wttDMzEY7P2CYNTh9VDreIFcbzU0aaz4kcpAzXlVSZOsXImKtj2OU2na+xHCTRwYqPcPWcuAbggWCrvrqqg95Mz/AGa9nvnNQM63ooenfZiNQnaOvutzM7vFOGaw91RpPfo43u5uvlP9Y1eH4kOt+akqe8aS3OLbEVFYmmTmLGwGoJN/eHMAfl1zb4ZjqxU/KINDYldDsLEqevfSe343W3M2YSFMQhNgwvvbnbrt1dsmkBCEIBCEIFeLEjKtUgEqpc9QsPUwqSIzgbm3UOZ7hIUdyNRl7AbnxNvhKOIo08wLOFYG/vqCTpYm+oPaOuamKbaNd2ynKQptoTaUMJi8oPyjrfl0rnXuvEHDqb9Iszg88xIPjJqfDKItZfxMfO5mpJII0xNGo63uGU9EnS/Zfn3TRTciU8X8gRlciwI0F7gjb3dpbpuDZgbg85KPPvauicPj0rfUroEOmzoSQSesg/gl9CCJs+2HChiMOVFg6nPTJ5Mvrrse+cnwXFFkswIZdGB3BG95w9bHWW/bv6GX5Y69NCpRO4kaVbHUS8CDIatC8xG6zcfkI5TDqYInWbVXAHNzk6YU6CGuI5pcAZs8F9mqlYgkWS/SY6adS9d50+D4IiWZxmO9tMo79r+c3Ur9C+XLbS3Id098Ojbzk5up1/GKFlSmgRAFUaAAWlC4AMtYlrC3OYmPxqIjOTZF947XJ0VFPWTp/wCDOuTXEcmxTo1HrgU3yBULO9iffNlVe3olr32y9c0MPiK1J2R0apoCrpvY3uGB53HrK2Bq1jTFWmoKvqQ4szW0AAv7o2Guss0+LKWyuCjAAag9XVuPXvmpLpFf5ZWq56iuBfQZduq/O35iav0iqpmFRWsNiQSTyHXfsPb1Rp4nQ2DBj1AMT5AStU4tTDWKOL8ygHpeLN+Ds08HxIOLlWXt3B7ufpLquDsQZlUcfTI0caciD+nwleq9JyGFfLY8jlsOdr2OumpvMXHk26CEzfpBB/1EbsLKD/QiTP41VKvxPpWU59Oiij3uZ6VtbWOwtttHJi8S+q0rDlm0PjmI+EnR6FNdCijYZbeVlgOKUcvvX7AGv8J6f1EQCli2OrKo7CAfwr+clp8Lp/XUOTvmFx5GJ9KK3RRWZjtcADv3kZ4dWb36nbYZiB3DQCXnzwp1XhVEcsn7rFB5XtIxgqe3zh+7Oh+IkicHHNz/AAgD43kg4PStrmPaTb4Wjc9ofhuH0u1u8/EDSWqdBVvlFgeQ2B7O/wDKVk4ZTX3Syn7Qdr+ptGthaubSoewk+hGxmbz5EddSHDNsTa/dsJzvtBgmSt8ugujgB7fVbrPeOfZOqxNJnQg9FzpcWNjyIuPGZWGavYCqispBV8vu6aFhf4W65554fnjp6dPP8btn0BcXkzrpGrR+TcpcEbqbjY7SwVnFcbjdV3TKZTcUXU9UfhqZDAnYES4lOPsJYXtpq1bZsx2I0/WNqVVI94bdHw5jr3lKsmZFJLaEgZbDY8za/rKVKmzB8hZizBSxOpUC5tsN9L9QE7secdvn5TV0XGV819bAaux2AG+v9eoicIxFBgHLWA9xSrA9V7WOp/SWfmFPKPlsuXQ5W1zEc8vO3LSWKRwiEFQikbWQi3d0Zudmagq8WQMEdGRRqtxuO6wt4Xkj8Ww50sW/hU+VzeXkrU2JKsp7NL+W8WproRp1ERx6Falj6J2YL2EZfXb1lg01cagMp7ip/IyvV4ZSYe7b93T029JXXgzAgrUIPaNezUERx7F0cNojXIunZp48pH9HUCb5E16gNfAbxv0WW/vKjvqbakAeZPxletwVMtlZgTpqbjxB/wBol+xaPCqDb01HddfhCRpw6uNBXNv4ura14S7+z/iWnwukpJy3P/cSRr2HSSU+G0RfoDXe9yOXI6cvSUc+MuejzNtKXhzkiDFnQkLvqcn+kEyXftVirUo0dlCnmFAue/b1kY4xT6m/D+ssUMCi6npMd2bU38dvj2yb5sv2R5SbnkZ540n2b/xCN+l2PuoPMt/lAmrlAjvON4+hjmvijsp+6o/z6xRhsSRfMVPUXI9BcTVaoo3YDvIHxjDiaf21+8D8DG/UTSOiaoH9oqtbUMu/iCB6eUrUuIAWULc3OYDQi5OmU65tuqTNxKkPrfhf9Iw8Vob5jf8AdP6RMb6NqXFzSBGdHBNjmC6qe2xufC8rU6qkhQSb+70XBPeCoIPZbymk/FqTW6LG2oNl9LtGHilA6lGv2Bb9+jSZdPfePTHqXHtVbJaS0MKza7DrMh4hiahps9OnfWygsoJ7rgA253J7Jy+J9qnKlKiOumtkyXA5imxuRcgXue6eeP8AjXb0y6/HC/xHijuGwyHITe7jUgbWAB1Nu2wvzkvs37PvTDBa5CMBmUJa9uoljbTQyhwnDOxuKLknm1gPHLmtOmQYpdETKOzIfPMxM95LjNdnhlZWgnD6S/VDE7ltT/t4RtTh9M/Ut3Fh8DKQr4sboT/CP9Me3EK43padiP8AG9o1ff7TglTgyk9F2HYQCPS0aMJiU91gQNhf/Swyjzj6fHUt0lN+YBB+NpNT4tSJ1LL3j+UmX5eYcIVxWKX3qd/C/wDlNvSS08ZXbQUbHmWuAO2x1lleI0d834X+FpA/GaYJADG3MBfTpTPfwIa3ztdcyt2Lk/1KIz6Rqro9PyDj1NxLdLGU3PvgHqPRPrpfulsVUGpdfvLG/cFEYqs46CZP+5jfwFx+R8ISWvxOkB734W/S/OEa+lWHroN2Ud7AfnKT8VDErTVmI52Nh3i1/O0WjwlF94luw2C37h+Zl+wVeSqO4KB8BJxPsZhw+Jf3myDqBt18l0PiYv0Q3+Kfun+aS4jiqLoAW7RYDq3P6WkH06n2fxj9Jr5eInA+g0O7k9wHb1364p4En2m/D+kUcWY+7SJ7mJ9AsaOI1ztRIHaj/wC0fI4SJwSmDfO/4Or92TfRVO/1vMfpKnz/ABP+H+Cp+sBxHEf4X/51P1j5e/2cLo4XR+yfvN+scvD6O2RT3i/xlNMZiTtSF+1WX/Mwj82Lbkq99vyDSfL3+xaHD6XKmn3F/SShFQE5QAByAlIYXEneuPBB8QRAcONyXcuuUgqwJBv3sRaZ/uqz8XxGm6vUUhsm65lXKFIDZyxAA/8AE1sIiOiPlGtmFwL6DlMv/wBP0yWys6XULYO4Ww3UZWDAdgax6o76Kq9FRUAQDRRmtYaWC3085ePFTbcJPVIWrUxu636sy/mZSXgy/Wc+AA+N4h4Om2d/wfyxqe1aS1U3zL5iNNVG0DKewEH4SivBk+0/4f5ZHW4Kh2Y36yAfQWjU9py0igO4v3iRNgqbbon3RfzEz04XVX3aluwF0HpeSJhsWD/eLbtZj8Vl16qracNorrkHjdh5EmFSkjaFVPgNO7qlKvga2/ytzy1ceoJt5SJUxa6+8B2q1/PpRr7Fk8IpttmXuP5MDbwkqcJpjcs3ebeWUCV1xeJ/wh9xv5o9nxTbDL90ejXP/iX5e/2nBOJ4GmUy5ANtRoeR3GvKJKPEKuITKX6SE9KwvbQ2Omo1sOrUQl1fYuLXxFT3QEW+/ZzGa3wAtzjk4P0szOW69NfvEnTw8poqLAATOx3ESLquljYk2vfsG3j6TM3vUGjTooo0VR4a+e5j8wE55fnD/wDUP3mHIdQki8MxTb1B/wDZU/SLjrvTbbz9UUKdzMinweoPeqeILN8bdfXJV4Mv1nJ7gB8bxZParpxdJdM6X6swJ8hrI/pOl9ryVv5ZGvCKZ5t5r/LJBwil1E/xN+snxTk36Uo/aP3W/SIeLUuWY9wH5mSLw2iPqeZY/EyWnhaY2RR/CL+e8fE5Z7caF9EP3gD5f7xtfiLtbIjEfWutxfvU/nL9WiCdVU26wD8RJaFJQLKABqbAAC57BG8Z4OWTT42ALFNdc2Vrm/PS35yyeK0wbZWuFvsAN++XatJWHSAIHIgH4yMYSkpJCLcAa2+HVJvH0cs88bBPufi/4xPpxfsD7/8AxmslNbXsPISS0u8fRyx146Psj7//ABjV42pPu+TA+lhNqRsoO4v36/GSWejlRXi6fZfyX+aMbjSXsEY/dv5Xmh82pj6i368o/SMqhW0IBHUQCJdz0cqS8TpE6kjvU/6by0mNpfbX1jPo6kfqAdxYeikRBwij9k/ff9Y3h9nKb55T+2vibfGJU4hSGmbyDH1AkTcIpDkfP/aSfRtH7H4m/WTeH2cs7imNpFC2YXFrcibkbXtfflCYn7QCMNg3rUvfDIADqNWAO+uxOxEJvhX/2Q==" alt="Image" className="img-fluid" />
                                                </div>
                                                <div>
                                                    <strong className="d-block font-weight-bold h5 mb-0">양서진</strong><span className="d-block highlight">github link: https://github.com/zkdk1241</span>
                                                </div>

                                            </div>
                                            <blockquote>
                                                “Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. ”
                                            </blockquote>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="mb-4 aos-init aos-animate" data-aos="fade-up" data-aos-delay="300">
                                    <div className="untree_co-testimonial d-flex">

                                        <div className="text">
                                            <div className="author d-flex mb-3">
                                                <div className="pic mr-3">
                                                    <img src="data:image/jpeg;base64,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" alt="Image" className="img-fluid" />
                                                </div>
                                                <div>
                                                    <strong className="d-block font-weight-bold h5 mb-0">안정미</strong><span className="d-block highlight">github link: https://github.com/jmahn1901</span>
                                                </div>

                                            </div>
                                            <blockquote>
                                                “Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. ”
                                            </blockquote>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="mb-4 aos-init aos-animate" data-aos="fade-up" data-aos-delay="300">
                                    <div className="untree_co-testimonial d-flex">

                                        <div className="text">
                                            <div className="author d-flex mb-3">
                                                <div className="pic mr-3">
                                                    <img src="data:image/jpeg;base64,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" alt="Image" className="img-fluid" />
                                                </div>
                                                <div>
                                                    <strong className="d-block font-weight-bold h5 mb-0">허다혜</strong><span className="d-block highlight">github link: https://github.com/hidihi</span>
                                                </div>

                                            </div>
                                            <blockquote>
                                                “Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. ”
                                            </blockquote>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* model-section */}
                <div className="untree_co-section" id="model-section">
                    <div className="container">
                        <div className="row justify-content-between">
                            <div className="col-lg-4">
                                <span className="caption aos-init aos-animate" data-aos="fade-up" data-aos-delay="0">Digital Services</span>
                                <h3 className="heading mb-4 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">A complete solution for your business website.</h3>
                                <div className="mb-4 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
                                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>

                                    <ul className="list-unstyled ul-check primary">
                                        <li>There live the blind texts</li>
                                        <li>Far far away behind the word</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-7 aos-init aos-animate" data-aos="fade-up" data-aos-delay="400">
                                <a href="https://vimeo.com/342333493" className="btn-video" data-fancybox="">

                                    <span className="wrap-icon-play">
                                        <svg className="bi bi-play-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11.596 8.697l-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>
                                        </svg>
                                    </span>
                                    <img src="https://untree.co/demos/landing/images/dashboard.jpg" alt="Image" className="img-fluid img-shadow" />
                                </a>
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
                                    <div className="service-contents"  onClick={()=>{
                                        setDesimg(imgpose)
                                        }}>
                                        <h3>Fast, Precise Model</h3>
                                        <p>17개의 keypoint를 감지하여 정확한 요가 포즈를 확인</p>
                                        <p>초당 30개의 Frame에 대해 Detection을 보장(30FPS)</p>
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
                                    <div className="service-contents" onClick={()=>{
                                        setDesimg(img3)
                                        }}>
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
                                    <div className="service-contents" onClick={()=>{
                                        setDesimg(img2)
                                        }}>
                                        <h3>MoveNet</h3>
                                        <p>Bottom-up 방식의 자세 추정 모델</p>
                                        <p>TensorFlow.js로 경량화된  모델</p>
                                    </div>
                                </a>


                            </div>

                            <div className="col-lg-7">
                                <div className="img-shadow">
                                    <div className="owl-single no-dots owl-carousel owl-loaded">




                                        <div className="owl-stage-outer owl-height" style={{ height: "500" }}>
                                            <div className="owl-stage" style={{ trnasform: "translate3d(-1340px, 0px, 0px)", width: "4690px", transition: "all 0s ease 0s" }}>


                                                <div className="owl-item cloned" style={{ width: "620px" }}>
                                                    <div className="item">
                                                        {/* <span className="number">2/3</span> */}
                                                        {/* <img src="images/dashboard.jpg" alt="Image" className="img-fluid" /> */}
                                                        {/* <img src={imgpose} alt="Image" className="img-fluid" /> */}
                                                        <img src={descimg} alt="Image" className="img-fluid" style={{width: "700px", height: "500px"}} /> 
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
