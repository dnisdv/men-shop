import {
    SET_CHECKOUT_DATA,
    SET_CHECKOUT_SHIPPMETHOD,
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
    loading:{
        data:false,
        shipp:true,
        payment:true
    }
  }


  export default function (state = initialState, action) {
    switch (action.type) {
      case SET_CHECKOUT_DATA :
        return {
          ...state,
          data:action.payload,
          dataFinished:true,
          loading: {
            ...state.loading,
            data:false
        }
        }
        case SET_CHECKOUT_SHIPPMETHOD :
            return {
              ...state,
              shippMethod:action.payload,
              shippFinished:true,
              loading: {
                ...state.loading,
                shipp:false
            }
        }

      default:
        return state
    }
  }