import React from "react";
import { Container, Row, Col, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../store/cartSlice";
import { Link } from "react-router-dom";

//Trạng thái ban đầu của giỏ hàng
let initial = true;

const CartPage = () => {
  const dispatch = useDispatch();
  //lấy slice từ redux
  const cart = useSelector((state) => state.cart);

  return (
    <Container style={{ marginTop: 60 }}>
      <Row className="bg-light p-5 mb-5">
        <Col>
          <h2 className="mb-0 px-3 py-3">CART</h2>
        </Col>
        <Col className="justify-content-end d-flex align-items-center">
          <h6 className="text-secondary mb-0">CART</h6>
        </Col>
      </Row>
      <h4 className="mb-5">SHOPPING CART</h4>

      {/* List product */}
      <Row>
        <Col className="ps-0 pe-5" md={8}>
          <Table className="text-center mb-5 border-white align-middle">
            <thead className="table-light border-white align-middle">
              <tr>
                <th className="fw-semibold py-3">IMAGE</th>
                <th className="fw-semibold">PRODUCT</th>
                <th className="fw-semibold">PRICE</th>
                <th className="fw-semibold">QUANTITY</th>
                <th className="fw-semibold">TOTAL</th>
                <th className="fw-semibold">REMOVE</th>
              </tr>
            </thead>
            <tbody>
              {cart.items.map((item) => (
                <tr key={item.id}>
                  <td className="py-2">
                    <img src={item.img} alt={item.name} style={{ width: 60 }} />
                  </td>
                  <td className="fw-semibold">{item.name}</td>
                  <td className="text-secondary">
                    {item.price
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                    <br />
                    VND
                  </td>
                  <td className="fts-normal">
                    <button
                      type="button"
                      className="px-2 pe-3 caret border-0 bg-transparent"
                      onClick={() => {
                        dispatch(cartActions.removeItemFromCart(item.id));
                      }}>
                      <i className="fa fa-solid fa-caret-left"></i>
                    </button>

                    {item.quantity}
                    <button
                      type="button"
                      className="px-2 ps-3 caret border-0 bg-transparent"
                      onClick={() => {
                        dispatch(cartActions.addItemsToCart(item));
                      }}>
                      <i className="fa fa-solid fa-caret-right"></i>
                    </button>
                  </td>
                  <td>
                    {item.totalPrice
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                    <br />
                    VND
                  </td>
                  <td className="remove">
                    <i
                      className="fa fa-trash-can mt-3"
                      onClick={() =>
                        dispatch(cartActions.deleteItemFromCart(item.id))
                      }></i>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>

          {/* Phần dùng navigate */}
          {
            <div className="d-flex bg-light align-middle p-3 justify-content-between">
              <button
                className="btn btn-light border-0 rounded-0"
                type="button">
                <Link to="/shop" className="text-dark text-decoration-none">
                  <i className="fa fa-solid fa-arrow-left"></i>
                  &nbsp;&nbsp;Continue shopping
                </Link>
              </button>
              <button
                className="btn btn-light border-0 rounded-0"
                type="button">
                <Link to="/checkout" className="text-decoration-none text-dark">
                  Proceed to checkout&nbsp;&nbsp;
                  <i className="fa fa-solid fa-arrow-right"></i>
                </Link>
              </button>
            </div>
          }
        </Col>

        {/* Tổng giá trị giỏ hàng*/}
        <Col md={4} className="bg-light p-4" style={{ height: "fit-content" }}>
          <h5 className="">CART TOTAL</h5>
          <div className="d-flex justify-content-between align-items-center border-bottom pb-3">
            <h6 className="">SUBTOTAL</h6>
            <p className="">
              {cart.totalAmount
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}{" "}
              VND
            </p>
          </div>
          <div className="d-flex justify-content-between align-items-center mt-3 mp-4">
            <h6>TOTAL</h6>
            <p className="fs-5">
              {cart.totalAmount
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}{" "}
              VND
            </p>
          </div>
          <input
            type="text"
            className="w-100 pb-2"
            placeholder="Enter your coupon"
          />
          <button className="btn btn-dark w-100">
            <i className="fa fa-gift"></i>&nbsp;&nbsp;Apply coupon
          </button>
        </Col>
      </Row>
    </Container>
  );
};
export default CartPage;
