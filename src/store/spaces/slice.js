import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  spaces: [], //`this should be null`
  spaceDetails: {}, //`this should be null`
};

export const spaceSlice = createSlice({
  name: "space",
  initialState,
  reducers: {
    startLoading: (state) => {
      state.loading = true;
    },
    spacesFetched: (state, action) => {
      console.log("spacesFetched action", action);

      state.loading = false;
      state.spaces = action.payload;
    },
  },
});

export const { startLoading, spacesFetched } = spaceSlice.actions;

export default spaceSlice.reducer;
