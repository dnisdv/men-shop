import React,{useEffect} from 'react'
import './CheckoutPage.css'
import Checkout from '../../components/Checkout/Checkout'
import CheckoutOrders from '../../components/Checkout/CheckoutOrders/CheckoutsOrder'
import {connect} from 'react-redux'

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


    // if (cart.length === 0 || cart === null) {
    //     return <div className=''>LOADING</div>
    // }
    return(
        <div className='CheckoutPage'>
            <Checkout />
            { cart ? <CheckoutOrders /> : null }
            
        </div>
    )
}

const mapStateToProps = (state) => ({
    cart : state.cart.items,
    loading: state.cart.loading
});


export default connect(mapStateToProps)(CheckoutPage)