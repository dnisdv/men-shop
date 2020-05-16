import React,{useEffect} from 'react'
import './CheckoutPage.css'
import Checkout from '../../components/Checkout/Checkout'
import CheckoutOrders from '../../components/Checkout/CheckoutOrders/CheckoutsOrder'

const CheckoutPage = ({headerRef, footerRef}) => {
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
            <Checkout />
            <CheckoutOrders />
        </div>
    )
}

export default CheckoutPage