import { Container, Row, Col } from "react-bootstrap";
import ProductList from "../Home/ProductList";

const ShopPage = () => {
  return (
    <Container style={{ marginTop: 60 }}>
      <Row className="bg-light p-5 mb-5">
        <Col>
          <h2 className="mb-0 px-3 py-3">SHOP</h2>
        </Col>
        <Col className="justify-content-end d-flex align-items-center">
          <h6 className="text-secondary mb-0">SHOP</h6>
        </Col>
      </Row>
      {/* Phần hiển thị riêng trong list sản phẩm */}
      <ProductList />
    </Container>
  );
};
export default ShopPage;
