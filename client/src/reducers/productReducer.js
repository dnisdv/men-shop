import {
    GET_REVIEWSBYPRODUCT, 
    GET_PRODUCT,
    LOADING_REVIEWS,
    SET_PRODUCTINITIALSTATE,
    CLEAR_PRODUCT    
} from '../types'
  
  const initialState = {
    loading: {
      product:false,
    },
    product: null,
    reviews: null,
    productInitialState : null
  }
  
  export default function (state = initialState, action) {
    switch (action.type) {
        case GET_PRODUCT :
            return{
              ...state,
              product:action.payload,
              loading: {
                ...state.loading,
                product :false
              }
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