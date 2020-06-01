import {
    SET_ORDERDATA,
    SET_SHIPPMETHOD,
    LOADING_SHIPP,
    LOADING_PAYMENT
} from '../types'
  

export const set_orderData = (data) => dispatch => {
    try{
        dispatch({
            type:SET_ORDERDATA,
            payload:data
        })
    }catch(e){
        console.log(e)
    }
}

export const set_shippMethod = (method) => dispatch => {
    try{
        dispatch({
            type:SET_SHIPPMETHOD,
            payload:method
        })
    }catch(e){
        console.log(e)
    }
}
