import React from 'react'
import './Checkout.css'
import CheckoutDetails from './CheckoutDetails/CheckoutDetails'
import CheckoutBreadcrumbs from './CheckoutBreadcrumbs/CheckoutBreadcrumbs'
import CheckoutShipping from './CheckoutShipping/CheckoutShipping'

const Checkout = () => {
    return(
        <div className='Checkout'>
            <CheckoutBreadcrumbs />
            {/* <CheckoutDetails /> */}
            <CheckoutShipping />
        </div>
    )
}

export default Checkout