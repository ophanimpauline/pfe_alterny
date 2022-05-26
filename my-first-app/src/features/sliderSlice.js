import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const DB_URL = "https://6525-197-238-7-226.ngrok.io"
const initialState = {
  items: [],
  status: null,
};
export const imagesFetch = createAsyncThunk(
  "slider/imagesFetch",
  async () => {
    const response = await axios.get(DB_URL + "/store/slide/", {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    });
    return response?.data;
  }
);

const imagesSlice = createSlice({
  name: "images",
  initialState,
  reducers: {},
  extraReducers: {
    [imagesFetch.pending]: (state, action) => {
      state.status = "pending";
    },
    [imagesFetch.fulfilled]: (state, action) => {
      state.status = "success";
      state.items = action.payload;
    },
    [imagesFetch.rejected]: (state, action) => {
      state.status = "rejected";

    },
  },
});

export default imagesSlice.reducer;
