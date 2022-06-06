import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "./api/axios";

const initialState = {
  
 response:[],
 status:"",
 errors:"",
};

export const getFiltered = createAsyncThunk(
  "filter/getFiltered",
  async (values, thunkAPI) => {
    
      try {
        const response = await axios.get(`/store/products/?${values.collection_id}=&${values.unit_price_gt}=&${values.unit_price_lt}=`)
        return response.data;
      } catch (err) {
        return err.response.data;
      }

  }
);


const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getFiltered.pending, (state, action) => {
      return { ...state, status: "pending" };
    });
    builder.addCase(getFiltered.fulfilled, (state, action) => {
      if (action.payload) {
        return {
          ...state,
          response:action.payload,
          status:"success",
         
        };
      } else return state;
    });
    builder.addCase(getFiltered.rejected, (state, action) => {
      return {
        ...state,
        status: "rejected",
        response:[],
        error: action.payload,
      };
    });
  },
});

export default filterSlice.reducer;