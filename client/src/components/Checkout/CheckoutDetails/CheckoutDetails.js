import React from 'react'
import './CheckoutDetails.css'

import { set_orderData } from '../../../actions/checkoutActions'
import { connect } from 'react-redux';
import CheckoutDetailsItem from '../CheckoutInput/CheckoutInput'
import PropTypes from 'prop-types';


const CheckoutDetails = (props) => {
    return(
        <div className='CheckoutDetails'>
            <h2 className='CheckoutDetails_Title'>Billing address</h2>
                <div className='CheckoutDetails_Wrapper'>
                    <CheckoutDetailsItem {...props} name='firstName'>First Name</CheckoutDetailsItem>
                    <CheckoutDetailsItem {...props} name='lastName'>Last Name</CheckoutDetailsItem>
                    <CheckoutDetailsItem {...props} name='company'>Company</CheckoutDetailsItem>
                    <CheckoutDetailsItem {...props} name='email'>Email</CheckoutDetailsItem>
                    <CheckoutDetailsItem {...props} name='phone'>Phone</CheckoutDetailsItem>
                    <CheckoutDetailsItem {...props} name='country'>Country</CheckoutDetailsItem>
                    <CheckoutDetailsItem {...props} name='zip'>Zip</CheckoutDetailsItem>
                    <CheckoutDetailsItem {...props} name='state'>State</CheckoutDetailsItem>
                    <CheckoutDetailsItem {...props} name='address'>Address</CheckoutDetailsItem>
                    <CheckoutDetailsItem {...props} name='city'>City</CheckoutDetailsItem>
                </div>
        </div>
    )
}


const mapStateToProps = (state) => ({
    checkoutState : state.checkout.data
  });

CheckoutDetails.propTypes = {
    history:PropTypes.object,
    checkoutState:PropTypes.object,
    set_orderData:PropTypes.func
}

export default connect(mapStateToProps, {set_orderData})(CheckoutDetails)