import {
    GET_PRODUCTS,
    GET_CATEGORY,
    LOADING_PRODUCTS,
    LOADING_CATEGORY,
    GET_PRODUCTSBYCATEGORY,
    GET_PRODUCTSBYCATEGORY_ERROR,
    SET_ACTIVECATEGORY,
    CLEAR_ACTIVECATEGORY
} from '../types'
  
  const initialState = {
    loading: {
      category:false,
      reviews:false,
      product:false
    },
    category: null,
    products: null,
    activeCategory: null,
    error:{
      category:null,
    },
  }
  
  export default function (state = initialState, action) {
    switch (action.type) {
      case GET_CATEGORY :
        return {
          ...state,
          category: action.payload,
          loading: {
            ...state.loading,
            category:false,
            product:false
          }
        }
    case GET_PRODUCTS:
        return{
            ...state,
            products:action.payload,
            loading: {
              ...state.loading,
              product :false
            }
        }
       
    case LOADING_PRODUCTS :
        return{
            ...state,
            loading: {
              ...state.loading,
            }
        }
    case LOADING_CATEGORY: 
      return{
        ...state,
        loading: {
          ...state.loading,
          category :true
        }
      }
    
    case GET_PRODUCTSBYCATEGORY :
        return{
            ...state,
            products:action.payload,
            loading: {
              ...state.loading,
              product :false
            }
        }
    case GET_PRODUCTSBYCATEGORY_ERROR :
    return{
        ...state,
        loading:{
          ...state.loading,
          product:false
        }
        }
    case SET_ACTIVECATEGORY :
      return{
        ...state,
        activeCategory:action.payload,
        loading: {
          ...state.loading,
          product :true
        }
      }
    case CLEAR_ACTIVECATEGORY :
      return{
        ...state,
        activeCategory: null,
      }
      default:
        return state
    }
  }