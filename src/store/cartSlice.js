import { createSlice } from "@reduxjs/toolkit";

//lấy dữ liệu từ local
const curCart = JSON.parse(localStorage.getItem("cart"));

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: curCart ? curCart.items : [],
    totalQuantity: curCart ? curCart.totalQuantity : 0,
    totalAmount: curCart ? curCart.totalAmount : 0,
    isChanged: false,
  },
  reducers: {
    addItemsToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;
      state.totalAmount = state.totalAmount + action.payload.price;
      state.isChanged = true;

      //check nếu k phải item hiện tại thì tạo mới với các giá trị sau
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          name: newItem.name,
          price: newItem.price,
          img: newItem.img,
          quantity: 1,
          totalPrice: newItem.price,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.totalQuantity--;
      state.totalAmount = state.totalAmount - action.payload.price;
      state.isChanged = true;

      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    },
    deleteItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.items = state.items.filter((item) => item.id !== id);
      state.totalQuantity = state.totalQuantity - existingItem.quantity;
      state.totalAmount = state.totalAmount - existingItem.price;
      state.isChanged = true;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
