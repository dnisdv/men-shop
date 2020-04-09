import React from 'react'
import CheckoutDetails from './CheckoutDetails/CheckoutDetails'
import CheckoutBreadcrumbs from './CheckoutBreadcrumbs/CheckoutBreadcrumbs'

const Checkout = () => {
    return(
        <div className='Checkout'>
            <CheckoutBreadcrumbs />
            <CheckoutDetails />
        </div>
    )
}

export default Checkout