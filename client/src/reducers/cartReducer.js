import {
    GET_CART,
    DELETE_FROMCART,
    LOADING_CART,
    LOADING_CART_ACTIONS,
    GET_CART_ERROR,
    GET_CART_LENGTH,
    DELETE_ONEPRODUCT,
    ADD_TOCART
  } from '../types'
  
  const initialState = {
    items:null,
    error:null,
    cartLength: null,
    loading:{
      cart:false,
      cartActions: false
    },
    TotalPrice :null,
    ShippPrice: null,
    Total: null
  }
  
  export default function (state = initialState, action) {
    switch (action.type) {
      case GET_CART :
        return {
          ...state,
          items:action.items,
          TotalPrice: action.TotalPrice,
          ShippPrice: action.ShippPrice,
          Total: action.Total,
          loading:{
            ...state.loading,
            cart:false,
            cartActions:false
          },
        }
      case GET_CART_ERROR :
        return{
          ...state,
          error:action.payload,
          items: null,
          TotalPrice :null,
          loading: {
            ...state.loading,
            cart:false
          }
        }
    case LOADING_CART :
        return{
            ...state,
            loading:{
              ...state.loading,
              cart:true
            },
        }
    case LOADING_CART_ACTIONS :
      return{
        ...state,
        loading:{
          ...state.loading,
          cartActions:true
        }
      }
    case GET_CART_LENGTH :
      return{
        ...state,
        cartLength: action.payload
      }
    case DELETE_FROMCART : 
        return{
          ...state,
        }
    case DELETE_ONEPRODUCT :
      return{
        ...state
      }
    case ADD_TOCART :{
      return {
        ...state
      }
    }
      default:
        return state
    }
  }