import { createSlice } from "@reduxjs/toolkit";

//lấy dữ liệu từ local
const curUser = JSON.parse(localStorage.getItem("curUser"));

//tạo slice để dùng cho giao diện Home
const uiSlice = createSlice({
  name: "ui",
  initialState: {
    popupIsVisible: false,
    clickedId: "",
    clickedCategory: "",
    // nếu curuser là đúng thì sẽ đăng nhập được
    isLogin: curUser ? true : false,
    onLoginUser: curUser || {},
    liveChatIsVisible: false,
  },
  reducers: {
    //nhận giá trị và trả về giá trị mới
    //tạo những trường riêng để sau này lấy ra trường tương ứng
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
      state.isLogin = action.payload.isLogin;
      state.onLoginUser = action.payload.onLoginUser;
    },
    livechat(state, action) {
      state.liveChatIsVisible = !state.liveChatIsVisible;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
