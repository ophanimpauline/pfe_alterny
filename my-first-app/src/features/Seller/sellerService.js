import axios from 'axios';
const DB_URL = 'https://d133-197-2-0-77.ngrok.io'
//this is a file for all the http requests, it isn't obligatory to divide them

// Register user
const register = async (userData) => {
  //putting the response of the server inside a response obj
  const response = await axios.post(DB_URL + '/auth/users/', userData)
  //if there is a data sent back from the server then stringigy the user to be able to put it in our local storage
  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }

  return response.data
}

// Login user
const login = async (userData) => {
  const response = await axios.post(DB_URL  + '/auth/jwt/create/', userData)

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }

  return response.data
}
//const verify = async (uid, user) => {
  //const response= await axios.post(DB_URL + '/auth/users/activation/', user)
 // if ()
//}

// Logout user
const logout = () => {
  localStorage.removeItem('user')
}

//any functions we're gonna create and we want to export we put in this authservice obj that will be exported fard mara f ekher el file
const authService = {
  register,
  logout,
  login,
}

export default authService