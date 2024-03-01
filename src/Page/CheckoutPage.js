import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useSelector } from "react-redux";

const CheckoutPage = () => {
  const cart = useSelector((state) => state.cart);
  return (
    <Container style={{ marginTop: "4rem" }}>
      {/* Banner */}
      <Row className="bg-light p-3">
        <Col className="my-3">
          <h2 className="mb-0 px-5 py-5">CHECKOUT</h2>
        </Col>
        <Col className="justify-content-end d-flex align-items-center">
          <h6>HOME / &nbsp;</h6>
          <h6>CART / &nbsp;</h6>
          <h6 className="text-secondary">CHECKOUT</h6>
        </Col>
      </Row>
      <h4 className="mb-4 mt-5">BILLING DETAILS</h4>

      {/* Hiển thị Form */}
      <Row>
        <Col md={8} className="pe-4">
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>FULL NAME:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Your Full Name Here"
                className="fst-normal p-3 rounded-0"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>EMAIL:</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter Your Email Here"
                className="fst-normal p-3 rounded-0"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>PHONE NUMBER:</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter Your Phone Number Here"
                className="fst-normal p-3 rounded-0"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>ADDRESS:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Your Address Here"
                className="fst-normal p-3 rounded-0"
              />
            </Form.Group>
            <Button
              className="text-light fs-5 rounded-0"
              variant="dark"
              type="submit"
              onChange={(e) => e.preventDefault()}>
              Place order
            </Button>
          </Form>
        </Col>

        {/* Ỏdder */}
        <Col className="bg-light px-5 py-5" style={{ height: "fit-content" }}>
          <h4 className="mb-4 mt-2">YOUR ORDER</h4>
          {cart.items.map((item) => (
            <div
              key={item.id}
              className="d-flex justify-content-between align-items-center border-bottom pb-3 mb-3">
              <h6 className="mb-0">{item.name}</h6>
              <p className="text-secondary">
                {item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}{" "}
                VND x {item.quantity}
              </p>
            </div>
          ))}

          <div className="d-flex justify-content-between align-items-center mt-3 mb-4">
            <h6 className="mb-0">TOTAL</h6>
            <p className="fs-5 mb-0">
              {cart.totalAmount
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}{" "}
              VND
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default CheckoutPage;
