import {
    LOGIN_USER,
    LOGIN_USER_ERROR,
    REGISTER_USER,
    REGISTER_USER_ERROR,
    CLEAR_USER_ERROR,
    LOADING_USER,
    CHECK_USERNAME_EXIST,
  } from '../types'
  import axios from 'axios'
  
  export const loginUser = (userData, history) => (dispatch) => {
    axios
      .post('http://localhost:5000/api/users/login', userData, { withCredentials: true },
      )
      .then((res) => {
        dispatch({ type: LOGIN_USER})
        dispatch({ type: CLEAR_USER_ERROR})
        history.push('/')
      })
      .catch((err) => {
        dispatch({
          type: LOGIN_USER_ERROR,
          payload: err.response.data.error,
        })
      })
  }
  
  export const registerUser = (newUserData, history) => (dispatch) => {
        dispatch({ type: LOADING_USER })

    axios
      .post('http://localhost:5000/api/users/register', newUserData, { withCredentials: true })
      .then((res) => {
        dispatch({ type: REGISTER_USER })
        dispatch({ type: CLEAR_USER_ERROR})
        history.push('/')
      })
      .catch((err) => {
        console.log(err)
        console.log(err.response)
        dispatch({
          type: REGISTER_USER_ERROR,
          payload: err.response.data.error,
        })
      })
  }

  export const checkUsernameExist = (username, history) => (dispatch) => {
    axios.post('http://localhost:5000/api/users/checkusername', {username})
    .then((res) => {
      console.log(res)
      dispatch({
        type : CHECK_USERNAME_EXIST,
        payload: res.data
      })
    })
    .catch((err) => {
      console.log(err)
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
