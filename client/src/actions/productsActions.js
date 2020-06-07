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
    SET_PRODUCTINITIALSTATE,
    CLEAR_PRODUCT
    
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
    console.log("PAGECHENGE")
    dispatch({type: LOADING_PRODUCTS})
    axios.get(`http://localhost:5000/api/products?preview=true&page=${page}`)
    .then( (res) => {
        console.log(res)
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

 export const get_product = (id) => (dispatch) => {
    dispatch({type:LOADING_PRODUCTS})
    axios.get(`http://localhost:5000/api/products/${id}`)
    .then( async (res) => {
        dispatch({
            type: GET_PRODUCT,
            payload: res.data
        })
        let State ={}
        if(res.data.stock) {
            await res.data.stock.map( (i) => {return State[i.title] = ''})
        }

        dispatch({
            type: SET_PRODUCTINITIALSTATE,
            payload:State
        })
        
    })
    .catch( (err) => {
        dispatch({
            type:GET_PRODUCT_ERROR,
            payload: err.response
        })
    })
 }

 export const clear_product = () => dispatch => {
         dispatch({type:CLEAR_PRODUCT})
 }

 export const get_reviewsByProduct = (id, page = 0) => (dispatch) => {
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
        console.log(err)
        dispatch({
            type:GET_REVIEWSBYPRODUCT_ERROR,
            payload: err.response
        })
    })
 }

export const add_review = (data, id) => dispatch => {
    try{
        axios.post(`http://localhost:5000/api/reviews`, data, {withCredentials: true}).then( (res) => {
            axios.get(`http://localhost:5000/api/reviews/product/${id}`)
                .then( (res) => {
                    dispatch({
                        type: GET_REVIEWSBYPRODUCT,
                        payload: res.data
                    })
                })
        })
    }catch(e){
        console.log(e)
    }
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

export const get_productInitialState = (id) => (dispatch) => {
    try{
        axios.get(`http://localhost:5000/api/products/${id}`)
        .then( async ({data}) => {    
            let State ={}
            if(data.stock) {
                await data.stock.map( (i) => {return State[i.title] = ''})
            }
            dispatch({
                type: SET_PRODUCTINITIALSTATE,
                payload:State
            })
            
        })

    }catch(e){

    }
}