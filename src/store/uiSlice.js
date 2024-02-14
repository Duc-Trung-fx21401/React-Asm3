import { createSlice } from "@reduxjs/toolkit";

const curUser = JSON.parse(localStorage.getItem("curUser"));

//tạo slice để dùng cho giao diện Home
const uiSlice = createSlice({
  name: "ui",
  initialState: {
    popupIsVisible: false,
    clickedId: "",
    clickedCategory: "",
    IsLogin: curUser ? true : false,
    onLoginUser: curUser || {},
  },
  reducers: {
    //nhận 2 giá trị và trả về giá trị mới
    //tạo những trường riêng để sau này lấy ra
    //Trường popup
    popup(state, action) {
      state.popupIsVisible = action.payload.popupIsVisible;
      state.clickedId = action.payload.clickedId;
    },
    //Trường category
    category(state, action) {
      state.clickedCategory = action.payload;
    },
    // Trường login
    login(state, action) {
      state.IsLogin = action.payload.IsLogin;
      state.onLoginUser = action.payload.onLoginUser;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
