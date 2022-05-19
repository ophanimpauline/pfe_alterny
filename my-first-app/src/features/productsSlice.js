import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const DB_URL = "https://8b96-197-14-11-2.ngrok.io"
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
export const productsSearch = createAsyncThunk(
  "products/productsSearch",
  async(variables, thunkAPI) => {
    const response = await axios.get(`/store/products/search/?q=${variables}`);
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
    [productsSearch.pending]: (state, action) => {
      state.status = "pending";
    },
    [productsSearch.fulfilled]: (state, action) => {
      state.status = "success";
      state.items = action.payload;
    },
    [productsSearch.rejected]: (state, action) => {
      state.status = "rejected";

    },
  },
});

export default productsSlice.reducer;
