import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: localStorage.getItem("token"),
  profile: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      localStorage.setItem("token", action.payload.token);
      state.token = action.payload.token;
      state.profile = action.payload.user;
      state.space = action.payload.space; // ponemos esto para mostrarr el space cuando estas login
    },
    logOut: (state, action) => {
      localStorage.removeItem("token");
      state.token = null;
      state.profile = null;
      state.space = null; //Agrego esto para BORRAR EL SPACE CUANDO ME DESLOGUEO.
    },
    tokenStillValid: (state, action) => {
      state.profile = action.payload.user;
    },
  },
});

export const { loginSuccess, logOut, tokenStillValid } = userSlice.actions;

export default userSlice.reducer;
