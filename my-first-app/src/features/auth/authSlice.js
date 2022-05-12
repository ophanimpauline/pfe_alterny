import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../api/axios";
import jwtDecode from "jwt-decode";
const token = JSON.parse(localStorage.getItem('token'));
//check what the token is named 
const initialState = {
  token: token ? token: null,
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
      const response = await axios.post("/auth/users/", {
        first_name: values.first_name,
        last_name: values.last_name,
        username: values.email,
        type: values.type,
        email: values.email,
        password: values.password,
        re_password: values.re_password,
      }, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });
      localStorage.setItem("user", response.data);
      console.log(response.data); //here we save the token to our local storage
      return response.data;
    } catch (err) {
      console.log(err.response.data);
      return rejectWithValue(err.response.data);
    }
  }
);

export const loginUser = createAsyncThunk('auth/loginUser', async(values, {rejectWithValue}) => {
  try {
    const response = await axios.post('', {
      email: values.email,
      password: values.password,
    });
    localStorage.setItem("user", response.data);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error.response);
    return rejectWithValue(error.response.data);
  }
} );

export const getUser = createAsyncThunk("auth/getUser", async(uuid, {rejectWithValue}) => {
  try{
    const response = await axios.get(`/${id}`, setHeaders());
    localStorage.setItem("user", response.data);
    return token.data;
  }catch(error){
    console.log(error.response);
    return rejectWithValue(error.response.data);
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loadUser(state, action){
      const token = state.token;
      if (token){
        const user = jwtDecode(token);
        return{
          ...state,
          token,
          first_name: user.first_name,
          last_name: user.last_name,
          username: user.username,
          type: user.type,
          email: user.type,
          password: user.password,
          re_password: user.re_password,
          uuid: user.uuid,
          userLoaded: true,
        };
      } else return {...state, userLoaded: true};
    },
    logoutUser(state, action){
      localStorage.removeItem("token");
      return {
        ...state,
        token,
        first_name: "",
        last_name: "",
        username: "",
        type: "",
        email: "",
        password: "",
        re_password: "",
        uuid: "",
        registerStatus: "",
        registerError:"",
        loginStatus:"",
        loginError:"",
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(registerUser.pending, (state, action) => {
      return { ...state, resgisterStatus: "pending" };
    });
    builder.addCase(registerUser.fulfilled, (state, action) => {
      if (action.payload) {
        //we are decoding the jwt that's given back from the action payload so we can update the values of the state with it
        const user = jwtDecode(action.payload);
        return {
          ...state,
          token: action.payload,
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
  },
});

export default authSlice.reducer;
