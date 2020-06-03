import React,{useEffect, useState} from 'react'
import './CartList.css'

import CartListItem from './CartListItem/CartListItem'
import Preloader from '../../preloader/preloader'
import {connect} from 'react-redux'
import {getCartProducts, addToCart} from '../../../actions/cartActions'

const CartList = ({getCartProducts, error, cart : {cartLength, items}, loading}) => {
    useEffect(() => {
        getCartProducts()
    }, [getCartProducts, cartLength])

    
    if(loading.cart) return <span className='CartList_Preloader'><Preloader /></span>
    return(
        <div className='CartList_Wrapper'>
            <h2 className='CartList_Wrapper_Title'>Your Items</h2>
       
        {error ? <span className='CartList_NoItems_FeedBack'>{error.data.msg}</span> : <ul className='CartList'>
                {items && items !== [] && items.length !== 0 ? items.map( (item, index) => {
                    return(
                    <CartListItem key={item.productID + index} i={item} />
                    )
                }) : <span className='CartList_NoItems_FeedBack'>no cart items found</span>} 
        </ul>}

        </div>
    )
}


const mapStateToProps = (state) => ({
    cart : state.cart,
    error: state.cart.error,
    loading: state.cart.loading
  });


export default connect(mapStateToProps, {getCartProducts, addToCart})(CartList)