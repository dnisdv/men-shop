import React from 'react'
import './CartTotal.css'
import { Link } from 'react-router-dom'

const CartTotal = () => {
    return(
        <div className='CartTotal'>

            <div className='CartTotal_Total'>
                <h5 className='CartTotal_Total_Title'>Total</h5>
                <p className='CartTotal_Total_Value'>300$</p>
            </div>
            <p className='CartTotal_Data'>Shipping costs will be specified in Checkout.</p>

            <Link className='CartTotal_Link_Buy' to='/checkout'><button className='CartTotal_Button_Buy'>Checkout</button></Link>
        </div>
    )
}

export default CartTotal