import {
    LOGIN_USER,
    LOGIN_USER_ERROR,
    REGISTER_USER,
    REGISTER_USER_ERROR,
    CLEAR_USER_ERROR,
    LOADING_USER,
    CHECK_USERNAME_EXIST,
    SET_USER,
    SET_LOGOUT,
    SET_LOGOUT_ERROR
  } from '../types'
  import axios from 'axios'
  
  export const loginUser = (userData, history) => (dispatch) => {
    axios
      .post('http://localhost:5000/api/users/login', userData, { withCredentials: true },
      )
      .then((res) => {
        dispatch({ 
          type: LOGIN_USER,
          payload: res.data
        })
        dispatch({ type: CLEAR_USER_ERROR})
        history.push('/')
      })
      .catch((err) => {
        console.log(err)
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
        dispatch({
          type: REGISTER_USER_ERROR,
          payload: err.response.data.error,
        })
      })
  }

  export const checkUsernameExist = (username, history) => (dispatch) => {
    axios.post('http://localhost:5000/api/users/checkusername', {username})
    .then((res) => {
      dispatch({
        type : CHECK_USERNAME_EXIST,
        payload: res.data
      })
    })
    .catch((e) => {
      console.log(e)
    })
  }

  export const setAuthenticated = () => (dispatch) => {
    dispatch({
      type: SET_USER
    })
  }
  export const setLogOut = () => (dispatch) => {
    dispatch({
      type: SET_LOGOUT
    })
  }

  
 export const checkLogin = () => (dispatch) => {
    dispatch({ type: LOADING_USER })
    return axios.get('http://localhost:5000/api/checkuserauth', {withCredentials : true})
     .then( (res)=>{
         dispatch({
           type:SET_USER,
           payload:res.data
          })
     })
     .catch( (err)=> {
         dispatch({
           type:SET_LOGOUT
         })
     })
}


export const logoutUser = () => (dispatch) => {
    return axios.delete('http://localhost:5000/api/users/logout', {withCredentials : true})
    .then( (res) => {
        dispatch({
          type:SET_LOGOUT
        })
    })
    .catch( (err) => {
        dispatch({
          type:SET_LOGOUT_ERROR,
          payload:err.response
        })
    })
}

