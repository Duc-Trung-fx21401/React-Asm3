import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <Container style={{ marginTop: 150, marginBottom: 150 }}>
      <h1>Page Not Found</h1>
      <div>Không tìm thấy dữ liệu!</div>
      <Link to="/">Back to Home</Link>
    </Container>
  );
};

export default ErrorPage;
