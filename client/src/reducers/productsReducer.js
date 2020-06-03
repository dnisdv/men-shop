import {
    GET_PRODUCTS,
    GET_PRODUCTS_ERROR,
    GET_CATEGORY,
    GET_CATEGORY_ERROR,
    GET_PRODUCT,
    GET_PRODUCT_ERROR,
    LOADING_PRODUCTS,
    LOADING_CATEGORY,
    GET_PRODUCTSBYCATEGORY,
    GET_PRODUCTSBYCATEGORY_ERROR,
    SET_ACTIVECATEGORY,
    CLEAR_ACTIVECATEGORY,
    GET_REVIEWSBYPRODUCT, 
    GET_REVIEWSBYPRODUCT_ERROR,
    LOADING_REVIEWS,
    SET_PRODUCTINITIALSTATE,
    CLEAR_PRODUCT    
} from '../types'
  
  const initialState = {
    loading: {
      category:false,
      product:false,
      reviews:false,
    },
    category: null,
    products: null,
    product: null,
    reviews: null,
    activeCategory: null,
    error:{
      category:null,
    },
    productInitialState : null
  }
  
  export default function (state = initialState, action) {
    switch (action.type) {
      case GET_CATEGORY :
        return {
          ...state,
          category: action.payload,
          loading: {
            ...state.loading,
            category:false
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
        case GET_PRODUCT :
          return{
            ...state,
            product:action.payload,
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
              product :true
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
      }
    case GET_REVIEWSBYPRODUCT :
      return{
        ...state,
        reviews: action.payload,
        loading:{
          ...state.loading,
          reviews: false
        }
      }
    case LOADING_REVIEWS :
      return{
        ...state,
        loading:{
          ...state.loading,
          reviews: true
        }
      }
    case SET_PRODUCTINITIALSTATE :
      return{
        ...state,
        productInitialState:action.payload
      }
    case CLEAR_PRODUCT :
      return{
        ...state,
        product:null
      }

      default:
        return state
    }
  }