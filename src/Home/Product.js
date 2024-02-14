import React from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../store/uiSlice";

function Product() {
  // gửi hành động tới redux
  const dispatch = useDispatch();
  //lấy dữ liệu sản phẩm từ kho Redux
  const products = useSelector((state) => state.fetch.data);
  return (
    <Container className="mb-5">
      <p className="text-secondary mb-0">MADE THE HARD WAY</p>
      <h4 className="mb-4">TOP TRENDING PRODUCTS</h4>
      <Container className="px-0 products">
        {/* render products data */}
        {products.map((prod) => (
          <div key={prod._id.$oid} className="text-center">
            <img
              src={prod.img1}
              alt={prod.name}
              className="d-block w-100 mb-3"
              onClick={() => {
                dispatch(
                  uiActions.popup({
                    popupIsVisible: true,
                    clickedId: prod._id.$oid,
                  })
                );
              }}
            />
            <h6>{prod.name}</h6>
            <p className="text-secondary">
              {prod.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} VND
            </p>
          </div>
        ))}
      </Container>
    </Container>
  );

  // return (
  //   <Container className="mb-5">
  //     <p className="text-secondary mb-0">MADE THE HARD WAY</p>
  //     <h4 className="">TOP TRENDING PRODUCTS</h4>
  //     <Container>
  //       {products.map((prod) => (
  //         <div key={prod._id.$oid} className="text-center">
  //           <img
  //             src={prod.img1}
  //             alt={prod.name}
  //             className="d-block w-100 mb-3"
  //             onClick={() => {
  //               dispatch(
  //                 uiActions.popup({
  //                   popupIsVisible: true,
  //                   clickedId: prod._id.$oid,
  //                 })
  //               );
  //             }}
  //           />
  //           <h6>{prod.name}</h6>
  //           {/* Chỉnh sang dạng đơn vị tiền việt */}
  //           <p className="">
  //             {prod.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}VND
  //           </p>
  //         </div>
  //       ))}
  //     </Container>
  //   </Container>
  // );
}

export default Product;
