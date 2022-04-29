import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
//we're importing all the http requests from the service file
import authService from './authService'
//this is where we find all the reducers and the initial states 
// Get user from localStorage, jwt token, we parse it bcs local storage can only have strings
const user = JSON.parse(localStorage.getItem('user'))

const initialState = {
//if there's a user in local storage, use it, else it will be null
  user: user ? user : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
  //profile: profile ? profile : null,
  /*access: localStorage.getItem('access'),
  refresh: localStorage.getItem('refresh'),
  isAuthenticated: null,*/
}

// Register user
export const register = createAsyncThunk(
  'auth/register',
  async (user, thunkAPI) => {
    try {
      return await authService.register(user)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)



// Login user
export const login = createAsyncThunk('auth/login', async (user, thunkAPI) => {
  try {
    return await authService.login(user)
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString()
      //in case there is an error, the thunkAPI is gonna reject and pass in the error message as the payload
    return thunkAPI.rejectWithValue(message)
  }
})
//view profile
export const viewProfile = createAsyncThunk('users/uid', async (user, thunkAPI) => {
  try {
    return await authService.viewProfile(user)
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString()
      //in case there is an error, the thunkAPI is gonna reject and pass in the error message as the payload
    return thunkAPI.rejectWithValue(message)
  }
})
// post profile
export const postProfile  = createAsyncThunk('URL TA3 SENDING EL EL PROFILE', async (profile, thunkAPI) => {
  try {
    return await authService.postProfile(profile)
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString()
      //in case there is an error, the thunkAPI is gonna reject and pass in the error message as the payload
    return thunkAPI.rejectWithValue(message)
  }
})

//update profile
export const updateProfile = createAsyncThunk('users/update/uid', async (profile, thunkAPI) => {
  try {
    return await authService.updateProfile(profile)
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString()
      //in case there is an error, the thunkAPI is gonna reject and pass in the error message as the payload
    return thunkAPI.rejectWithValue(message)
  }
})
// verification 
export const verify = createAsyncThunk ('auth/verify', async (user, thunkAPI) => {
  try{
    return await authService.verify(user)
  }catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString()
      //in case there is an error, the thunkAPI is gonna reject and pass in the error message as the payload
    return thunkAPI.rejectWithValue(message) 

  }
})

export const logout = createAsyncThunk('auth/logout', async () => {
  await authService.logout()
})
//export const goog

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  //these reducers are gonna be synchronous, anything async goes in the extra reducers
  reducers: {
    //it's a function that sets all the values back to their initial state, aka, false after the user registers//
    //we're dispatching this function after the user logs in
    reset: (state) => {
      state.isLoading = false
      state.isSuccess = false
      state.isError = false
      state.message = ''
    }, 
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.user = action.payload
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        //so here the payload is the payload sent by the thunkAPI, it is the error message of the request, we're setting the message of the state as the error message
        state.message = action.payload
        state.user = null
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.user = action.payload
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        state.user = null
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null
      })
  },
})
//export the reducers we need 
export const { reset } = authSlice.actions
//we always have to export the slice itself
export default authSlice.reducer