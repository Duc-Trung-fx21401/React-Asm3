import React from "react";
import { Container, Row, Col, Stack } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Categories = () => {
  return (
    <>
      <Container className="text-center mb-5 categories">
        <p className="text-secondary mb-0">CAREFULLY CREATED COLLECTIONS</p>
        <h4 className="mb-4">BROWSE OUR CATEGORIES</h4>
        <Stack gap={4}>
          <Row direction="horizontal" gap={4}>
            <Col>
              <NavLink to="/shop">
                <img src="./img/product_1.png" alt="iphone" className="w-100" />
              </NavLink>
            </Col>
            <Col>
              <NavLink to="/shop">
                <img src="./img/product_2.png" alt="mac" className="w-100" />
              </NavLink>
            </Col>
          </Row>

          <Row>
            <Col>
              <NavLink to="/shop">
                <img src="./img/product_3.png" alt="ipad" className="w-100" />
              </NavLink>
            </Col>
            <Col>
              <NavLink to="/shop">
                <img src="./img/product_4.png" alt="watch" className="w-100" />
              </NavLink>
            </Col>
            <Col>
              <NavLink to="/shop">
                <img src="./img/product_5.png" alt="pods" className="w-100" />
              </NavLink>
            </Col>
          </Row>
        </Stack>
      </Container>
    </>
  );
};

export default Categories;
