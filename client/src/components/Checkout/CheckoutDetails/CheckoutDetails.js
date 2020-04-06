import React from 'react'
import './CheckoutDetails.css'

const CheckoutDetails = () => {
    return(
        <div className='CheckoutDetails'>

            <h2 className='CheckoutDetails_Title'>Details</h2>

        <div className='CheckoutDetails_Wrapper'>
            <div className='CheckoutDetails_Input_Wrapp'>
                <input type='text' className='CheckoutDetails_Input' id='fname' />
                <label for='fname' className='CheckoutDetails_Input_LabeL'>First Name</label>
            </div>

            <div className='CheckoutDetails_Input_Wrapp'>
                <input type='text' className='CheckoutDetails_Input' id='lname' />
                <label for='lname' className='CheckoutDetails_Input_LabeL'>Last Name</label>
            </div>

            <div className='CheckoutDetails_Input_Wrapp'>
                <input type='text' className='CheckoutDetails_Input' id='company' />
                <label for='company' className='CheckoutDetails_Input_LabeL'>Company</label>
            </div>

            <div className='CheckoutDetails_Input_Wrapp'>
                <input type='text' className='CheckoutDetails_Input' id='email' />
                <label for='email' className='CheckoutDetails_Input_LabeL'>Email</label>
            </div>

            <div className='CheckoutDetails_Input_Wrapp'>
                <input type='text' className='CheckoutDetails_Input' id='phone' />
                <label for='phone' className='CheckoutDetails_Input_LabeL'>Phone</label>
            </div>

            <div className='CheckoutDetails_Input_Wrapp '>
                <input type='text' className='CheckoutDetails_Input' id='country' />
                <label for='country' className='CheckoutDetails_Input_LabeL'>Country</label>
            </div>

            <div className='CheckoutDetails_Input_Wrapp CheckoutDetails_Zipcode'>
                <input type='text' className='CheckoutDetails_Input' id='zipcode' />
                <label for='zipcode' className='CheckoutDetails_Input_LabeL'>Zip Code</label>
            </div>

            <div className='CheckoutDetails_Input_Wrapp CheckoutDetails_State'>
                <input type='text' className='CheckoutDetails_Input' id='state' />
                <label for='state' className='CheckoutDetails_Input_LabeL'>State</label>
            </div>

            <div className='CheckoutDetails_Input_Wrapp'>
                <input type='text' className='CheckoutDetails_Input' id='address' />
                <label for='address' className='CheckoutDetails_Input_LabeL'>Address</label>
            </div>

            <div className='CheckoutDetails_Input_Wrapp'>
                <input type='text' className='CheckoutDetails_Input' id='city' />
                <label for='city' className='CheckoutDetails_Input_LabeL'>City</label>
            </div>


        </div>

        <button className='CheckoutDetails_Button'>Next</button>

        </div>
    )
}

export default CheckoutDetails