import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "./api/axios";
const DB_URL = "https://b629-197-2-168-220.ngrok.io"
const initialState = {
  items: [],
  
  status: null,
  error:"",
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


export const productByCol = createAsyncThunk(
  "products/productByCol",
  async(collection_id, thunkAPI) => {
    try{
    const response = await axios.get( `/store/products/?${collection_id}=&unit_price_gt=&unit_price_lt=`);
    return response?.data;
    }catch(err){
      return err.response.data;
    }
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
    [productByCol.pending]: (state, action) => {
      state.status = "pending";
    },
    [productByCol.fulfilled]: (state, action) => {
      state.status = "success";
      state.items = action.payload;
    },
    [productByCol.rejected]: (state, action) => {
      state.status = "rejected";
      state.error= action.payload;

    },
  },
});

export default productsSlice.reducer;
