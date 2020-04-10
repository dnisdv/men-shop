import React, {} from 'react'
import './CheckoutBreadcrumbs.css'

import { Link } from 'react-router-dom'

const CheckoutBreadcrumbs = ({bread}) => {

    return(
        <div className='CheckoutBreadcrumbs'>
            <span data-name='Cart' className='CheckoutBreadcrumbs_Item'><Link className='BreadCart' to='/cart'>Cart</Link></span>
            <span style={{fontWeight: bread['Details'].finished ? '700' : '400'}} data-name='Details' className='CheckoutBreadcrumbs_Item'>Details</span>
            <span style={{fontWeight: bread['Shipping'].finished ? '700' : '400'}} data-name='Shipping' className='CheckoutBreadcrumbs_Item'>Shipping</span>
            <span style={{fontWeight: bread['Payment'].finished ? '700' : '400'}} data-name='Payment' className='CheckoutBreadcrumbs_Item'>Payment</span>
        </div>
    )
}

export default CheckoutBreadcrumbs