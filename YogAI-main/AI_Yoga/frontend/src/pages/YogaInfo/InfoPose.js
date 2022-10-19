/* eslint-disable */
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
// import Col from "react-bootstrap/Col";
// import Row from "react-bootstrap/Row";

import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";

const server = {
  url: "http://localhost:8080",
};

// import Nav from "react-bootstrap/Nav";
// import eximg26 from "./../../../src/assets/images/img/26.gif";
// import Img from "./../../assets/images/img";
// import Pagination from "react-bootstrap/Pagination";


import axios from "axios";


const yoga_url = "http://www.selfyoga.co.kr/";


let InfoPose = () => {


  const [modalData, setModalData] = useState([]);

  let getListPoseInfo = async () => {
      return await axios.get(server.url + "/infopose", {});
  };
    
  useEffect(()=>{
    getListPoseInfo()
    .then((res) => {
      console.log(res.data.infoData);
      setModalData(res.data.infoData);
    })
    .catch((err) => {
      console.log(err);
    });
  },[]);

  console.log(modalData);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    let detailyoga = (data) => {
      console.log(data);
      setModalData({
          ...modalData,
          num: data.num,
          type: data.type,
          name: data.name,
          yogaContent: data.yogaContent,
          yogaEffect: data.yogaEffect,
          yogaWarning: data.yogaWarning
      })
  }

  return (
    <div className="color bg-light">
      <div
        className="container"
        style={{ marginBottom: "100px", width: "center" }}
      >
        <div className="row justify-content-center">
          <h3
            style={{
              paddingTop: "100px",
              paddingBottom: "100px",
              textAlign: "center",
            }}
          >
            요가정보 리스트
          </h3>
          <div className="album py-5 bg-light">
                <div className="container">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        {
                            //가져온 일기장 리스트를 보여주는 코드
                            modalData.map(data => (
                                <div className="col">
                                    <div className="card shadow-sm">
                                        {
                                            //이미지가 존재하지 않을경우 안보여줌
                                            data.url === "" ? (<></>) : (
                                                <img className="card-img-top" alt="요가사진" src={yoga_url + data.yogaImg} />
                                            )
                                        }
                                        <div className="card-body">
                                            <h5 className="card-title"
                                                data-bs-toggle="modal"
                                                data-bs-target="#dailyModal"
                                                onClick={() => { detailyoga(data) }}>{data.name}</h5>
                                            <p className="card-text">{data.yogaContent.substring(0, ((data.yogaContent).length / 2))}...&nbsp;&nbsp;
                                                <a href="#" onClick={() => { detailyoga(data) }}
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#dailyModal">상세보기</a></p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
          {/* {modalData.map((item) => {
          return (
            <>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="center" src={yoga_url + item.yogaImg} />
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>{item.yogaContent.substring(0, ((item.yogaContent).length / 5))}...</Card.Text>
                  <Button
                    onClick={handleShow}
                    variant="outline-secondary"
                    style={{
                      padding: "5px 22px",
                      border: "1px solid rgba(0, 0, 0, 0.1)",
                      color: "#000000",
                      borderRadius: "30px",
                    }}
                  >
                    정보 더보기
                  </Button>
                  <Modal show={show} onHide={handleClose}>
                    <Modal.Header>
                      <Modal.Title>{item.name}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <img src={yoga_url + item.yogaImg} />
                      <h5>수련요령</h5>
                      {item.yogaContent}
                      <br />
                      <h5>수련효과</h5>
                      {item.yogaEffect}
                      <br />
                      <h5>주의사항</h5>
                      {item.yogaWarning}
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleClose}>
                        닫기
                      </Button>
                    </Modal.Footer>
                  </Modal>
                </Card.Body>
              </Card>
            </>
          );
        })} */}

          {/* <Pagination
            style={{ padding: "50px 0px 50px 0px", justifyContent: "center" }}
          >
            <Pagination.Prev />
            <Pagination.Item active>{1}</Pagination.Item>
            <Pagination.Item>{2}</Pagination.Item>
            <Pagination.Next />
          </Pagination> */}
          {/* <div style={{
                    padding: "10px",
                    margin: "5px",
                    display: "flex",
                    justifyContent: "center"
                }}>
                    <nav aria-label="Page navigation example">
                        <ul className="pagination">
                            {
                                page.page <= 1 ? (<></>) : (
                                    <>
                                        <li className="page-item">
                                            <a className="page-link"
                                                onClick={() => { changePage(1) }}
                                                aria-label="Previous">
                                                <span aria-hidden="true">&laquo;</span>
                                            </a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link"
                                                onClick={() => {
                                                    changePage(Number(page.page) - 1)
                                                }}>{Number(page.page) - 1}
                                            </a>
                                        </li>
                                    </>
                                )
                            }
                            <li className="page-item">
                                <a className="page-link"
                                    onClick={() => { changePage(Number(page.page)) }}
                                    href="#">{page.page}
                                </a>
                            </li>
                            {
                                page.totalPage <= page.page ? (<></>) : (
                                    <>
                                        <li className="page-item">
                                            <a className="page-link"
                                                onClick={() => { changePage(Number(page.page) + 1) }}
                                            >{Number(page.page) + 1}
                                            </a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link"
                                                onClick={() => { changePage(page.totalPage) }}
                                                aria-label="Next">
                                                <span aria-hidden="true">&raquo;</span>
                                            </a>
                                        </li>
                                    </>
                                )
                            }
                        </ul>
                    </nav>
                </div> */}
        </div>
      </div>
    </div>
  );
};

export default InfoPose;
