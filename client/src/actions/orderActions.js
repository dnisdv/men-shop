import {
    GET_ORDERS
} from '../types'

import axios from 'axios'
  


export const get_orders = () => dispatch => {
    try{
        return axios.get('http://localhost:5000/api/ordersByUser', {withCredentials : true})
        .then( (res) => {
            return dispatch({
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
