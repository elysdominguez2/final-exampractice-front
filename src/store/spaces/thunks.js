import axios from "axios";
import { startLoading, spacesFetched, spacesFetchedById } from "./slice";

const API_URL = `http://localhost:4000`;

export const fetchSpaces = () => async (dispatch, getState) => {
  try {
    dispatch(startLoading());
    const response = await axios.get(`${API_URL}/spaces`);
    // console.log("response", response);
    const spaces = response.data;
    dispatch(spacesFetched(spaces));
  } catch (e) {
    console.log(e.message);
  }
};

export const fetchSpacesById = (id) => async (dispatch, getState) => {
  try {
    dispatch(startLoading());
    const response = await axios.get(`${API_URL}/spaces/${id}`);
    console.log("response one space", response);
    const space = response.data;
    dispatch(spacesFetchedById(space));
  } catch (e) {
    console.log(e.message);
  }
};
