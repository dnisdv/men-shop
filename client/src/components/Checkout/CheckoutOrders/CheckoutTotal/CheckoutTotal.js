import React from 'react'
import './CheckoutTotal.css'

const CheckoutTotal = () => {
    return(
        <div className='CheckoutTotal'>
            <ul className='CheckoutTotal_List'>
                <li className='CheckoutTotal_List_Item CheckoutTotal_List_Item-Subtotal'>
                    <h2 className='CheckoutTotal_List_Item_Title CheckoutTotal_List_Item_Title-Subtotal'>Subtotal</h2>
                    <p className='CheckoutTotal_List_Item_Value CheckoutTotal_List_Item_Value-Subtotal'>€26.66</p>
                </li>

                <li className='CheckoutTotal_List_Item CheckoutTotal_List_Item-Shipping'>
                    <h2 className='CheckoutTotal_List_Item_Title CheckoutTotal_List_Item_Title-Shipping'>Shipping</h2>
                    <p className='CheckoutTotal_List_Item_Value CheckoutTotal_List_Item_Value-Shipping'>€60</p>
                </li>

                <li className='CheckoutTotal_List_Item CheckoutTotal_List_Item-Total'>
                    <h2 className='CheckoutTotal_List_Item_Title CheckoutTotal_List_Item_Title-Total'>Total</h2>
                    <p className='CheckoutTotal_List_Item_Value CheckoutTotal_List_Item_Value-Total'>€86.35</p>
                </li>
            </ul>
        </div>
    )
}

export default CheckoutTotal