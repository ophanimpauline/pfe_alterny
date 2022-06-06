import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "./api/axios";
const DB_URL = "https://1dd8-102-158-81-86.ngrok.io"
const initialState = {
  items: [],
  status: null,
};


export const searchFetch = createAsyncThunk(
  "search/resultsFetch",
  async (query, { rejectWithValue }) => {
    try {
      const response = await axios.get(DB_URL + `/store/products/search/?q=${query}`);
      return response.data;
    } catch (err) {
return rejectWithValue(err.response.data);
      }
    } 
);

/*async (query, { rejectWithValue }) => {
    try {
      const response = await axios.get(DB_URL + `/store/products/search/?q=${query}`);
      return response.data;
    } catch (err) {
return rejectWithValue(err.response.data);
      }
    } */
const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {},
  extraReducers: {
    [searchFetch.pending]: (state, action) => {
      state.status = "pending";
    },
    [searchFetch.fulfilled]: (state, action) => {
      state.status = "success";
      state.items = action.payload;
    },
    [searchFetch.rejected]: (state, action) => {
      state.status = "rejected";

    },
  },
});

export default searchSlice.reducer;
