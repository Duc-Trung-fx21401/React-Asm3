import React from "react";
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

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/detail/:productId" element={<DetailPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
