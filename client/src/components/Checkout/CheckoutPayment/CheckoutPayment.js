import React,{useEffect} from 'react'
import  {createBrowserHistory} from 'history'
import './CheckoutPayment.css'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'

const CheckoutPayment = ({history, order : { shippFinished}}) => {

    useEffect(() => {
        if(!shippFinished) {
            history.push('/checkout')
        }
    }, [history, shippFinished])
    
    const goBack = () => {
        createBrowserHistory().goBack()
    }
    if(!shippFinished) return (<span></span>)


    return(
        
        <div  className='CheckoutPayment'>
            <h2 className='CheckoutPayment_Title'>There will be payment</h2>

            <div className='CheckoutDetails_Actions'>
            <span onClick={goBack} className='CheckoutPayment_Actions_Back'>Back to shipping</span>
            {/* <button type='submit' className='CheckoutDetails_Actions_Button'>Next</button> */}
        </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    order: state.order
})


export default withRouter(connect(mapStateToProps, {})(CheckoutPayment))