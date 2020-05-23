import axios from 'axios'

import {
    GET_CART,
    LOADING_CART,
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
                payload: {value : res.data.length}
            })
            dispatch({
                type: ADD_TOCART
            })
            dispatch({
                type:GET_CART,
                payload: res.data
            })

        })
        .catch( (e) => {
            console.log(e)  
        })
        
}

    export const getCartProducts = () => (dispatch) => {
    dispatch({type: LOADING_CART})
        axios.get('http://localhost:5000/api/cart/getProducts', {withCredentials : true})
        .then((res)=> {
            dispatch({
                type:GET_CART,
                payload: res.data
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

    console.log(data)
       axios.post('http://localhost:5000/api/cart/increaseProduct',data, {withCredentials : true})
        .then( (res) => {
            console.log(res)
            dispatch({
                type:GET_CART,
                payload: res.data
            })
        })
        .catch( (err) => console.log(err.response))

}

export const decreaseProduct = (data) => (dispatch) => {
    dispatch({type: LOADING_CART_ACTIONS})

    console.log(data)
       axios.post('http://localhost:5000/api/cart/decreaseProduct',data, {withCredentials : true})
        .then( (res) => {
            
            console.log(res)
            dispatch({
                type:GET_CART,
                payload: res.data
            })
        })
        .catch( (err) => console.log(err.response))

}

export const setCount = (count) => dispatch => {
    dispatch({type: LOADING_CART_ACTIONS})

    axios.post('http://localhost:5000/api/cart/setCount',count, {withCredentials : true})
    .then((res)=> {
    console.log(res)
        dispatch({
            type:GET_CART,
            payload: res.data
        })
    }
    )
    .catch( (err) => console.log(err.response))
}

export const getCartLength = () => dispatch => {
    console.log("Cart")
    axios.get('http://localhost:5000/api/cart/getcartlength', {withCredentials : true})
    .then((res)=> {
    console.log(res)
        dispatch({
            type:GET_CART_LENGTH,
            payload: res.data
        })
    })
    .catch( (err) => console.log(err.response))
}

export const deleteOne = (id, sku) => dispatch => {

    axios.post(`http://localhost:5000/api/cart/deleteOne`, {id, sku}, {withCredentials : true})
    .then((res)=> {
    console.log(res)
        dispatch({
            type:DELETE_ONEPRODUCT,
            payload: res.data
        })
        dispatch({
            type: GET_CART_LENGTH,
            payload: {value: res.data.length}
        })
        dispatch({
            type:GET_CART,
            payload: res.data
        })
    })
    .catch( (err) => console.log(err.response))
}