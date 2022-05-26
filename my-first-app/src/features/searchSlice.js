import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "./api/axios";
const DB_URL = "https://6525-197-238-7-226.ngrok.io"
const initialState = {
  items: [],
  status: null,
};


export const searchFetch = createAsyncThunk(
  "search/resultsFetch",
  async (query, { rejectWithValue }) => {
    const response = await axios.get(DB_URL + `/store/products/search/?q=${query}`
  );
    return rejectWithValue(response?.data);
  }
);

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
