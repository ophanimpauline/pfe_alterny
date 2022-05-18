import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../api/axios";
import jwtDecode from "jwt-decode";
//we save the token in the user variable
const user = localStorage.getItem("access");
const refresh = localStorage.getItem("refresh");
//check what the token is named
const initialState = {
  user: user ? user : null, // this variable has basic user data along with the token
  refresh: refresh ? refresh: null,
  first_name: "",
  last_name: "",
  username: "",
  type: "1",
  email: "",
  password: "",
  re_password: "",
  uuid: "" /*check if this is the name of id of the user */,
  registerStatus:
    "" /* this will either be pending, fullfilled or rejected, we use it to showcase errors if there are any*/,
  registerError: "",
  loginStatus:
    "" /* this will either be pending, fullfilled or rejected, we use it to showcase errors if there are any*/,
  loginError: "",
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
      
      console.log('hiiiiiii',response.data);
      return response.data ;
    } catch (err) {
      console.log('hello',err);
      return rejectWithValue(err.response.data);
    }
  }
);

/*export const getUser = createAsyncThunk(
  "auth/getUser",
  async (uuid, { rejectWithValue }) => {
    try {
      const response = await axios.get(`/${uuid}`, setHeaders());
      localStorage.setItem("user", response.data);
      return user.data;
    } catch (error) {
      console.log(error.response);
      return rejectWithValue(error.response.data);
    }
  }
);*/

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loadUser(state, action) {
      const token = state.user;
      console.log(token)
      if (token && token.access) {
        console.log(token)
        const values = jwtDecode(token.access);

        return {
          ...state,
          user,
          first_name: values.first_name,
          last_name: values.last_name,
          username: values.username,
          type: values.type,
          email: values.type,
          password: values.password,
          re_password: values.re_password,
          uuid: values.uuid,
          userLoaded: true,
        };
      } else return { ...state, userLoaded: true };
    },
    // we want after the register we want to reset the values
    logoutUser(state, action) {
      localStorage.removeItem("user");
      return {
        ...state,
        user: "",
        first_name: "",
        last_name: "",
        username: "",
        type: "",
        email: "",
        password: "",
        re_password: "",
        uuid: "",
        registerStatus: "",
        registerError: "",
        loginStatus: "",
        loginError: "",
        userLoaded: false,
      };
    },
  },
  extraReducers: (builder) => {
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
          uuid: user.uuid,
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
        const user = {first_name: 'h', last_name: 'h', username: 'user', email:'email', uuid:'uuid'}
        return {
          ...state,
          user: action.payload, 
          first_name: user.first_name,
          last_name: user.last_name,
          username: user.username,
          email: user.email,
          uuid: user.uuid,
          loginStatus: "success",
        };
      } else return state;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      return {
        ...state,
        loginStatus: "rejected",
        loginError: action.payload,
      };
    });
  },
});

export const { loadUser, logoutUser, reset } = authSlice.actions;
export default authSlice.reducer;
