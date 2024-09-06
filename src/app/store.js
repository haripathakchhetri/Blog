import { configureStore } from "@reduxjs/toolkit";
import { productApi } from "../features/product/productApi";

import { userApi } from "../features/product/userApi";
import { userSlice } from "../features/auth/userSlice";
import { cartSlice } from "../features/cart/cartSlice";
import { orderApi } from "../features/order/orderApi";

export const store = configureStore({
  reducer: {

    [productApi.reducerPath]: productApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [orderApi.reducerPath]: orderApi.reducer,
    // [mealApi.reducerPath]: mealApi.reducer,

    [userSlice.name]: userSlice.reducer,
    [cartSlice.name]: cartSlice.reducer,


  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([
    productApi.middleware,
    userApi.middleware,
    orderApi.middleware
    // mealApi.middleware
  ])
})