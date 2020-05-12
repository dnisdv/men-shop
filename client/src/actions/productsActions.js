import {
    GET_PRODUCTS,
    GET_PRODUCTS_ERROR,
    GET_CATEGORY,
    GET_CATEGORY_ERROR,
    GET_PRODUCT,
    GET_PRODUCT_ERROR,
    LOADING_PRODUCTS,
    GET_PRODUCTSBYCATEGORY,
    GET_PRODUCTSBYCATEGORY_ERROR,
    SET_ACTIVECATEGORY,
    GET_REVIEWSBYPRODUCT,
    GET_REVIEWSBYPRODUCT_ERROR,
    LOADING_CATEGORY,
    LOADING_REVIEWS,
    
} from '../types'
import axios from 'axios'

export const get_category = (history) => (dispatch) => {
    dispatch({type : LOADING_CATEGORY})
    axios.get('http://localhost:5000/api/category')
    .then( (res) => {
        dispatch({
            type:GET_CATEGORY,
            payload: res.data
        })
    })
    .catch( (err) => {
        dispatch({
            type:GET_CATEGORY_ERROR,
            playload:err.response
        })
    })
}

export const get_products = () => (dispatch) => {

    dispatch({type: LOADING_PRODUCTS})
    axios.get('http://localhost:5000/api/products?preview=true')
    .then( (res) => {
        dispatch({
            type:GET_PRODUCTS,
            payload:res.data
        })
    }).catch((err) => {
        dispatch({
            type:GET_PRODUCTS_ERROR,
            payload:err.response
        })
    })
}

export const get_productsByCategory = (category) => (dispatch) => {
    dispatch({type:LOADING_PRODUCTS})

    axios.get(`http://localhost:5000/api/products?preview=true&category=${category}`)
    .then( (res) => {
        dispatch({
            type: GET_PRODUCTSBYCATEGORY,
            payload:res.data
        })
    }).catch( (err) => {
        console.log(err.response)
        dispatch({
            type: GET_PRODUCTSBYCATEGORY_ERROR,
            payload:err.response
        })
    })
}

 export const get_product = (id) => (dispatch) => {
    dispatch({type:LOADING_PRODUCTS})
    axios.get(`http://localhost:5000/api/products/${id}`)
    .then( (res) => {
        console.log(res)
        dispatch({
            type: GET_PRODUCT,
            payload: res.data
        })
    })
    .catch( (err) => {
        console.log(err)
        dispatch({
            type:GET_PRODUCT_ERROR,
            payload: err.response
        })
    })
 }

 export const get_reviewsByProduct = (id, page = 1) => (dispatch) => {
    dispatch({type:LOADING_REVIEWS})
    axios.get(`http://localhost:5000/api/reviews/product/${id}?page=${page}`)
    .then( (res) => {
        console.log(res)
        dispatch({
            type: GET_REVIEWSBYPRODUCT,
            payload: res.data
        })
    })
    .catch( (err) => {
        console.log(err.response)
        dispatch({
            type:GET_REVIEWSBYPRODUCT_ERROR,
            payload: err.response
        })
    })
 }


export const set_activeCategory = (id) => (dispatch) => {
    try{
        dispatch({
            type: SET_ACTIVECATEGORY,
            payload:id
        })
    }catch(e){
        console.log(e)
    }
}