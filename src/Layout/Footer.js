import { Col, Container, Row } from "react-bootstrap";
import footerData from "../Layout/footer.json";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Container className="mt-5 bg-dark">
      <Container className="py-3">
        <Row className="py-5">
          {footerData.map((col) => (
            <Col key={col.id} className="text-white fs-4">
              <p>{col.title}</p>
              {col.mes.map((mes) => (
                <Link
                  key={mes}
                  to="#"
                  className="d-block text-decoration-none text-white mt-3">
                  {mes}
                </Link>
              ))}
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
};
export default Footer;
