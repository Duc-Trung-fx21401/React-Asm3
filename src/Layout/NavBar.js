import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Nav, Container, Navbar } from "react-bootstrap";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaUser } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../store/uiSlice";

const NavBar = () => {
  // tạo điều hướng khi bấm nút
  const navigate = useNavigate();

  //gửi dữ liệu từ redux store
  const dispatch = useDispatch();

  //Lấy trạng thái login từ redux
  const isLogin = useSelector((state) => state.ui.isLogin);
  const onLoginUser = useSelector((state) => state.ui.onLoginUser);

  //Lấy trạng thái giỏ hàng từ redux
  const cart = useSelector((state) => state.cart);

  //Logout User
  const logoutHandler = () => {
    dispatch(
      uiActions.login({
        isLogin: false,
        onLoginUser: {},
      })
    );
    localStorage.removeItem("curUser");
    navigate("/");
  };

  return (
    <Container className="position-fixed bg-white navbar-container top-0 start-50">
      <Navbar variant="light" className="px-3 py-3 fw-semibold">
        <Nav className="me-auto">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-warning me-5 text-decoration-none"
                : "text-dark me-5 text-decoration-none"
            }>
            Home
          </NavLink>
          <NavLink
            to="/shop"
            className={({ isActive }) =>
              isActive
                ? "text-warning me-5 text-decoration-none"
                : "text-dark me-5 text-decoration-none"
            }>
            Shop
          </NavLink>
        </Nav>

        <NavLink to="/" className="fs-3 text-decoration-none text-dark">
          BOUTIQUE
        </NavLink>

        <Nav className="ms-auto mt-3">
          {/* Tạo icon */}
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              isActive
                ? "text-warning me-5 text-decoration-none"
                : "text-dark me-5 text-decoration-none"
            }>
            <AiOutlineShoppingCart className="fa-lg pt-1" />
            &nbsp;Cart
            {cart.totalQuantity > 0 && (
              <span className="px-2 rounded-pill bg-warning text-white fst-normal">
                {cart.totalQuantity}
              </span>
            )}
          </NavLink>
          {/* Tạo icon */}

          {!isLogin && (
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive
                  ? "text-warning text-decoration-none"
                  : "text-dark text-decoration-none"
              }>
              <p>
                <FaUser className="fa-lg pt-1" />
                Login
              </p>
            </NavLink>
          )}
          {isLogin && (
            <div>
              <h6 className="text-decoration d-inline-block me-3">
                <p>
                  <FaUser className="fa-lg pt-1" />
                  {onLoginUser.fullName}&nbsp;
                  <i className="fa fa-caret-down"></i>
                </p>
              </h6>
              <h6
                className="text-decoration-none d-inline-block"
                onClick={logoutHandler}>
                (Logout)
              </h6>
            </div>
          )}
        </Nav>
      </Navbar>
    </Container>
  );
};

export default NavBar;
