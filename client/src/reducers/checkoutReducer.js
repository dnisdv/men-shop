import {
    SET_CHECKOUT_DATA,
    SET_CHECKOUT_SHIPPMETHOD,
    SET_SHIPPING_METHODS,
    LOADING_SHIPPING_METHODS
} from '../types'

const initialState = {
    data : {
        firstName : '',
        lastName : '',
        company : '',
        email : '',
        phone: '',
        country: '',
        zip: '',
        state: '',
        address : '',
        city : ''
    },
    completed: {
      data:false,
    },
    shippMethods:null,
    selectedShipping: null,
    loading:{
        shippMethods:false,
    }
  }

  export default function (state = initialState, action) {
    switch (action.type) {
      case SET_CHECKOUT_DATA :
        return {
          ...state,
          data:action.payload,
          dataFinished:true,
          completed:{
            ...state.completed,
            data:true
          },
          loading: {
            ...state.loading,
            data:false
        }
        }
        case SET_CHECKOUT_SHIPPMETHOD :
            return {
              ...state,
              selectedShipping:action.payload,
              loading: {
                ...state.loading,
            }
        }
        case SET_SHIPPING_METHODS : 
            return{
              ...state,
              shippMethods:action.payload,
              loading: {
                ...state.loading,
                shippMethods:false
            }
            }
        case LOADING_SHIPPING_METHODS :
          return{
            ...state,
            loading: {
              ...state.loading,
              shippMethods:true
          }
          }
      default:
        return state
    }
  }