import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../store/uiSlice";
import { Link } from "react-router-dom";

function ProductList() {
  //Lấy dữ liệu từ redux store
  const products = useSelector((state) => state.fetch.data);
  const showCategory = useSelector((state) => state.ui.clickedCategory);

  //dispatch hành động từ redux store
  const dispatch = useDispatch();

  //Lọc những product sẽ được hiện khi click vào
  let filteredProducts = [];
  if (showCategory === "") {
    filteredProducts = products;
  } else {
    filteredProducts = products.filter(
      (prod) => prod.category === showCategory
    );
  }
  return (
    <Container className="mb-5 px-0">
      <Row>
        {/* Phần navbar */}
        <Col className="ps-0 pe-5 category" md={3}>
          <h4 className="mb-3">CATEGORIES</h4>
          <h5 className="ps-3 py-2 mb-3 bg-dark text-white">APPLE</h5>
          <h6
            className={`ps-3 mb-3 ${showCategory === "" ? "text-warning" : ""}`}
            // Click button thì sẽ đổi màu
            onClick={() => {
              dispatch(uiActions.category(""));
            }}>
            ALL
          </h6>
          <h5 className="ps-3 mb-3 py-2 bg-light">IPHONE & MAC</h5>
          <h6
            className={`ps-3 mb-3 ${
              showCategory === "iphone" ? "text-warning" : ""
            }`}
            onClick={() => {
              dispatch(uiActions.category("iphone"));
            }}>
            Iphone
          </h6>
          <h6
            className={`ps-3 mb-3 ${
              showCategory === "ipad" ? "text-warning" : ""
            }`}
            onClick={() => {
              dispatch(uiActions.category("ipad"));
            }}>
            Ipad
          </h6>
          <h6
            className={`ps-3 mb-3 ${
              showCategory === "macbook" ? "text-warning" : ""
            }`}
            onClick={() => {
              dispatch(uiActions.category("macbook"));
            }}>
            Macbook
          </h6>
          <h5 className="ps-3 mb-3 py-2 bg-light">WIRELESS</h5>
          <h6
            className={`ps-3 mb-3 ${
              showCategory === "airpod" ? "text-warning" : ""
            }`}
            onClick={() => {
              dispatch(uiActions.category("airpod"));
            }}>
            Airpod
          </h6>
          <h6
            className={`ps-3 mb-3 ${
              showCategory === "watch" ? "text-warning" : ""
            }`}
            onClick={() => {
              dispatch(uiActions.category("watch"));
            }}>
            Watch
          </h6>
          <h5 className="ps-3 mb-3 py-2 bg-light">OTHER</h5>
          <h6
            className={`ps-3 mb-3 ${
              showCategory === "mouse" ? "text-warning" : ""
            }`}
            onClick={() => {
              dispatch(uiActions.category("mouse"));
            }}>
            Mouse
          </h6>
          <h6
            className={`ps-3 mb-3 ${
              showCategory === "keyboard" ? "text-warning" : ""
            }`}
            onClick={() => {
              dispatch(uiActions.category("keyboard"));
            }}>
            Keyboard
          </h6>
          <h6
            className={`ps-3 mb-3 ${
              showCategory === "other" ? "text-warning" : ""
            }`}
            onClick={() => {
              dispatch(uiActions.category("other"));
            }}>
            Other
          </h6>
        </Col>

        {/* Phần hiển thị List sản phẩm trên category */}
        <Col className="pe-0">
          <Row className="mb-4">
            <Col className="px-0">
              <input
                type="text"
                placeholder="Enter Search Here!"
                className="py-3 ps-3 w-75"
              />
            </Col>
            <Col className="justify-content-end d-flex align-items-center">
              <select name="categories" className="w-50">
                <option value="default&sorting">Default sorting</option>
                <option value="iphone&mac">IPHONE & MAC</option>
                <option value="wireless">WIRELESS</option>
                <option value="other">OTHER</option>
              </select>
            </Col>
          </Row>

          {/* render danh sách sản phẩm được lọc ra trong category*/}

          <div className="d-grid gap-3 text-center productlist">
            {filteredProducts.map((prod) => (
              <div key={prod._id.$oid}>
                <Link
                  to={`/detail/${prod._id.$oid}`}
                  className="text-decoration-none">
                  <img src={prod.img1} alt={prod.name} className="w-100 mb-3" />
                  <h6 className="text-dark">{prod.name}</h6>
                </Link>
                <p className="text-secondary">
                  {prod.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}{" "}
                  VND
                </p>
              </div>
            ))}
          </div>

          {/* Phần prevew và next trang */}
          <Col className="d-flex flex-column align-items-end  justify-content-center">
            <div className="d-flex mb-2">
              <button
                type="button"
                className="btn btn-outline-secondary py-1 px-2 rounded-0">
                <i className="fa fa-angle-double-left fw-bold"></i>
              </button>
              <p className="mb-0 mx-1 bg-dark text-white py-1 px-3 fw-bold">
                1
              </p>
              <button
                type="button"
                className="btn btn-outline-secondary py-1 px-2 rounded-0">
                <i className="fa fa-angle-double-right fw-bold"></i>
              </button>
            </div>
            <p className="text-secondary">
              Showing{" "}
              {filteredProducts.length > 0
                ? `1+ ${filteredProducts.length} of ${filteredProducts.length}`
                : "0"}{" "}
              results
            </p>
          </Col>
        </Col>
      </Row>
    </Container>
  );
}

export default ProductList;
