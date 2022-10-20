/* eslint-disable */
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
// import Pagination from "react-bootstrap/Pagination";
import axios from "axios";
import DetailYogaInfo from "./DetailYogaInfo";
import ModalHeader from "react-bootstrap/esm/ModalHeader";

const server = {
  url: "http://localhost:8080",
};
const yoga_url = "http://www.selfyoga.co.kr/";

// 요가정보 페이지
let InfoPose = () => {

  //페이징 처리를 위한곳
  const [page, setPage] = useState({
    page: 1,
    totalPage: 0,
  });

  // 요가 정보 데이터 가져오기
  const [modalData, setModalData] = useState([]);

  let getListPoseInfo = async () => {
    return await axios.get(server.url + "/infopose", {});
  };

  useEffect(() => {

    getListPoseInfo()
      .then((res) => {
        console.log(res.data.infoData);
        setModalData(res.data.infoData);

        setPage({
          ...page, //현재 페이지는 유지
          totalPage: res.data.totalPage, //전체 페이지가 몇개인지 가져옴
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // 콘솔에서 요가 정보 데이터 잘 가져왔는지 확인
  // console.log(modalData);

  let detailyoga = (data) => {
    console.log(data);
    setModalData({
      ...modalData,
      num: data.num,
      type: data.type,
      name: data.name,
      yogaContent: data.yogaContent,
      yogaEffect: data.yogaEffect,
      yogaWarning: data.yogaWarning,
      yogaImg: data.yogaImg,
    });
    // return setModalData(true);
  };

  let changePage = (page) => {
    axios
      .get(`${server.url}/infopose?page=${page}&perPage=8`,{})
      .then((res) => {
        console.log(res);
        setModalData(res.data.infoData); //일기장 가져온거 넣기
        setPage({
          page: page,
          totalPage: res.data.totalPage,
        });
      });
  };

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
          <DetailYogaInfo modalData={modalData} />
          {/* 요가 정보가 나타나는 부분 */}
          <div className="container" style = {{justifyContent :"center", textAlign :"center"}}>
          <Row md={4} className="g-4">
            {Array.isArray(modalData)
              ? modalData.map((data, index) => (
                <Col>
                  <Card key={index} style={{ width: "17rem", display: "flex", margin : "auto" , backgroundColor: "#f1f1f1"}} border="dark">
                    <Card.Header style={{backgroundColor: "white"}}>
                      {data.num}.{data.name}
                    </Card.Header>
                    {
                      // 이미지가 존재하지 않을 경우 안 보여주기
                      data.yogaImg === "" ? (
                        <></>
                      ) : (
                        <Card.Img
                          alt="요가사진"
                          variant="center"
                          src={yoga_url + data.yogaImg}
                          style = {{width:"70%", display: "block", margin : "auto", padding : "20px 0 10px 0"}}
                        />
                      )
                    }
                    <Card.Text>
                      분류 : {data.type}
                      <br />
                      {/* 내용 :{" "}
                      {data.yogaContent.substring(
                        0,
                        data.yogaContent.length / 3
                      )}
                      ...&nbsp;&nbsp; */}
                    </Card.Text>
                    <Card.Footer>
                      <a
                        href="#"
                        onClick={() => {
                          detailyoga(data);
                        }}
                        data-bs-toggle="modal"
                        data-bs-target="#dailyModal"

                      >
                        정보 더보기
                      </a>
                    </Card.Footer>
                  </Card>
                  </Col>
                ))
              : null}
              </Row>
          </div>

          {/* 페이징 처리하는 부분 10월12일 할 예정 */}
          <div
            style={{
              padding: "10px",
              margin: "5px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <nav aria-label="Page navigation example">
              <ul className="pagination">
                {page.page <= 1 ? (
                  <></>
                ) : (
                  <>
                    <li className="page-item">
                      <a
                        className="page-link"
                        onClick={() => {
                          changePage(1);
                        }}
                        aria-label="Previous"
                      >
                        <span aria-hidden="true">&laquo;</span>
                      </a>
                    </li>
                    <li className="page-item">
                      <a
                        className="page-link"
                        onClick={() => {
                          changePage(Number(page.page) - 1);
                        }}
                      >
                        {Number(page.page) - 1}
                      </a>
                    </li>
                  </>
                )}
                <li className="page-item">
                  <a
                    className="page-link"
                    onClick={() => {
                      changePage(Number(page.page));
                    }}
                    href="#"
                  >
                    {page.page}
                  </a>
                </li>
                {page.totalPage <= page.page ? (
                  <></>
                ) : (
                  <>
                    <li className="page-item">
                      <a
                        className="page-link"
                        onClick={() => {
                          changePage(Number(page.page) + 1);
                        }}
                      >
                        {Number(page.page) + 1}
                      </a>
                    </li>
                    <li className="page-item">
                      <a
                        className="page-link"
                        onClick={() => {
                          changePage(page.totalPage)
                        }}
                        aria-label="Next"
                      >
                        <span aria-hidden="true">&raquo;</span>
                      </a>
                    </li>
                  </>
                )}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoPose;
