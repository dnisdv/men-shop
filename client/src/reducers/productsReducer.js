import {
    GET_PRODUCTS,
    GET_PRODUCTS_ERROR,
    GET_CATEGORY,
    GET_CATEGORY_ERROR,
    GET_PRODUCT,
    GET_PRODUCT_ERROR,
    LOADING_PRODUCTS,
    GET_PRODUCTSBYCATEGORY,
    GET_PRODUCTSBYCATEGORY_ERROR,
    SET_ACTIVECATEGORY,
    CLEAR_ACTIVECATEGORY
} from '../types'
  
  const initialState = {
    loading: false,
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
          loading:false
        }
    case GET_PRODUCTS:
        return{
            ...state,
            products:action.payload,
            loading:false
        }
    case LOADING_PRODUCTS :
        return{
            ...state,
            loading: true
        }
    case GET_PRODUCTSBYCATEGORY :
        return{
            ...state,
            products:action.payload,
            loading:false
        }
    case GET_PRODUCTSBYCATEGORY_ERROR :
    return{
        ...state,
        }
    case SET_ACTIVECATEGORY :
      return{
        ...state,
        activeCategory:action.payload
      }
      default:
        return state
    }
  }