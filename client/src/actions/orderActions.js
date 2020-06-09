import {
    SET_ORDERDATA,
    SET_SHIPPMETHOD,
    PAY_ORDER,
    GET_CART,
    GET_CART_LENGTH,
    GET_ORDERS
} from '../types'

import axios from 'axios'
  

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

export const pay_order = (data, cart, history) => dispatch => {
    try{
        return axios.post('http://localhost:5000/api/orders', {data, cart}, {withCredentials : true})
        .then( (res) => {
            dispatch({
                type: PAY_ORDER
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

export const get_orders = () => dispatch => {
    try{
        return axios.get('http://localhost:5000/api/ordersByUser', {withCredentials : true})
        .then( (res) => {
            dispatch({
                type:GET_ORDERS,
                payload: res.data
            })
        })
        .catch( (e) => {
            console.log(e)
        })

    }catch(e){

    }
}