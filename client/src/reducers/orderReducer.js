import {
  SET_ORDERS,
  LOADING_ORDERS
} from '../types'
  
  const initialState = {
    orders: null,
    loading:false
  }
  
  export default function (state = initialState, action) {
    switch (action.type) {
        case SET_ORDERS :
          return{
            ...state,
            orders:action.payload,
            loading:false
          }
        case LOADING_ORDERS : 
          return{
            ...state,
            loading:true
          }
      default:
        return state
    }
  }