import {
    GET_BANNERS,
    GET_BANNERS_ERROR,
    LOADING_BANNERS
  } from '../types'
  
  const initialState = {
    loading:false,
    banners: null,
    error: null
  }
  
  export default function (state = initialState, action) {
    switch (action.type) {
      case GET_BANNERS :
        return {
          ...state,
          loading:false,
          banners:action.payload,
          error:null
        }
      case LOADING_BANNERS : 
        return{
          ...state,
          loading:true,
        }
        case GET_BANNERS_ERROR : 
        return{
          ...state,
          loading:true,
          error:action.payload
        }
      default:
        return state
    }
  }