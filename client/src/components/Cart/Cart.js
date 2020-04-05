import React from 'react'
import './Cart.css'
import CartList from './CartList/CartList'
import CartTotal from './CartTotal/CartTotal'

const Cart = () => {
    return( 
        <div className='Cart'>

            <div className='Cart_Data'>
                <h1 className='Cart_Data_Title'>Cart</h1>
                <p className='Cart_Data_Description'>Shipping costs for your order will be specified in checkout.</p>
            </div>
            
            <div className='Cart_Main'>
                <CartList />
                <CartTotal />
            </div>
        </div>
    )
}

export default Cart