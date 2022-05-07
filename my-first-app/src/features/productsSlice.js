import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const DB_URL = "https://1fce-197-0-23-87.ngrok.io";
const initialState = {
  items: [],
  status: null,
};
export const productsFetch = createAsyncThunk(
  "products/productsFetch",
  async () => {
    const response = await axios.get(DB_URL + "/store/products/");
    return response?.data;
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: {
    [productsFetch.pending]: (state, action) => {
      state.status = "pending";
    },
    [productsFetch.fulfilled]: (state, action) => {
      state.status = "success";
      state.items = action.payload;
    },
    [productsFetch.rejected]: (state, action) => {
      state.status = "rejected";

    },
  },
});

export default productsSlice.reducer;
