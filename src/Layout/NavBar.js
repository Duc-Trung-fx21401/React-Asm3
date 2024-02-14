import React from "react";
import { NavLink } from "react-router-dom";
import { Nav, Container, Navbar } from "react-bootstrap";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaUser } from "react-icons/fa6";

const NavBar = () => {
  // const navigate = useNavigate();

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

        <NavLink to="/" className="fs-5 text-decoration-none text-dark">
          BOUTIQUE
        </NavLink>

        <Nav className="ms-auto">
          {/* Tạo icon */}
          <AiOutlineShoppingCart className="fa-lg" />
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              isActive
                ? "text-warning me-5 text-decoration-none"
                : "text-dark me-5 text-decoration-none"
            }>
            Cart
          </NavLink>
          {/* Tạo icon */}
          <FaUser className="fa-lg" />
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive
                ? "text-warning me-5 text-decoration-none"
                : "text-dark me-5 text-decoration-none"
            }>
            Login
          </NavLink>
        </Nav>
      </Navbar>
    </Container>
  );
};

export default NavBar;
