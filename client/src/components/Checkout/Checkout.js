import React from 'react'
import './Checkout.css'
import CheckoutDetails from './CheckoutDetails/CheckoutDetails'
import CheckoutBreadcrumbs from './CheckoutBreadcrumbs/CheckoutBreadcrumbs'
import CheckoutShipping from './CheckoutShipping/CheckoutShipping'
import CheckoutPayment from './CheckoutPayment/CheckoutPayment'
import PropTypes from 'prop-types';

import {
    Switch,
    Route,
    withRouter
  } from "react-router-dom";


const Checkout = ({match}) => {
    return(
        <div className='Checkout'>
            <CheckoutBreadcrumbs />
            <Switch>
                <Route exact path={`${match.url}/details`} render={ () => <CheckoutDetails /> } />
                <Route exact path={`${match.url}/shipping`} render={ () => <CheckoutShipping/> } />
                <Route exact path={`${match.url}/payment`} render={ () => <CheckoutPayment /> } />
                <CheckoutDetails />
            </Switch>
        </div>
    )
}
Checkout.propTypes = {
    match: PropTypes.object
}

export default withRouter(Checkout)