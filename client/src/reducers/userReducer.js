import {
    LOGIN_USER,
    LOGIN_USER_ERROR,
    REGISTER_USER,
    REGISTER_USER_ERROR,
    LOADING_UI
  } from '../types'
  
  const initialState = {
    authenticated: false,
    loading: false,
    error:{}
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
          error:action.payload,
        }
        case REGISTER_USER :
          return {
            ...state,
            loading:false
          }
        case REGISTER_USER_ERROR :
          return {
            ...state,
            loading:false
          }
        case LOADING_UI : 
          return{
            ...state,
            loading:true
          }
      default:
        return state
    }
  }