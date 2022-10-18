/* eslint-disable */ 
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";

// import Nav from "react-bootstrap/Nav";
import eximg26 from "./../../../src/assets/images/img/26.gif";
import Pagination from "react-bootstrap/Pagination";


let InfoPose = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div
        className="container"
        style={{ marginBottom: "100px", width: "center" }}
      >
        <div className="row justify-content-center">
          <h3 style={{ paddingTop: "100px", paddingBottom: "100px", textAlign :"center"}}>
            요가정보 리스트
          </h3>

          <Row className="g-4">
            {Array.from({ length: 4 }).map((_, idx) => (
              <Col>
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="center" src={eximg26} />
                  <Card.Body>
                    <Card.Title>모관운동</Card.Title>
                    <Card.Text>모세혈관 운동의 줄임말로...</Card.Text>
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
                        <Modal.Title>모관운동</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <img src={eximg26} />
                        <h5>수련 요령</h5>
                        모세혈관 운동의 줄임말로 팔다리 모세혈관의 혈액순환을
                        위해 진동을 주는 자세이다. 양손과 양다리를 허공에
                        올려준다. 손발을 털듯이 가볍고 빠르게 흔들어 주기를
                        반복한다. 2분 이상 반복한다.
                        <br />
                        <h5>수련 효과</h5>
                        모세혈관의 혈액순환을 촉진하여 하체의 부개를 빼주고
                        심장의 부담을 덜어준다. 다리가 무겁고 피곤한 것을
                        상쾌하고 가볍게 한다.
                        <br />
                        <h5>주의사항</h5>
                        주의사항 있으면 보여주고, 없으면 안 보여주기
                      </Modal.Body>
                      <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                          닫기
                        </Button>
                      </Modal.Footer>
                    </Modal>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

          <Pagination style={{ padding: "50px 0px 50px 0px",justifyContent : "center"}}>
            <Pagination.Prev />
            <Pagination.Item active>{1}</Pagination.Item>
            <Pagination.Item>{2}</Pagination.Item>
            <Pagination.Next />
          </Pagination>
        </div>
      </div>
    </>
  );
};

export default InfoPose;
