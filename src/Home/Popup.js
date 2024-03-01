import React from "react";
import ReactDOM from "react-dom";
import { Row, Col } from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../store/uiSlice";
import { Link } from "react-router-dom";

function Popup() {
  //Lấy dữ liệu từ Redux store
  const products = useSelector((state) => state.fetch.data);
  const showId = useSelector((state) => state.ui.clickedId);

  //dispatch action to Redux
  const dispatch = useDispatch();

  //Tắt popup
  const turnOffPopupHandler = () => {
    dispatch(
      uiActions.popup({
        popupIsVisible: false,
        clickedId: "",
      })
    );
  };
  //Tìm kiếm và hiện riêng sản phẩm đó lên
  const product = products.find((prod) => prod._id.$oid === showId);

  return (
    <>
      {/* Hiện backdrop của popup */}
      {/* Tạo 1 component riêng trong index.html để khi click bên ngoài popup thì vẫn có thể đóng popup đó */}
      {ReactDOM.createPortal(
        <div
          className="position-fixed top-0 start-0 backdrop w-100"
          onClick={turnOffPopupHandler}
        />,
        document.getElementById("backdrop-root")
      )}

      {/* Hiện popup */}
      {ReactDOM.createPortal(
        <Row className="position-fixed top-50 start-50 mx-auto p-4 bg-white w-75 overlay">
          <Col>
            <img src={product.img1} alt={product.name} className="w-100" />
          </Col>
          <Col>
            <div className="d-flex justify-content-end align-items-center">
              <h6
                className="fs-5 p-2 text-secondary mb-4 fst-normal"
                onClick={turnOffPopupHandler}>
                x
              </h6>
            </div>
            <h4>{product.name}</h4>
            <p className="text-secondary">
              {product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}{" "}
              VND
            </p>
            <p className="text-secondary">{product.short_desc}</p>
            <Link
              // click vào button sẽ được chuyển đến trang detail:id tương ứng
              to={`detail/${product._id.$oid}`}
              className="text-decoration-none">
              <button className="btn btn-dark text-light px-4 rounded-0">
                <i class="fa-solid fa-cart-shopping"></i>&nbsp;&nbsp;View Detail
              </button>
            </Link>
          </Col>
        </Row>,
        document.getElementById("overlay-root")
      )}
    </>
  );
}

export default Popup;
