import {
    SET_CHECKOUT_DATA,
    SET_CHECKOUT_SHIPPMETHOD,
    PAY_CHECKOUT_ORDER,
    GET_CART,
    GET_CART_LENGTH,
    SET_SHIPPING_METHODS,
} from '../types'

import axios from 'axios'
  

export const set_orderData = (data) => dispatch => {
    try{
        dispatch({
            type:SET_CHECKOUT_DATA,
            payload:data
        })
    }catch(e){
        console.log(e)
    }
}

export const set_shippMethod = (method) => dispatch => {
    try{
            dispatch({
                type:SET_CHECKOUT_SHIPPMETHOD,
                payload:method
        })
    }catch(e){
        console.log(e)
    }
}

export const pay_order = (data, cart, history) => dispatch => {
    try{
        return axios.post('/api/orders', {data, cart}, {withCredentials : true})
        .then( (res) => {
            dispatch({
                type: PAY_CHECKOUT_ORDER
            })
            dispatch({
                type:GET_CART,
                items: null,
                TotalPrice: null,
                ShippPrice: null,
                Total: null
            })
            dispatch({
                type: GET_CART_LENGTH,
                payload: {value : 0}
            })
            history.push('/')
        })

    }catch(e){

    }

}

export const getShippingMethods = () => dispatch => {
    // dispatch({type: LOADING_SHIPPING_METHODS})
    try{
        return axios.get('/api/shipping')
        .then( (res) => {
            dispatch({
                type:SET_SHIPPING_METHODS,
                payload: res.data
            })
        })

    }catch(e){

    }
}
