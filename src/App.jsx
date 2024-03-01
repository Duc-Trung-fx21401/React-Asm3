import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Page/HomePage";
import CartPage from "./Page/CartPage";
import ShopPage from "./Page/ShopPage";
import LoginPage from "./Page/LoginPage";
import CheckoutPage from "./Page/CheckoutPage";
import RegisterPage from "./Page/RegisterPage";
import Navbar from "./Layout/NavBar";
import Footer from "./Layout/Footer";
import ErrorPage from "./Page/ErrorPage";
import DetailPage from "./Page/DetailPage";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsData } from "./store/fetchSlice";
import IconChat from "./Home/IconChat";
import Livechat from "./Home/Livechat";

function App() {
  // dispatch action to redux
  const dispatch = useDispatch();

  //Lấy dữ liệu từ redux
  const showLiveChat = useSelector((state) => state.ui.liveChatIsVisible);
  //dispatch fetch product data action
  // khi load lần đầu thì sẽ fetch được productData
  useEffect(() => {
    dispatch(fetchProductsData(), [dispatch]);
  });
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="" element={<HomePage />} />
        <Route path="shop" element={<ShopPage />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="detail/:productId" element={<DetailPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="checkout" element={<CheckoutPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <IconChat />
      {showLiveChat && <Livechat />}
      <Footer />
    </>
  );
}

export default App;
