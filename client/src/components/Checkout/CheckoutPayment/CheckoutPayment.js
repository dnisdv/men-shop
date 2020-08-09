import React,{useEffect} from 'react'
import  {createBrowserHistory} from 'history'
import './CheckoutPayment.css'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'

import {pay_order} from '../../../actions/checkoutActions'
import PropTypes from 'prop-types';


const CheckoutPayment = ({
     history,
     pay_order,
     checkoutState : {data, completed, selectedShipping},
     cartState : {items},
     userState
}) => {
    useEffect(() => {
        if(!selectedShipping || !completed.data ){
            history.push('/checkout')
        }
    }, [selectedShipping, completed, history])
    const goBack = () => {
        createBrowserHistory().goBack()
    }
    const payHandle = ( ) => {
        pay_order({...data, selectedShipping : selectedShipping._id, user:userState.authenticated ? userState.user._id : null}, items, history)
    }

    return(
        <div  className='CheckoutPayment'>
            <h2 className='CheckoutPayment_Title'>There will be payment</h2>
            
            <button onClick={payHandle} 
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

CheckoutPayment.propTypes = {
    history: PropTypes.object,
    pay_order: PropTypes.func,
    data: PropTypes.object,
    shippMethod: PropTypes.string,
    shippFinished: PropTypes.bool,
    dataFinished: PropTypes.bool,
    items: PropTypes.array,
    userState: PropTypes.object
}


export default withRouter(connect(mapStateToProps, {pay_order})(CheckoutPayment))