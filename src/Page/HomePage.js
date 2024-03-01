import React from "react";
import Banner from "../Home/Banner";
import Categories from "../Home/Categories";
import Product from "../Home/Product";
import Other from "../Home/Other";
import Popup from "../Home/Popup";
import { useSelector } from "react-redux";

const HomePage = () => {
  const showPopup = useSelector((state) => state.ui.popupIsVisible);
  return (
    <>
      <Banner />
      <Categories />
      <Product />
      <Other />
      {showPopup && <Popup />}
    </>
  );
};
export default HomePage;
