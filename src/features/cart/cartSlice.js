import { createSlice } from "@reduxjs/toolkit";
import { getCartsFromLocal, removeCartsFromLocal, setCarts } from "../../hooks/localStorage";

export const cartSlice = createSlice({
  name: 'cartSlice',
  initialState: {
    carts: getCartsFromLocal()
  },

  reducers: {
    setToCarts: (state, action) => {
      const isExist = state.carts.find((cart) => cart._id === action.payload._id);
      if (!isExist) {
        state.carts.push(action.payload);
        setCarts(state.carts);
      } else {
        state.carts = state.carts.map((cart) => {
          return action.payload._id === cart._id ? action.payload : cart;

        });
        setCarts(state.carts);

      }

    },



    removecarts: (state, action) => {
      state.carts = [];
      removeCartsFromLocal();
    }
  }
});

export const { removecarts, setToCarts, updateCart } = cartSlice.actions