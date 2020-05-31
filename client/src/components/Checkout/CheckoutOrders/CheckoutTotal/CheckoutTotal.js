import React from 'react'
import './CheckoutTotal.css'

import {connect} from 'react-redux'

const CheckoutTotal = ({cart : {TotalPrice, ShippPrice, Total}}) => {

    // <p className='CartTotal_Total_Value'>{cart ?  cart.length >= 2  ? cart.reduce( (i, s) => {
    //     return (i.price * i.count) + (s.count * s.price) }) : cart.length !== 0 ? cart.map( (i) => i.price * i.count) : "0" : "0"}<span className='Currency'>$</span>
    // </p>
    return(
        <div className='CheckoutTotal'>
            <ul className='CheckoutTotal_List'>
                <li className='CheckoutTotal_List_Item CheckoutTotal_List_Item-Subtotal'>
                    <h2 className='CheckoutTotal_List_Item_Title CheckoutTotal_List_Item_Title-Subtotal'>Subtotal</h2>
                    <p className='CheckoutTotal_List_Item_Value CheckoutTotal_List_Item_Value-Subtotal'>{TotalPrice}<span className='currency'>$</span></p>
                </li>

                <li className='CheckoutTotal_List_Item CheckoutTotal_List_Item-Shipping'>
                    <h2 className='CheckoutTotal_List_Item_Title CheckoutTotal_List_Item_Title-Shipping'>Shipping</h2>
                    <p className='CheckoutTotal_List_Item_Value CheckoutTotal_List_Item_Value-Shipping'>{ShippPrice}<span className='currency'>$</span></p>
                </li>

                <li className='CheckoutTotal_List_Item CheckoutTotal_List_Item-Total'>
                    <h2 className='CheckoutTotal_List_Item_Title CheckoutTotal_List_Item_Title-Total'>Total</h2>
                    <p className='CheckoutTotal_List_Item_Value CheckoutTotal_List_Item_Value-Total'>{Total}<span className='currency'>$</span></p>
                </li>
            </ul>
        </div>
    )
}

const mapStateToProps = (state) => ({
    cart : state.cart,
    loading: state.cart.loading
});

export default connect(mapStateToProps)(CheckoutTotal)