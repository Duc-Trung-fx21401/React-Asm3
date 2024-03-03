import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import LoadSpinner from "../Layout/LoadSpinner";
import { cartActions } from "../store/cartSlice";

//Xác định trạng thái bạ đầu của giỏ hàng
let initial = true;
const DetailPage = () => {
  //dispatch action
  const dispatch = useDispatch();
  window.scroll(0, 0);
  //Lấy dữ liệu từ redux store
  const products = useSelector((state) => state.fetch.data);

  //Lấy thông tin giỏ hàng từ redux store
  const cart = useSelector((state) => state.cart);

  //update giỏ hàng khi có sự thay đổi
  useEffect(() => {
    if (initial) {
      initial = false;

      return;
    }
    if (cart.isChange) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  //Lấy productId từ URL router
  const params = useParams();
  //Tìm sản phẩm có Id tương ứng
  const product = products.find((prod) => prod._id.$oid === params.productId);

  const [activeImage, setActiveImage] = useState();
  const [activeDesc, setActiveDesc] = useState(true);

  //update lại Img khi reload page
  useEffect(() => {
    if (product) {
      setActiveImage(product.img1);
    }
  }, [product]);

  // Nếu k phải product thì tạo animation
  if (!product) {
    return (
      <div className="d-flex justify-content-center align-items-center">
        <LoadSpinner />
      </div>
    );
  }

  //Lọc các sản phẩm liên quan (cùng category và tìm id)
  const relatedProducts = products.filter(
    (prod) => prod.category === product.category
  );
  //tìm Id đó và hiển thị id tương tự
  const index = relatedProducts.findIndex(
    (prod) => prod._id.$oid === product._id.$oid
  );
  relatedProducts.splice(index, 1);

  return (
    <Container className="mb-5" style={{ marginTop: 150 }}>
      <Row className="my-5">
        {/* 4 img nhỏ  */}
        <Col className="detail-img">
          <img
            src={product.img1}
            alt={product.name}
            className="my-2 w-100"
            onClick={() => setActiveImage(product.img1)}
          />
          <img
            src={product.img2}
            alt={product.name}
            className="my-2 w-100"
            onClick={() => setActiveImage(product.img2)}
          />
          <img
            src={product.img3}
            alt={product.name}
            className="my-2 w-100"
            onClick={() => setActiveImage(product.img3)}
          />
          <img
            src={product.img4}
            alt={product.name}
            className="my-2 w-100"
            onClick={() => setActiveImage(product.img4)}
          />
        </Col>
        {/* img Chính */}

        <Col md={4}>
          <img src={activeImage} alt={product.name} className="w-100" />
        </Col>

        {/* Thông tin và giá cả */}

        <Col md={7} className="ps-5">
          <h1>{product.name}</h1>
          <p className="text-secondary fs-4 my-4">
            {product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} VND
          </p>
          <p className="text-secondary mb-4">{product.short_desc}</p>
          <h5 className="mb-4">
            CATEGORY :&nbsp;{" "}
            <span className="fw-normal text-secondary fs-6">
              {product.category}
            </span>
          </h5>
          <div className="d-inline-block border pe-2">
            <input
              type="text"
              placeholder="QUANTITY"
              className="border-0 ps-2"
              style={{ outline: 0 }}
            />
            <button
              type="button"
              className="px-2 caret border-0 bg-transparent">
              <i className="fa fa-solid fa-caret-left"></i>
            </button>
            <p className="mb-0 d-inline-block px-2 fst-normal py-1">1</p>
            <button
              type="button"
              className="px-2 caret border-0 bg-transparent">
              <i className="fa fa-solid fa-caret-right"></i>
            </button>
          </div>
          <button
            className="btn btn-dark rounded-0"
            onClick={() => {
              dispatch(
                cartActions.addItemsToCart({
                  id: product._id.$oid,
                  name: product.name,
                  price: Number(product.price),
                  img: product.img1,
                })
              );
            }}>
            Add to Cart!
          </button>
        </Col>
      </Row>
      <Row className="my-5 w-75">
        <Col className="mt-5">
          <button
            className=" btn btn-dark text-white p-3 rounded-0 mb-4"
            type="button"
            onClick={() => setActiveDesc(!activeDesc)}>
            DESCRIPTION
          </button>
          {activeDesc && (
            <>
              <h5>PRODUCT DESCRIPTION</h5>
              <p className="mt-4">{product.long_desc}</p>
            </>
          )}
        </Col>
      </Row>
      <Row className="my-5">
        <h5>RELATED PRODUCTS</h5>
        {relatedProducts.length > 0 &&
          relatedProducts.map((prod) => (
            <Col
              md={3}
              key={prod._id.$oid}
              className="text-center mt-3 related-products">
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
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default DetailPage;
