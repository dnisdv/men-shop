import React from 'react'
import DetailsPreview from '../CheckoutDetails/DetailsPreview/DetailsPreview'
import './CheckoutShipping.css'
import { Link } from 'react-router-dom'

const CheckoutShipping = () => {
    return(
        <div className='CheckoutShipping'>

            <DetailsPreview />

            <h1 className='CheckoutShipping_Title'>Shipping method</h1>
            <ul className='CheckoutShipping_List'>
                <li className='CheckoutShipping_List_Item'>
                    <div className='CheckoutShipping_List_Item_Data'>
                        <input className='Checkput' type="radio" id='Shipping1' name="Shipping" />
                        <label for='Shipping1' className='CheckoutShipping_List_Item_Title'>Standart Shipping</label>
                    </div>
                    <p className='CheckoutShipping_List_Item_Price'>Free</p>
                </li>

                <li className='CheckoutShipping_List_Item'>
                    <div className='CheckoutShipping_List_Item_Data'>
                        <input type="radio" id='Shipping2' name="Shipping" />
                        <label for='Shipping2' className='CheckoutShipping_List_Item_Title'>2 - 3 Bussines day shipping</label>
                    </div>
                    <p className='CheckoutShipping_List_Item_Price'>5.00</p>
                </li>

            </ul>
            <div className='CheckoutShipping_Actions'>
                <Link className='CheckoutShipping_Actions_Back' to='/cart'>Back to cart</Link>
                <button className='CheckoutShipping_Actions_Button'>Next</button>
            </div>
        </div>
    )
}

export default CheckoutShipping