import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ReactDOM from "react-dom";

function Livechat() {
  return (
    <>
      {ReactDOM.createPortal(
        <Container
          className="position-fixed top-50 start-50 shadow-lg bg-white rounded-4 livechat"
          style={{ width: "30rem" }}>
          {/* title của cửa sổ chatbot */}
          <Row className="border-bottom p-3">
            <Col className="d-flex align-items-center justify-content-between">
              <h5 className="mb-0 fw-bolder fst-normal">Customer Support</h5>
              <button
                type="button"
                className="btn btn-light mb-0 px-2 py-1 rounded-0"
                style={{ fontSize: "0.85rem" }}>
                Let's Chat App
              </button>
            </Col>
          </Row>

          <Container className="mt-3" style={{ height: "22rem" }}>
            {/* Khung chat xanh của chatbot */}
            <Row className="justify-content-end">
              <Col
                md={10}
                className="d-flex flex-column justify-content-start align-items-end me-5">
                <p className="bg-primary text-white p-2 rounded-1">Xin Chào</p>
                <p className="bg-primary text-white p-2 rounded-1">
                  Làm thế nào để xem các sản phẩm
                </p>
              </Col>
            </Row>

            {/* Khung chat của khách */}
            <Row style={{ columnGap: "0,85rem" }}>
              <Col md={1}>
                <img
                  src="https://img.freepik.com/free-vector/chatbot-chat-message-vectorart_78370-4104.jpg?size=626&ext=jpg&ga=GA1.1.1348320717.1709309651&semt=ais"
                  alt="chatbot"
                  className="rounded-circle"
                />
              </Col>
              <Col md={9}>
                <p className="d-inline-block text-secondary p-2 rounded-1 bg-light">
                  ADMIN: Chào bạn
                </p>
              </Col>
            </Row>

            <Row style={{ columnGap: "0,85rem" }}>
              <Col md={1}>
                <img
                  src="https://img.freepik.com/free-vector/chatbot-chat-message-vectorart_78370-4104.jpg?size=626&ext=jpg&ga=GA1.1.1348320717.1709309651&semt=ais"
                  alt="chatbot"
                  className="rounded-circle"
                />
              </Col>
              <Col md={9}>
                <p className="d-inline-block text-secondary bg-light p-2 rounded-1">
                  ADMIN: Bạn có thể vào mục Shop để xem các sản phẩm
                </p>
              </Col>
            </Row>
          </Container>

          {/* Khung chat của user */}
          <Row
            className="bg-light py-2 message"
            style={{ borderRadius: "0 0 1rem 1rem" }}>
            <Col className="my-1">
              <img
                src="https://img.freepik.com/free-vector/chatbot-chat-message-vectorart_78370-4104.jpg?size=626&ext=jpg&ga=GA1.1.1348320717.1709309651&semt=ais"
                alt="chatbot"
                className="rounded-circle ms-2"
              />
              <input
                type="text"
                placeholder="Enter Message!"
                className="fst-normal ps-2 border-0 mx-3"
              />
              <i className="fa fa-paperclip mx-2"></i>
              <i className="fa fa-face-grin mx-2"></i>
              <i className="fa fa-paper-plane text-primary mx-2"></i>
            </Col>
          </Row>
        </Container>,
        document.getElementById("livechat-root")
      )}
    </>
  );
}

export default Livechat;
