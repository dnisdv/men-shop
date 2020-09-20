import {
    GET_PRODUCT,
    GET_PRODUCT_ERROR,
    GET_REVIEWSBYPRODUCT,
    GET_REVIEWSBYPRODUCT_ERROR,
    LOADING_REVIEWS,
    SET_PRODUCTINITIALSTATE,
    CLEAR_PRODUCT
    
} from '../types'
import axios from 'axios'

export const get_product = (id) => (dispatch) => {
    axios.get(`/api/products/${id}`)
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

 
export const get_productInitialState = (id) => (dispatch) => {
    try{
        axios.get(`/api/products/${id}`)
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

 export const clear_product = () => dispatch => {
         dispatch({type:CLEAR_PRODUCT})
 }

 export const get_reviewsByProduct = (id, page = 0) => (dispatch) => {
    dispatch({type:LOADING_REVIEWS})

    axios.get(`/api/reviews/product/${id}?page=${page}`, {withCredentials : true})
    .then( (res) => {
        dispatch({
            type: GET_REVIEWSBYPRODUCT,
            payload: res.data
        })
    })
    .catch( (err) => {
        dispatch({
            type:GET_REVIEWSBYPRODUCT_ERROR,
            payload: err.response
        })
    })
 }

export const add_review = (data, id) => dispatch => {
    try{
        axios.post(`/api/reviews`, data, {withCredentials: true}).then( (res) => {
            axios.get(`/api/reviews/product/${id}`, {withCredentials : true})
                .then( (res) => {
                    dispatch({
                        type: GET_REVIEWSBYPRODUCT,
                        payload: res.data
                    })
                })
        })
    }catch(e){
        
    }
}


export const like_review = (reviewId) => dispatch => {
    try{
        axios.post(`/api/likereview/${reviewId}`,{}, {withCredentials: true})
        .then( (res) => {
             dispatch({
                 type: "LIKED"
             })
        })
    }catch(e){
        console.log(e)
    }
}


