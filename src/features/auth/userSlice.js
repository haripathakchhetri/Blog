import { createSlice } from "@reduxjs/toolkit";
import { getUserFromLocal, removeUserFromLocal, setUser } from "../../hooks/localStorage";

export const userSlice = createSlice({

  name: 'userSlice',

  initialState: {
    user: getUserFromLocal()
  },


  reducers: {
    addUser: (state, action) => {
      state.user = action.payload;
      setUser(state.user);

    },

    removeUser: (state, action) => {
      state.user = null;
      removeUserFromLocal();

    }
  }
})


export const { addUser, removeUser } = userSlice.actions


//userSlice lai aba store ma wrap garnu paryo
//tespaxi

//Login.jsx ma onsubmit ma dispatch lagayerw addUser call garnu paryo. balla user ko detail local storage ma save hunxa