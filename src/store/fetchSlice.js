import { createSlice } from "@reduxjs/toolkit";

const fetchSlice = createSlice({
  name: "fetch",
  initialState: {
    loading: false,
    data: [],
    error: "",
  },
  reducers: {
    loading(state) {
      state.loading = true;
    },
    success(state, action) {
      state.data = action.payload;
    },
    fail(state, action) {
      state.error = action.payload;
    },
  },
});

//export để có thể sử dụng fetchAction cho các thành phần khác
export const fetchActions = fetchSlice.actions;

const url =
  "https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74";

//thao tác fetch products data
export const fetchProductsData = () => {
  return async (dispatch) => {
    try {
      dispatch(fetchActions.loading());
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Không tìm thấy dữ liệu sản phẩm!");
      }

      const data = await response.json();

      //Lọc lấy 8 phần tử đầu tiên
      let filteredProducts = [];
      if (data.length > 8) {
        filteredProducts = data.slice(0, 8);
      } else filteredProducts = data;
      dispatch(fetchActions.success(filteredProducts));
    } catch (error) {
      dispatch(fetchActions.fail(error.message));
    }
  };
};

export default fetchSlice;
