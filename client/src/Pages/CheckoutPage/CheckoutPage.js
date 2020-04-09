import React,{useEffect} from 'react'
import './CheckoutPage.css'
import Checkout from '../../components/Checkout/Checkout'
import CheckoutOrders from '../../components/Checkout/CheckoutOrders/CheckoutsOrder'

const CheckoutPage = ({headerRef, footerRef}) => {
    useEffect( ()=> {
        headerRef.current.style.display = 'none'
        footerRef.current.style.display = 'none'
    }, [footerRef, headerRef])
    return(
        <div className='CheckoutPage'>
            <Checkout />
            <CheckoutOrders />
        </div>
    )
}

export default CheckoutPage