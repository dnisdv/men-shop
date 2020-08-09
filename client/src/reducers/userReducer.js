import {
    LOGIN_USER,
    LOGIN_USER_ERROR,
    REGISTER_USER,
    REGISTER_USER_ERROR,
    LOADING_USER,
    CLEAR_USER_ERROR,
    CHECK_USERNAME_EXIST,
    SET_USER,
    SET_LOGOUT,
    SET_LOGOUT_ERROR
  } from '../types'
  
  const initialState = {
    authenticated: false,
    loading: false,
    preloader : true,
    user: null,
    error:{
      login:null,
      register: null,
      logout: null
    },
    usernameExist: false
  }
  
  export default function (state = initialState, action) {
    switch (action.type) {
      case LOGIN_USER :
        return {
          ...state,
          authenticated: true,
          loading:false,
          user: action.payload
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
        case SET_USER : 
          return{
            ...state,
            authenticated:true,
            user:action.payload,
            loading:false,
            preloader:false
          }
        case SET_LOGOUT :
          return{
            ...state,
            authenticated:false,
            loading:false,
            preloader:false
          }
        case SET_LOGOUT_ERROR : 
          return{
            ...state,
            loading:false,
            error:{
              ...state.error,
              logout: action.payload,
              preloader:false
            }
          }
        case CLEAR_USER_ERROR : 
          return{
            ...state,
            loading:false,
            error: {
              user: null,
              register: null
            }
          }
        case CHECK_USERNAME_EXIST :
          return{
            ...state,
            loading:false,
            usernameExist: action.payload
          }
      default:
        return state
    }
  }