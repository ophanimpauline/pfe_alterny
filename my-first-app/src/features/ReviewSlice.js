import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "./api/axios";


const accessToken =  localStorage.getItem("access") ? localStorage.getItem("access") : null;
const current = new Date();


const initialState = {
  id: "",
  date:"",
  note: NaN,
  description: "",
  status: null,
};


export const sendReview = createAsyncThunk(
    "review/sendReview",
    async (review, { rejectWithValue }) => {
      try {
        const response = await axios.post(
          `/store/products/${review.id}/reviews/add`,
          {
            id: review.id,
            date:`${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`,
            note: review.note,
            description: review.description,
          },
          {headers: {'Authorization' : `JWT ${accessToken}` }}
        );
        console.log(response.data);
        return response.data;
      } catch (err) {
        console.log(err.response.data);
        if (!err?.response) {
          return "No Server Response";
        } else {
          return rejectWithValue(err.response.data);
        }
      }
    }
  );
export const sendStoreReview = createAsyncThunk(
    "review/sendStoreReview",
    async (review, { rejectWithValue }) => {
      try {
        const response = await axios.post(
          `/store/stores/${review.id}/reviews/add`,
          {
            id: review.id,
            date:`${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`,
            note: review.note,
            description: review.description,
          },
          {headers: {'Authorization' : `JWT ${accessToken}` }}
        );
        console.log(response.data);
        return response.data;
      } catch (err) {
        console.log(err.response.data);
        if (!err?.response) {
          return "No Server Response";
        } else {
          return rejectWithValue(err.response.data);
        }
      }
    }
  );


const reviewSlice = createSlice({
  name: "review",
  initialState,
  reducers: {},
  extraReducers: {
    [sendReview.pending]: (state, action) => {
      state.status = "pending";
    },
    [sendReview.fulfilled]: (state, action) => {
      state.status = "success";
      state.items = action.payload;
    },
    [sendReview.rejected]: (state, action) => {
      state.status = "rejected";
    },
  },
  extraReducers: {
    [sendStoreReview.pending]: (state, action) => {
      state.status = "pending";
    },
    [sendStoreReview.fulfilled]: (state, action) => {
      state.status = "success";
      state.items = action.payload;
    },
    [sendStoreReview.rejected]: (state, action) => {
      state.status = "rejected";
    },
  },
});


