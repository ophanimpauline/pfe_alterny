import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../api/axios";
import jwtDecode from "jwt-decode";
import { useSelector } from "react-redux";
//we save the token in the user variable
//const user = localStorage.getItem("access");
const refresh = localStorage.getItem("refresh");
const accessToken = localStorage.getItem("access");
const user = localStorage.getItem("access")
  ? jwtDecode(localStorage.getItem("access")).user_id
  : null;
console.log("auth", user);
//check what the token is named
const initialState = {
  user: user ? user : null, // this variable has basic user data along with the token
  refresh: refresh ? refresh : null,
  first_name: "",
  last_name: "",
  username: "",
  type: "1",
  email: "",
  password: "",
  re_password: "",
  birth_date: "",
  city: "",
  phone1: "",
  phone2: "",
  street: "",
  user_id: "",
  zipcode: "",
  registerStatus:
    "" /* this will either be pending, fullfilled or rejected, we use it to showcase errors if there are any*/,
  registerError: "",
  loginStatus: "",
  loginError: "",
  profileStatus: "",
  profileError: "",
  userLoaded: false,
};
/*remarque: we will be getting the username and password
as payload from our token */
/**here we're sending the values necessary to create a user and what we get back is a token, so we store the response of this request in a const named token */
export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (values, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "/auth/users/",
        {
          first_name: values.first_name,
          last_name: values.last_name,
          username: values.email,
          type: values.type,
          email: values.email,
          password: values.password,
          re_password: values.re_password,
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
      } else if (err.response?.status === 400) {
        return "Cet email est déjà utilisé!";
      } else {
        return rejectWithValue(err.response.data);
      }
    }
  }
);

export const getMe = createAsyncThunk(
  "auth/getMe",
  async (values, { rejectWithValue }) => {
    console.log(accessToken);
    if (accessToken) {
      try {
        const response = await axios.get("/store/customers/me", {
          headers: { Authorization: `JWT ${accessToken}` },
        });
        //localStorage.setItem("profile", response.data)
        if (response.data) {
          // const auth = useSelector((state) => state.auth);
          // auth.loginStatus = 'success'
        }
        return response.data;
      } catch (err) {
        return err.response.data;
      }
    }
    return rejectWithValue("not logged in");
  }
);

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (values, { rejectWithValue }) => {
    try {
      const response = await axios.post("/auth/jwt/create/", {
        email: values.email,
        password: values.password,
      });
      localStorage.setItem("access", response.data.access);
      localStorage.setItem("refresh", response.data.refresh);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loadUser(state, action) {
      const token = state.user;
      console.log(token);
      if (token && token.access) {
        console.log(token);
        const values = jwtDecode(token.access);

        return {
          ...state,
          user,
          first_name: jwtDecode(token.access).first_name,
          last_name: values.last_name,
          username: values.username,
          type: values.type,
          email: values.type,
          password: values.password,
          re_password: values.re_password,
          userLoaded: true,
        };
      } else return { ...state, userLoaded: true };
    },
    // we want after the register we want to reset the values
    logoutUser(state, action) {
      localStorage.removeItem("access");
      localStorage.removeItem("refresh");
      return {
        ...state,
        user: "",
        last_name: "",
        username: "",
        type: "1",
        email: "",
        password: "",
        re_password: "",
        birth_date: "",
        city: "",
        phone1: "",
        phone2: "",
        street: "",
        user_id: "",
        zipcode: "",
        registerStatus: "",
        registerError: "",
        loginStatus: "",
        loginError: "",
        profileStatus: "",
        profileError: "",
        userLoaded: false,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getMe.pending, (state, action) => {
      return { ...state, profileStatus: "pending" };
    });
    builder.addCase(getMe.fulfilled, (state, action) => {
      if (action.payload) {
        return {
          ...state,
          user: action.payload,
          birth_date: action.payload.birth_date,
          city: action.payload.city,
          phone1: action.payload.phone1,
          phone2: action.payload.phone2,
          street: action.payload.street,
          user_id: action.payload.user,
          zipcode: action.payload.zipcode,
          loginStatus: "success",
          profileStatus: "success",
          userLoaded: "true"
        };
      } else return state;
    });
    builder.addCase(getMe.rejected, (state, action) => {
      return {
        ...state,
        profileStatus: "rejected",
        profileError: action.payload,
      };
    });
    builder.addCase(registerUser.pending, (state, action) => {
      return { ...state, resgisterStatus: "pending" };
    });
    builder.addCase(registerUser.fulfilled, (state, action) => {
      if (action.payload) {
        return {
          ...state,
          user: action.payload,
          first_name: user.first_name,
          last_name: user.last_name,
          username: user.username,
          email: user.email,
          registerStatus: "success",
        };
      } else return state;
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      return {
        ...state,
        registerStatus: "rejected",
        registerError: action.payload,
      };
    });
    builder.addCase(loginUser.pending, (state, action) => {
      return { ...state, loginStatus: "pending" };
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      if (action.payload) {
        return {
          ...state,
          user: action.payload,
          first_name: user.first_name,
          last_name: user.last_name,
          username: user.username,
          email: user.email,
          loginStatus: "success",
          userLoaded:"true",
        };
      } else return state;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      return {
        ...state,
        loginStatus: "rejected",
        loginError: action.payload,
        userLoaded:"false",
      };
    });
  },
});

export const { loadUser, logoutUser, reset } = authSlice.actions;
export default authSlice.reducer;
