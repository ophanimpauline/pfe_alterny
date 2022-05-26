import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const DB_URL = "https://6525-197-238-7-226.ngrok.io";
const initialState = {
  items: [],
  status: null,
};
export const categoriesFetch = createAsyncThunk(
  "categories/categoriesFetch",
  async () => {
    const response = await axios.get(DB_URL + "/store/collections/");
    return response?.data;
  }
);

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: {
    [categoriesFetch.pending]: (state, action) => {
      state.status = "pending";
    },
    [categoriesFetch.fulfilled]: (state, action) => {
      state.status = "success";
      state.items = action.payload;
    },
    [categoriesFetch.rejected]: (state, action) => {
      state.status = "rejected";

    },
  },
});
export default categoriesSlice.reducer;