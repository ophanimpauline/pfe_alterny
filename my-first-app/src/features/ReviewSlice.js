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

  export const updateProductReview = createAsyncThunk(
    "review/updateProductReview",
    async (values, { rejectWithValue }) => {
      try {
        
        const response = await axios.put(
          `/store/products/${values.id}/reviews/update/${values.reviewid}`,
          {
            id: values.reviewid,
            date:`${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`,
            note:"2",
            description:values.description,
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

 /* export const updateStoreReview = createAsyncThunk(
    "review/updateStoreReview",
    async (values, { rejectWithValue }) => {
      try {
        const response = await axios.put(
          `/store/users/update/${user}`,
          {
            
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
  );*/

  export const productReviewDestroy = createAsyncThunk(
    "review/productReviewDestroy",
    async (values, { rejectWithValue }) => {
      try {
        const response = await axios.delete(
          `/store/products/${values.id}/reviews/destroy/${values.reviewid}`,
          {headers: {'Authorization' : `JWT ${accessToken}` }}, {
            data: ""
          },
        );
        
        return response.data;
      } catch (err) {
       
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
    [updateProductReview.pending]: (state, action) => {
      state.status = "pending";
    },
    [updateProductReview.fulfilled]: (state, action) => {
      state.status = "success";
      state.items = action.payload;
    },
    [updateProductReview.rejected]: (state, action) => {
      state.status = "rejected";
    },
    [productReviewDestroy.pending]: (state, action) => {
      state.status = "pending";
    },
    [productReviewDestroy.fulfilled]: (state, action) => {
      state.status = "success";
      state.items = action.payload;
    },
    [productReviewDestroy.rejected]: (state, action) => {
      state.status = "rejected";
    },
  },
});


export default reviewSlice.reducer;