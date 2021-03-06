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
    SET_LOGOUT_ERROR,
    GET_CART_LENGTH
  } from '../types'
  import axios from 'axios'
  
  export const loginUser = (userData, history) => (dispatch) => {
    axios
      .post('/api/users/login', userData, { withCredentials: true },
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
      .post('/api/users/register', newUserData, { withCredentials: true })
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
    axios.post('/api/users/checkusername', {username})
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
    dispatch({
      type: GET_CART_LENGTH,
      payload: {value: 0}
  })
  }

  
 export const checkLogin = () => (dispatch) => {
    dispatch({ type: LOADING_USER })
    try{
      return axios.get('/api/checkuserauth', {withCredentials : true})
      .then( (res)=>{
          dispatch({
            type:SET_USER,
            payload:res.data
           })
      })
      .catch( (err)=> {
          dispatch({
            type:SET_LOGOUT,
            payload:null
          })
      })
    }catch(e){
      return undefined
    }
    
}


export const logoutUser = (history) => (dispatch) => {
    return axios.delete('/api/users/logout', {withCredentials : true})
    .then( (res) => {
        dispatch({
          type:SET_LOGOUT
        })
        history.push('/')
    })
    .catch( (err) => {
        dispatch({
          type:SET_LOGOUT_ERROR,
          payload:err.response
        })
    })
}

