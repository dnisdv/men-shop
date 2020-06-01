import React from 'react'
import './CheckoutDetails.css'
import { Formik } from 'formik';
import { Link } from 'react-router-dom'
import * as Yup from 'yup'
import {withRouter} from 'react-router-dom'

import { set_orderData } from '../../../actions/orderActions'
import { connect } from 'react-redux';

import CheckoutDetailsItem from './CheckoutDetailsItem/CheckoutDetailsItem'

const CheckoutDetails = ({history, orderState, set_orderData}) => {


    const formValidation = () => {
        return Yup.object().shape({
            firstName : Yup.string()
                .required("Required"),
            lastName : Yup.string()
                .required("Required"),
            company : Yup.string()
                .required("Required"),
            email : Yup.string()
                .email("This must be an email")
                .required("Required"),
            phone : Yup.number()
                .required("Required"),
            country : Yup.string()
                .required("Required"),
            zip : Yup.string()
                .required("Required"),
            state: Yup.string()
                .required("Required"),
            address : Yup.string()
                .required("Required"),
            city : Yup.string()
                .required("Required")
        })
    }

    return(
        <div className='CheckoutDetails'>
            <h2 className='CheckoutDetails_Title'>Details</h2>
            <Formik
            initialValues={orderState}
            validationSchema={formValidation}
            onSubmit={(values) => {
                set_orderData(values)
                history.push('/checkout/shipping')
            }}
            >
            {(props) => (
                <form className='CheckoutDetails_Wrapper' onSubmit={props.handleSubmit}>
                    <CheckoutDetailsItem {...props} name='firstName'>First Name</CheckoutDetailsItem>
                    <CheckoutDetailsItem {...props} name='lastName'>Last Name</CheckoutDetailsItem>
                    <CheckoutDetailsItem {...props} name='company'>Company</CheckoutDetailsItem>
                    <CheckoutDetailsItem {...props} name='email'>Email</CheckoutDetailsItem>
                    <CheckoutDetailsItem {...props} name='phone'>Phone</CheckoutDetailsItem>
                    <CheckoutDetailsItem {...props} name='country'>Country</CheckoutDetailsItem>
                    <CheckoutDetailsItem {...props} name='zip'>Zip</CheckoutDetailsItem>
                    <CheckoutDetailsItem {...props} name='state'>State</CheckoutDetailsItem>
                    <CheckoutDetailsItem {...props} name='address'>Address</CheckoutDetailsItem>
                    <CheckoutDetailsItem {...props} name='city'>City</CheckoutDetailsItem>

                    <div className='CheckoutDetails_Actions'>
                        <Link className='CheckoutDetails_Actions_Back' to='/cart'>Back to cart</Link>
                        <button type='submit' className='CheckoutDetails_Actions_Button'>Next</button>
                    </div>
                </form>
            )}
            </Formik>
        </div>
    )
}


const mapStateToProps = (state) => ({
    orderState : state.order.data
  });

export default withRouter(connect(mapStateToProps, {set_orderData})(CheckoutDetails))