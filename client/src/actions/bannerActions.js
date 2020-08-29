import {
    LOADING_BANNERS,
    GET_BANNERS,
    GET_BANNERS_ERROR
  } from '../types'
  import axios from 'axios'
  
export const get_banners = () => (dispatch) => {
    dispatch({ type:LOADING_BANNERS })
    return axios.get('http://localhost:5000/api/banner?preview=true')
    .then( (res) => {
        dispatch({
            type:GET_BANNERS,
            payload: res.data
        })
    })
    .catch( (err) => {
        dispatch({
            type:GET_BANNERS_ERROR,
            payload:err.response
        })
    })
}
