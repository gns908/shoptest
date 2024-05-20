import { createSlice } from "@reduxjs/toolkit";

// 로컬스토리지에 cartData가 있으면 가져오고 없으면 빈배열을 가져온다.
let cartData = localStorage.getItem("cartData")
  ? JSON.parse(localStorage.getItem("cartData"))
  : [];

let cart = createSlice({
  name: "cart",
  initialState: cartData,
  reducers: {
    // 장바구니에서 수량이 증가할 때
    addCount(state, action) {
      let num = state.findIndex((item) => item.id === action.payload);
      state[num].count++;
      localStorage.setItem("cartData", JSON.stringify(state));
    },
    // 장바누기에서 수량이 감소할 때
    minusCount(state, action) {
      let num = state.findIndex((item) => item.id === action.payload);
      state[num].count--;
      localStorage.setItem("cartData", JSON.stringify(state));
    },

    // 장바구니의 아이쳄 삭제하기
    delItem(state, action) {
      let num = state.findIndex((item) => item.id === action.payload);
      state.splice(num, 1);
      localStorage.setItem("cartData", JSON.stringify(state));
    },

    // 장바구니에 아이템 추가하기
    addItem(state, action) {
      let num = state.findIndex((item) => item.id === action.payload.id);
      if (num === -1) state.push(action.payload);
      if (num !== -1) state[num].count += action.payload.count;
      localStorage.setItem("cartData", JSON.stringify(state));
    },
  },
});

export const { addCount, minusCount, delItem, addItem } = cart.actions;
export default cart;
