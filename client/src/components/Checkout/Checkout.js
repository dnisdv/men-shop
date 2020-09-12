import React from 'react'
import './Checkout.css'
import CheckoutDetails from './CheckoutDetails/CheckoutDetails'
import CheckoutShipping from './CheckoutShipping/CheckoutShipping'
import CheckoutPayment from './CheckoutPayment/CheckoutPayment'
import { Formik } from 'formik';
import * as Yup from 'yup'
import {pay_order} from "../../actions/checkoutActions"
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'

const Checkout = ({pay_order, userState, history,checkout, cartState:{items}}) => {
    const formValidation = () => {
        return Yup.object().shape({
            firstName : Yup.string()
                .required("Required"),
            lastName : Yup.string()
                .required("Required"),
            email : Yup.string()
                .email("This must be an email")
                .required("Required"),
            phone : Yup.number()
                .required("Required"),
            country : Yup.string()
                .required("Required"),
            zip : Yup.number()
                .required("Required"),
            state: Yup.string()
                .required("Required"),
            address : Yup.string()
                .required("Required"),
            city : Yup.string()
                .required("Required"),
            Shipping : Yup.string()
                .required("Required")

        })
    }
    const checkoutState = {
        firstName : '',
        lastName : '',
        company : '',
        email : '',
        phone: '',
        country: '',
        zip: '',
        state: '',
        address : '',
        city : '',
        Shipping: checkout && checkout.selectedShipping ? checkout.selectedShipping :'',
    }

    return(
        <Formik
        initialValues={checkoutState}
        validationSchema={formValidation}
        onSubmit={(values) => {
            pay_order({ ...values, selectedShipping:values.Shipping, user:userState.authenticated ? userState.user._id : null}, items, history)
        }}
        >
        {(props) => (
                <div className='Checkout'>
                    <div className='Checkout_Logo'>MenodL</div>
                    <form className='Checkout_Form' onSubmit={props.handleSubmit}>
                        <CheckoutDetails {...props} />
                        <CheckoutShipping {...props} /> 
                        <CheckoutPayment {...props}/>
                        <input type='submit' className="Checkout_Form_Submit" value='Pay' />
                    </form>
                </div>
        )}
        </Formik>
    )
}


const mapStateToProps = (state) => ({
    checkout: state.checkout,
    cartState: state.cart,
    userState: state.user
})

export default withRouter(connect(mapStateToProps, {pay_order})(Checkout))