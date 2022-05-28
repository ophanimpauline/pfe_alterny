import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const DB_URL = "https://8f0a-197-14-11-2.ngrok.io"
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

/*export const productsSearch = createAsyncThunk(
  "products/productsSearch",
  async(variables, thunkAPI) => {
    const response = await axios.get(`/store/products/search/?q=${variables}`);
    return response?.data;
  }

);*/

export const productDetail = createAsyncThunk(
  "products/productDetail",
  async(id, thunkAPI) => {
    const response = await axios.get(DB_URL + `/store/products/${id}`);
    return response?.data;
  }
);

export const productBySubCollection = createAsyncThunk(
  "products/productBySubCollection",
  async(values, { rejectWithValue }) => {
    const response = await axios.get(`/store/subcollections/11`);
    return rejectWithValue(response.data);
  }
)

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
    [productDetail.pending]: (state, action) => {
      state.status = "pending";
    },
    [productDetail.fulfilled]: (state, action) => {
      state.status = "success";
      state.items = action.payload;
    },
    [productDetail.rejected]: (state, action) => {
      state.status = "rejected";

    },
    [productBySubCollection.pending]: (state, action) => {
      state.status = "pending";
    },
    [productBySubCollection.fulfilled]: (state, action) => {
      state.status = "success";
      state.items = action.payload;
    },
    [productBySubCollection.rejected]: (state, action) => {
      state.status = "rejected";

    },
  },
});

export default productsSlice.reducer;
