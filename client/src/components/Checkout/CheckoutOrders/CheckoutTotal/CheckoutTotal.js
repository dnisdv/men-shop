import React from 'react'
import './CheckoutTotal.css'

import {connect} from 'react-redux'
import PropTypes from 'prop-types';


const CheckoutTotal = ({checkout:{ selectedShipping }, cart : {TotalPrice, ShippPrice, Total}}) => {
    return(
        <div className='CheckoutTotal'>
            <ul className='CheckoutTotal_List'>
                <li className='CheckoutTotal_List_Item CheckoutTotal_List_Item-Subtotal'>
                    <h2 className='CheckoutTotal_List_Item_Title CheckoutTotal_List_Item_Title-Subtotal'>Subtotal</h2>
                    <p className='CheckoutTotal_List_Item_Value CheckoutTotal_List_Item_Value-Subtotal'>{TotalPrice}<span className='currency'>$</span></p>
                </li>

                <li className='CheckoutTotal_List_Item CheckoutTotal_List_Item-Shipping'>
                    <h2 className='CheckoutTotal_List_Item_Title CheckoutTotal_List_Item_Title-Shipping'>Shipping</h2>
                    <p className='CheckoutTotal_List_Item_Value CheckoutTotal_List_Item_Value-Shipping'>{selectedShipping ? selectedShipping.price + "$" : "Will be specifed later" }</p>
                </li>

                <li className='CheckoutTotal_List_Item CheckoutTotal_List_Item-Total'>
                    <h2 className='CheckoutTotal_List_Item_Title CheckoutTotal_List_Item_Title-Total'>Total</h2>
                    <p className='CheckoutTotal_List_Item_Value CheckoutTotal_List_Item_Value-Total'>{ selectedShipping ? selectedShipping.price + TotalPrice: TotalPrice}<span className='currency'>$</span></p>
                </li>
            </ul>
        </div>
    )
}

const mapStateToProps = (state) => ({
    cart : state.cart,
    loading: state.cart.loading,
    checkout: state.checkout
});

CheckoutTotal.propTypes = {
    TotalPrice: PropTypes.number,
    ShippPrice: PropTypes.number,
    Total: PropTypes.number,
}

export default connect(mapStateToProps)(CheckoutTotal)