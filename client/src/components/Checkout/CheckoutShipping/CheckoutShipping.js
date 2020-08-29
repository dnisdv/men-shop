import React,{useEffect} from 'react'
import './CheckoutShipping.css'
import { set_shippMethod } from '../../../actions/checkoutActions'
import { connect } from 'react-redux';
import CheckoutShippingItem from './CheckoutShippingItem/CheckoutShippingItem'
import PropTypes from 'prop-types';
import {getShippingMethods} from '../../../actions/checkoutActions'
import Preloader from '../../preloader/preloader'


const CheckoutShipping = ({handleSubmit,handleBlur, handleChange, errors, touched, getShippingMethods ,checkoutState : {shippMethods, loading}}) => {
    useEffect(() => {
        getShippingMethods()
    }, [getShippingMethods])

    if(loading.shippMethods) return <Preloader />
    return(
        <div className='CheckoutShipping'>
            <h1 className='CheckoutShipping_Title'>Shipping method</h1>

                <div className='CheckoutShipping_List' onSubmit={handleSubmit}>
                    {shippMethods ? shippMethods.map( (i) => {
                        return <CheckoutShippingItem 
                            handleBlur={handleBlur}
                            handleChange={handleChange} 
                            key={i._id}
                            price={i.price} 
                            data={i}
                            name='Shipping' 
                            currency="$"
                            value={i._id}
                            id={i._id} >{i.title}
                        </CheckoutShippingItem>
                    }): ""}

                    {errors.Shipping && touched.Shipping && (<div className='CheckoutShipping_Input_Feedback'>{errors.Shipping}</div>)}
                </div>
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

export default connect(mapStateToProps, {getShippingMethods, set_shippMethod})(CheckoutShipping)
