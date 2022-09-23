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

    deleteStoryAction: (state, action) => {
      //Creo este slice para el boton de borrar que pongo en MySpace para poder borrar una historia concreta
      const storyId = action.payload;
      state.space.stories = state.space.stories.filter(
        (story) => story.id !== storyId
      );
    },
  },
});

export const { loginSuccess, logOut, tokenStillValid, deleteStoryAction } =
  userSlice.actions;

export default userSlice.reducer;
