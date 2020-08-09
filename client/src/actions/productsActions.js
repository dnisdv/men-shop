import {
    GET_PRODUCTS,
    GET_PRODUCTS_ERROR,
    GET_CATEGORY,
    GET_CATEGORY_ERROR,
    LOADING_PRODUCTS,
    GET_PRODUCTSBYCATEGORY,
    GET_PRODUCTSBYCATEGORY_ERROR,
    SET_ACTIVECATEGORY,
    CLEAR_ACTIVECATEGORY,
    LOADING_CATEGORY,
    
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

export const get_products = (page = 0) => (dispatch) => {
    // dispatch({type: LOADING_PRODUCTS})
    axios.get(`http://localhost:5000/api/products?preview=true&page=${page}`)
    .then( (res) => {
        dispatch({
            type:GET_PRODUCTS,
            payload:res.data,
        })
    }).catch((err) => {
        dispatch({
            type:GET_PRODUCTS_ERROR,
            payload:err.response
        })
    })
}

export const get_productsByCategory = (category, page = 0) => (dispatch) => {
    dispatch({
        type: SET_ACTIVECATEGORY,
        payload: category
    })
    dispatch({type: LOADING_PRODUCTS})
    axios.get(`http://localhost:5000/api/products?preview=true&category=${category}&page=${page}`)
    .then( (res) => {

        dispatch({
            type: GET_PRODUCTSBYCATEGORY,
            payload:res.data,
        })
    }).catch( (err) => {
        dispatch({
            type: GET_PRODUCTSBYCATEGORY_ERROR,
            payload:err.response
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

export const clear_activeCategory = (id) => (dispatch) => {
    try{
        dispatch({type: CLEAR_ACTIVECATEGORY})
    }catch(e){
        console.log(e)
    }
}

