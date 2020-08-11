import React,{useEffect} from 'react'
import './CheckoutPage.css'
import Checkout from '../../components/Checkout/Checkout'
import CheckoutOrders from '../../components/Checkout/CheckoutOrders/CheckoutsOrder'
import {connect} from 'react-redux'
import PropTypes from 'prop-types';

import {
    withRouter
} from "react-router-dom";

const CheckoutPage = ({headerRef, footerRef, cart}) => {
    useEffect( ()=> {
        window.scrollTo(0, 0)
        const header = headerRef.current
        const footer = footerRef.current
        header.style.display = 'none'
        footer.style.display = 'none'
        return( () => {
            header.style.display = 'flex'
            footer.style.display = 'flex'
        })
    }, [footerRef, headerRef])
    return(
        <div className='CheckoutPage'>
            <CheckoutOrders />
            <Checkout />
        </div>
    )
}

const mapStateToProps = (state) => ({
    cart : state.cart.items,
    loading: state.cart.loading
});
CheckoutPage.propTypes = {
    headerRef: PropTypes.object,
    footerRef: PropTypes.object,
    cart: PropTypes.array
}


export default withRouter(connect(mapStateToProps)(CheckoutPage))