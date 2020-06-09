import {
    SET_ORDERDATA,
    SET_SHIPPMETHOD,
    PAY_ORDER,
    GET_ORDERS
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
    dataFinished: false,
    shippFinished:false,
    shippMethod: null,
    orders : null,
    loading:{
        data:false,
        shipp:true,
        payment:true
    }
  }
  
  export default function (state = initialState, action) {
    switch (action.type) {
      case SET_ORDERDATA :
        return {
          ...state,
          data:action.payload,
          dataFinished:true,
          loading: {
            ...state.loading,
            data:false
        }
        }
        case SET_SHIPPMETHOD :
            return {
              ...state,
              shippMethod:action.payload,
              shippFinished:true,
              loading: {
                ...state.loading,
                shipp:false
            }
        }
        case GET_ORDERS :
          return{
            ...state,
            orders:action.payload
          }
      default:
        return state
    }
  }