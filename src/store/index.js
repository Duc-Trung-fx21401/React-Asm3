import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./uiSlice";
import fetchSlice from "./fetchSlice";

// Tạo kho lưu trữ để truyền dữ liệu
const store = configureStore({
  reducer: {
    fetch: fetchSlice.reducer,
    ui: uiSlice.reducer,
  },
});

export default store;
