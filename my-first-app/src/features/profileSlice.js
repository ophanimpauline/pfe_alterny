import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "./api/axios";

const token =  localStorage.getItem("access");
localStorage.setItem("token", token)
console.log(token)

const initialState = {
  //profile: profile ? profile : null,
  token: token ? token : null, 
  user: "",
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
        `/store/users/update/${values.uuid}`,
        {
          user: values.uuid,
          phone1: values.phone1,
          phone2: values.phone2,
          birthday: values.birthday,
          zipcode: values.zipcode,
          street: values.street,
          city: values.city,
        },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
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
  },
});

export default profileSlice.reducer;
