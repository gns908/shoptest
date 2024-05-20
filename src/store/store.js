import { configureStore } from "@reduxjs/toolkit";

import user from "./userStore";
import stock from "./stockStore";
import cart from "./cartStore";
import products from "./productStore";

export const store = configureStore({
  reducer: {
    user: user.reducer,
    stock: stock.reducer,
    cart: cart.reducer,
    products: products.reducer,
  },
});
