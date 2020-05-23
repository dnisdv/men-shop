import React, {useState, useEffect} from 'react'
import './CartTotal.css'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'

const CartTotal = ({cart, loading}) => {



    return(
        <div className='CartTotal'>

            <div className='CartTotal_Total'>
                <h5 className='CartTotal_Total_Title'>Total</h5>
                    <p className='CartTotal_Total_Value'>{cart ?  cart.length >= 2  ? cart.reduce( (i, s) => {
                    return (i.price * i.count) + (s.count * s.price) }) : cart.length !== 0 ? cart.map( (i) => i.price * i.count) : "0" : "0"}$</p>

            </div>
            <p className='CartTotal_Data'>Shipping costs will be specified in Checkout.</p>

            <Link className='CartTotal_Link_Buy' to='/checkout'><button className='CartTotal_Button_Buy'>Checkout</button></Link>
        </div>
    )
}
const mapStateToProps = (state) => ({
    cart : state.cart.items,
    loading: state.cart.loading
});



export default connect(mapStateToProps)(CartTotal)