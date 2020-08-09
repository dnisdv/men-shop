import React,{useEffect} from 'react'
import './CheckoutShipping.css'
import * as Yup from 'yup'
import { Formik } from 'formik';
import {withRouter} from 'react-router-dom'
import { set_shippMethod } from '../../../actions/checkoutActions'
import { connect } from 'react-redux';
import CheckoutShippingItem from './CheckoutShippingItem/CheckoutShippingItem'
import PropTypes from 'prop-types';
import {getShippingMethods} from '../../../actions/checkoutActions'
import Preloader from '../../preloader/preloader'
import  {createBrowserHistory} from 'history'


const CheckoutShipping = ({history, getShippingMethods ,checkoutState : {completed, selectedShipping, shippMethods, loading}}) => {
    useEffect(() => {
        if(!completed.data){
            history.push('/checkout')
        }
        getShippingMethods()
    }, [getShippingMethods, history, completed])

    const formValidation = () => {
        return Yup.object().shape({
            Shipping : Yup.string()
                .required("Required"),
        })
    }    
    const goBack = () => {
        createBrowserHistory().goBack()
    }

    if(loading.shippMethods) return <Preloader />
    return(
        <div className='CheckoutShipping'>
            <h1 className='CheckoutShipping_Title'>Shipping method</h1>
            <Formik
                initialValues={{Shipping : selectedShipping ? selectedShipping._id : ""}}
                validationSchema={formValidation}
                onSubmit={(values) => {
                    history.push('/checkout/payment')
                }}>
            {(props) => (
                <form className='CheckoutShipping_List' onSubmit={props.handleSubmit}>
                    {shippMethods ? shippMethods.map( (i) => {
                        return <CheckoutShippingItem {...props} 
                            key={i._id}
                            price={i.price} 
                            data={i}
                            name='Shipping' 
                            currency="$"
                            value={i._id}
                            id={i._id} >{i.title}
                        </CheckoutShippingItem>
                    }): ""}

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
    checkoutState: state.checkout
    
})

CheckoutShipping.propTypes = {
    history: PropTypes.object,
    loading_shipp: PropTypes.bool,
    dataFinished: PropTypes.bool,
    set_shippMethod: PropTypes.func,
    getShippingMethods: PropTypes.func,
    completed:PropTypes.object,
    shippMethods:PropTypes.array
}

export default withRouter(connect(mapStateToProps, {getShippingMethods, set_shippMethod})(CheckoutShipping))

//TODO add default shippMethod
