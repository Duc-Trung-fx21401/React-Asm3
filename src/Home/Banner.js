import { Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Banner = () => {
  return (
    <Container>
      <Container className="banner mb-5" style={{ marginTop: "3.9 rem" }}>
        <div className="banner-detail ms-5">
          <p className="text-secondary">New INSPIRATION 2020</p>
          <h2 className="mb-3">
            20% OFF ON NEW
            <br />
            SEASON
          </h2>
          <NavLink to="/shop">
            <button className="btn btn-dark rounded-0 text-light">
              Browse collections
            </button>
          </NavLink>
        </div>
      </Container>
    </Container>
  );
};

export default Banner;
