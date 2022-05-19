import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import jwtDecode from "jwt-decode";
import axios from "./api/axios";
//we create a constant named token that receives the access token from the local storage
const token =  localStorage.getItem("access");
//we set an item in the local storage named token that has that value
localStorage.setItem("token", token)
// we create an object user that receives the user_id, after decoding the token 
const user = jwtDecode(token).user_id


const initialState = {
  token: token ? token : null, 
  user: user ? user : null ,
  phone1: "",
  phone2: "",
  birth_date: "",
  zipcode: "",
  street: "",
  city: "",
  profileStatus: "",
  profileError: "",
  profileLoaded: false,
};

export const updateProfile = createAsyncThunk(
  "profile/updateProfile",
  async (values, { rejectWithValue }) => {
    try {
      const response = await axios.put(
        `/store/users/update/${user}`,
        {
          user: user,
          phone1: values.phone1,
          phone2: values.phone2,
          birthday: values.birthday,
          zipcode: values.zipcode,
          street: values.street,
          city: values.city,
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

export const getProfile = createAsyncThunk(
  "profile/getProfile",
  async () => {
    try {
      const response = await axios.get("/store/customers/me", {headers: {'Authorization' : `JWT ${token}` }})
      //localStorage.setItem("profile", response.data)
      return response.data;
    } catch (err) {
      return err.response.data;
    }
  }
);


const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(updateProfile.pending, (state, action) => {
      return { ...state, profileStatus: "pending" };
    });
    builder.addCase(updateProfile.fulfilled, (state, action) => {
      if (action.payload) {
        return {
          ...state,
          phone1: action.payload.phone1,
          phone2: action.payload.phone2,
          birth_date: action.payload.birth_date,
          zipcode: action.payload.zipcode,
          street: action.payload.street,
          city: action.payload.city,
          profileStatus: "success",
          profileLoaded:"true"
        };
      } else return state;
    });
    builder.addCase(updateProfile.rejected, (state, action) => {
      return {
        ...state,
        profileStatus: "rejected",
        profileError: action.payload,
      };
    });
    builder.addCase(getProfile.pending, (state, action) => {
      return { ...state, profileStatus: "pending" };
    });
    builder.addCase(getProfile.fulfilled, (state, action) => {
      if (action.payload) {
        return {
          ...state,
          phone1: action.payload.phone1,
          phone2: action.payload.phone2,
          birth_date: action.payload.birth_date,
          zipcode: action.payload.zipcode,
          street: action.payload.street,
          city: action.payload.city,
          profileStatus: "success",
          profileLoaded:"true"
        };
      } else return state;
    });
    builder.addCase(getProfile.rejected, (state, action) => {
      return {
        ...state,
        profileStatus: "rejected",
        profileError: action.payload,
      };
    });
  },
});

export default profileSlice.reducer;
