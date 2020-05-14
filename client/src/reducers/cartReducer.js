import {
    ADD_TOCART,
    DELETE_FROMCART,
    LOADING_CART
  } from '../types'
  
  const initialState = {
    loading:false,
  }
  
  export default function (state = initialState, action) {
    switch (action.type) {
      case ADD_TOCART :
        return {
          ...state,
          loading:false,
        }
    case LOADING_CART :
        return{
            ...state,
            loading:true
        }
      default:
        return state
    }
  }