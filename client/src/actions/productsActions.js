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
    SET_ACTIVECATEGORY
} from '../types'
import axios from 'axios'

export const get_category = (history) => (dispatch) => {
    dispatch({type : LOADING_PRODUCTS})
    axios.get('http://localhost:5000/api/category')
    .then( (res) => {
        return dispatch({
            type:GET_CATEGORY,
            payload: res.data
        })
    })
    .catch( (err) => {
        return dispatch({
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
            type:SET_ACTIVECATEGORY,
            payload: category
        })
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

// export const set_activeCategory = (category) => (dispatch) => {
    // axios.get(`http://localhost:5000/api/products?preview=true&category=${category}`)
    // .then( (res) => {
    //     console.log(res)
    //     dispatch({
    //         type: GET_PRODUCTSBYCATEGORY,
    //         payload:res.data
    //     })
    // }).catch( (err) => {
    //     console.log(err.response)
    //     dispatch({
    //         type: GET_PRODUCTSBYCATEGORY_ERROR,
    //         payload:err.response
    //     })
    // })
// }