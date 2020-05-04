import {
    LOGIN_USER,
    LOGIN_USER_ERROR,
    REGISTER_USER,
    REGISTER_USER_ERROR,
    LOADING_USER,
    CLEAR_USER_ERROR,
    CHECK_USERNAME_EXIST,
  } from '../types'
  
  const initialState = {
    authenticated: false,
    loading: false,
    error:{
      login:null,
      register: null
    },
    usernameExist: false
  }
  
  export default function (state = initialState, action) {
    switch (action.type) {
      case LOGIN_USER :
        return {
          ...state,
          authenticated: true,
          loading:false
        }
      case LOGIN_USER_ERROR : 
        return{
          ...state,
          loading:false,
          error:{
            ...state.error,
            login: action.payload
          }
        }
        case REGISTER_USER :
          return {
            ...state,
            loading:false
          }
        case REGISTER_USER_ERROR :
          return {
            ...state,
            loading:false,
            error:{
              ...state.error,
              register: action.payload
            }
          }
        case LOADING_USER : 
          return{
            ...state,
            loading:true
          }
        case CLEAR_USER_ERROR : 
          return{
            ...state,
            error: {
              user: null,
              register: null
            }
          }
        case CHECK_USERNAME_EXIST :
          return{
            ...state,
            usernameExist: action.payload
          }
      default:
        return state
    }
  }