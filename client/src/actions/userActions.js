import {
    LOGIN_USER,
    LOGIN_USER_ERROR,
    REGISTER_USER,
    REGISTER_USER_ERROR,
    LOADING_UI
  } from '../types'
  import axios from 'axios'
  
  export const loginUser = (userData, history) => (dispatch) => {
    console.log(userData)
    axios
      .post('http://localhost:5000/api/users/login', userData, { withCredentials: true },
      )
      .then((res) => {
        console.log(res)
        dispatch({ type: LOGIN_USER})
        history.push('/')
      })
      .catch((err) => {
        console.log(err)
        dispatch({
          type: LOGIN_USER_ERROR,
          payload: err,
        })
      })
  }
  
  export const registerUser = (newUserData, history) => (dispatch) => {
        dispatch({ type: LOADING_UI })

    axios
      .post('http://localhost:5000/api/users/register', newUserData, { withCredentials: true })
      .then((res) => {
        console.log(res)

        dispatch({ type: REGISTER_USER })
        history.push('/')
      })
      .catch((err) => {
        dispatch({
          type: REGISTER_USER_ERROR,
          payload: err,
        })
      })
  }
  
//   export const logoutUser = () => (dispatch) => {
//     localStorage.removeItem('FBIdToken')
//     delete axios.defaults.headers.common['Authorization']
//     dispatch({ type: SET_UNAUTHENTICATED })
//   }
  
//   export const getUserData = () => (dispatch) => {
//     dispatch({ type: LOADING_USER })
//     axios
//       .get('/user')
//       .then((res) => {
//         dispatch({
//           type: SET_USER,
//           payload: res.data,
//         })
//       })
//       .catch((err) => console.log(err))
//   }
  
  
  // const setAuthorizationHeader = (token) => {
  //   const FBIdToken = `Bearer ${token}`
  
  //   localStorage.setItem('FBIdToken', FBIdToken)
  //   axios.defaults.headers.common['Authorization'] = FBIdToken
  // }