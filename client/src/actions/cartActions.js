import axios from 'axios'

import {
    GET_CART,
    LOADING_CART_ACTIONS,
    GET_CART_ERROR,
    GET_CART_LENGTH,
    DELETE_ONEPRODUCT,
    ADD_TOCART
} from '../types'


export const addToCart = (data) => (dispatch) => {
        axios.post('http://localhost:5000/api/cart/addProduct', data, {withCredentials : true})
        .then( (res) => {
            dispatch({
                type: GET_CART_LENGTH,
                payload: {value : res.data.items.length}
            })
            dispatch({
                type: ADD_TOCART
            })
            dispatch({
                type:GET_CART,
                items: res.data.items,
                TotalPrice: res.data.TotalPrice,
                ShippPrice: res.data.ShippPrice,
                Total: res.data.Total
            })

        })
        .catch( (e) => {
            console.log(e)  
        })
        
}

    export const getCartProducts = () => (dispatch) => {
        axios.get('http://localhost:5000/api/cart/getProducts', {withCredentials : true})
        .then((res)=> {
            dispatch({
                type:GET_CART,
                items: res.data.items,
                TotalPrice: res.data.TotalPrice,
            })
        })
        .catch( (err) => {
            dispatch({
                type:GET_CART_ERROR,
                payload:err.response
            })
        })
}



export const increaseProduct = (data) => (dispatch) => {
    dispatch({type: LOADING_CART_ACTIONS})
       axios.post('http://localhost:5000/api/cart/increaseProduct',data, {withCredentials : true})
        .then( (res) => {
            dispatch({
                type:GET_CART,
                items: res.data.items,
                TotalPrice: res.data.TotalPrice,
            })
        })
        .catch( (err) => console.log(err.response))

}

export const decreaseProduct = (data) => (dispatch) => {
    dispatch({type: LOADING_CART_ACTIONS})

       axios.post('http://localhost:5000/api/cart/decreaseProduct',data, {withCredentials : true})
        .then( (res) => {
            dispatch({
                type:GET_CART,
                items: res.data.items,
                TotalPrice: res.data.TotalPrice,
            })
        })
        .catch( (err) => console.log(err.response))

}

export const setCount = (count) => dispatch => {
    dispatch({type: LOADING_CART_ACTIONS})

    axios.post('http://localhost:5000/api/cart/setCount',count, {withCredentials : true})
    .then((res)=> {
        dispatch({
            type:GET_CART,
            items: res.data.items,
            TotalPrice: res.data.TotalPrice,
        })
    }
    )
    .catch( (e) => console.log(e.response))
}

export const getCartLength = () => dispatch => {
    axios.get('http://localhost:5000/api/cart/getcartlength', {withCredentials : true})
    .then((res)=> {
        dispatch({
            type:GET_CART_LENGTH,
            payload: res.data
        })
    })
    .catch( (e) => {
        dispatch({
            type:GET_CART_LENGTH,
            payload: 0
        })
    } )
}

export const deleteOne = (id, sku) => dispatch => {

    axios.post(`http://localhost:5000/api/cart/deleteOne`, {id, sku}, {withCredentials : true})
    .then((res)=> {
        dispatch({
            type:DELETE_ONEPRODUCT,
            payload: res.data
        })
        dispatch({
            type: GET_CART_LENGTH,
            payload: {value: res.data.items.length}
        })
        dispatch({
            type:GET_CART,
            items: res.data.items,
            TotalPrice: res.data.TotalPrice,
        })
    })
    .catch( (err) => console.log(err.response))
}