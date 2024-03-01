import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function Other() {
  return (
    <Container className="mb-5">
      <Row className="text-center py-5 mb-5 bg-light">
        <Col>
          <h6>FREE SHIPPING</h6>
          <p className="text-secondary">Free shipping worldwide</p>
        </Col>
        <Col>
          <h6>24 X 7 SERVICE</h6>
          <p className="text-secondary">Free shipping worldwide</p>
        </Col>
        <Col>
          <h6>FESTIVAL OFFER</h6>
          <p className="text-secondary">Free shipping worldwide</p>
        </Col>
      </Row>
      <Row>
        <Col className="px-0">
          <h4>LET'S BE FRIENDS!</h4>
          <p className="text-secondary">
            Nisi nisi tempor consequat laboris nisi
          </p>
        </Col>
        <Col className="px-0 align-items-center d-flex">
          <input
            type="text"
            placeholder="Enter your email address"
            className="py-3 h-75 form-control rounded-0 fst-normal"
          />
          <button className="btn bg-dark py-3 text-light fs-6 rounded-0">
            Subscribe
          </button>
        </Col>
      </Row>
    </Container>
  );
}

export default Other;
