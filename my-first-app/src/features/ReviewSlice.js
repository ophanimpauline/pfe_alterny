import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "./api/axios";
const DB_URL = "https://6525-197-238-7-226.ngrok.io"

/*const token =  localStorage.getItem("access");
localStorage.setItem("token", token);*/


const initialState = {
  id: "",
  note: NaN,
  description: "",
  status: null,
};


/*export const sendReview = createAsyncThunk(
    "review/sendReview",
    async (review, { rejectWithValue }) => {
      try {
        const response = await axios.post(
          `/store/products/${review.id}/reviews/add`,
          {
            note: review.note,
            description: review.description,
          },
          {headers: {'Authorization' : `JWT ${token}` }}
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
/*export const updateReview = createAsyncThunk(
    "review/sendReview",
    async (review, { rejectWithValue }) => {
      try {
        const response = await axios.post(
          `/store/products/${review.id}/reviews/add`,
          {
            note: review.note,
            description: review.description,
          },
          {headers: {'Authorization' : `JWT ${token}` }}
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
});*/


