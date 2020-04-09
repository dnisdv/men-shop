import React from 'react'
import './CheckoutDetails.css'

import { Link } from 'react-router-dom'

const CheckoutDetails = () => {
    return(
        <div className='CheckoutDetails'>

            <h2 className='CheckoutDetails_Title'>Details</h2>

        <div className='CheckoutDetails_Wrapper'>
            <div className='CheckoutDetails_Input_Wrapp'>
                <input type='text' className='CheckoutDetails_Input' id='fname' />
                <label htmlFor='fname' className='CheckoutDetails_Input_LabeL'>First Name</label>
            </div>

            <div className='CheckoutDetails_Input_Wrapp'>
                <input type='text' className='CheckoutDetails_Input' id='lname' />
                <label htmlFor='lname' className='CheckoutDetails_Input_LabeL'>Last Name</label>
            </div>

            <div className='CheckoutDetails_Input_Wrapp'>
                <input type='text' className='CheckoutDetails_Input' id='company' />
                <label htmlFor='company' className='CheckoutDetails_Input_LabeL'>Company</label>
            </div>

            <div className='CheckoutDetails_Input_Wrapp'>
                <input type='text' className='CheckoutDetails_Input' id='email' />
                <label htmlFor='email' className='CheckoutDetails_Input_LabeL'>Email</label>
            </div>

            <div className='CheckoutDetails_Input_Wrapp'>
                <input type='text' className='CheckoutDetails_Input' id='phone' />
                <label htmlFor='phone' className='CheckoutDetails_Input_LabeL'>Phone</label>
            </div>

            <div className='CheckoutDetails_Input_Wrapp '>
                <input type='text' className='CheckoutDetails_Input' id='country' />
                <label htmlFor='country' className='CheckoutDetails_Input_LabeL'>Country</label>
            </div>

            <div className='CheckoutDetails_Input_Wrapp CheckoutDetails_Zipcode'>
                <input type='text' className='CheckoutDetails_Input' id='zipcode' />
                <label htmlFor='zipcode' className='CheckoutDetails_Input_LabeL'>Zip Code</label>
            </div>

            <div className='CheckoutDetails_Input_Wrapp CheckoutDetails_State'>
                <input type='text' className='CheckoutDetails_Input' id='state' />
                <label htmlFor='state' className='CheckoutDetails_Input_LabeL'>State</label>
            </div>

            <div className='CheckoutDetails_Input_Wrapp'>
                <input type='text' className='CheckoutDetails_Input' id='address' />
                <label htmlFor='address' className='CheckoutDetails_Input_LabeL'>Address</label>
            </div>

            <div className='CheckoutDetails_Input_Wrapp'>
                <input type='text' className='CheckoutDetails_Input' id='city' />
                <label htmlFor='city' className='CheckoutDetails_Input_LabeL'>City</label>
            </div>


        </div>
            <div className='CheckoutDetails_Actions'>
                <Link className='CheckoutDetails_Actions_Back' to='/cart'>Back to cart</Link>
                <button className='CheckoutDetails_Actions_Button'>Next</button>
            </div>
        </div>
    )
}

export default CheckoutDetails