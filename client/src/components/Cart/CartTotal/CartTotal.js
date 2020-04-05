import React from 'react'
import './CartTotal.css'

const CartTotal = () => {
    return(
        <div className='CartTotal'>

            <div className='CartTotal_Total'>
                <h5 className='CartTotal_Total_Title'>Total</h5>
                <p className='CartTotal_Total_Value'>300$</p>
            </div>
            <p className='CartTotal_Data'>Shipping costs will be specified in Checkout.</p>

            <button className='CartTotal_Button_Buy'>Checkout</button>
        </div>
    )
}

export default CartTotal