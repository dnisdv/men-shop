import React, {useState, useEffect} from 'react'
import './CartTotal.css'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'

const CartTotal = ({cart :{TotalPrice, items}, loading}) => {


    return(
        <div className='CartTotal'>

            <div className='CartTotal_Total'>
                <h5 className='CartTotal_Total_Title'>Total</h5>
                    <p className='CartTotal_Total_Value'>{TotalPrice}<span className='Currency'>$</span></p>

            </div>
            <p className='CartTotal_Data'>Shipping costs will be specified in Checkout.</p>
            
            {
               items ? items.length !== 0 ?
                <Link className='CartTotal_Link_Buy' to='/checkout'><button className='CartTotal_Button_Buy'>Checkout</button></Link>
                : <button disabled className='CartTotal_Button_Buy'>Checkout</button> : <button disabled className='CartTotal_Button_Buy'>Checkout</button>
            }
        </div>
    )
}
const mapStateToProps = (state) => ({
    cart : state.cart,
    loading: state.cart.loading
});



export default connect(mapStateToProps)(CartTotal)