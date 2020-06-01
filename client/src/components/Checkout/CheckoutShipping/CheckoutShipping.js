import React,{useEffect} from 'react'
import './CheckoutShipping.css'
import * as Yup from 'yup'
import { Formik } from 'formik';
import {withRouter} from 'react-router-dom'
import { set_shippMethod } from '../../../actions/orderActions'
import { connect } from 'react-redux';
import CheckoutShippingItem from './CheckoutShippingItem/CheckoutShippingItem'

import { createBrowserHistory } from 'history'

const CheckoutShipping = ({history, loading_shipp ,order : {dataFinished}, set_shippMethod}) => {
    useEffect(() => {
        if(!dataFinished) {
            history.push('/checkout')
        }
    }, [dataFinished, history, loading_shipp])


    const formValidation = () => {
        return Yup.object().shape({
            Shipping : Yup.string()
                .required("Required"),
        })
    }    
    const goBack = () => {
        createBrowserHistory().goBack()
    }
    if(!dataFinished) return (<span></span>)


    return(
        <div className='CheckoutShipping'>
            <h1 className='CheckoutShipping_Title'>Shipping method</h1>

            <Formik
                initialValues={{Shipping : ""}}
                validationSchema={formValidation}
                onSubmit={(values) => {
                    set_shippMethod(values.Shipping)
                    history.push('/checkout/payment')
                }}>
            {(props) => (
                <form className='CheckoutShipping_List' onSubmit={props.handleSubmit}>
                    <CheckoutShippingItem {...props} 
                        price='free' 
                        name='Shipping' 
                        id={1} >10 - 20 Standart Shipping
                    </CheckoutShippingItem>

                    <CheckoutShippingItem {...props} 
                        price='5.00' 
                        name='Shipping' 
                        id={2} >2 - 3 Bussines day shipping
                    </CheckoutShippingItem>
                    {props.errors.Shipping && props.touched.Shipping && (<div className='CheckoutShipping_Input_Feedback'>{props.errors.Shipping}</div>)}

                    <div className='CheckoutShipping_Actions'>
                        <span onClick={goBack} className='CheckoutShipping_Actions_Back'>Back to Details</span>
                        <button type='submit' className='CheckoutShipping_Actions_Button'>Next</button>
                    </div>
                </form>
            )}
            </Formik>
        </div>
    )
}

const mapStateToProps = (state) => ({
    order: state.order
})


export default withRouter(connect(mapStateToProps, {set_shippMethod})(CheckoutShipping))