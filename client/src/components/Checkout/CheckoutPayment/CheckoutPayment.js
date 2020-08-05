import React,{useEffect} from 'react'
import  {createBrowserHistory} from 'history'
import './CheckoutPayment.css'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'

import {pay_order} from '../../../actions/checkoutActions'

const CheckoutPayment = ({
     history,
     pay_order,
     checkoutState : {data, shippMethod, shippFinished, dataFinished},
     cartState : {items},
     userState
}) => {

    useEffect(() => {
        if(!shippFinished || !dataFinished) {
            history.push('/checkout')
        }
    }, [dataFinished, history, shippFinished])
    
    const goBack = () => {
        createBrowserHistory().goBack()
    }
    if(!shippFinished || !dataFinished) return (<span></span>)

    const payHandle = ( ) => {
        if(!shippFinished || !dataFinished ) {
            return history.push('/')
        }
        pay_order({...data, shippMethod, user:userState.authenticated ? userState.user._id : null}, items, history)
    }

    return(
        <div  className='CheckoutPayment'>
            <h2 className='CheckoutPayment_Title'>There will be payment</h2>
            
            <button disabled={!shippFinished || !dataFinished ? true : false } 
                    onClick={payHandle} 
                    className='CheckoutPayment_PayButton'>PAY</button>

            <div className='CheckoutDetails_Actions'>
            <span onClick={goBack} className='CheckoutPayment_Actions_Back'>Back to shipping</span>
        </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    checkoutState: state.checkout,
    cartState: state.cart,
    userState: state.user
})


export default withRouter(connect(mapStateToProps, {pay_order})(CheckoutPayment))