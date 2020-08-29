import React from 'react'
import './CheckoutShippingItem.css'
import PropTypes from 'prop-types';
import { set_shippMethod } from '../../../../actions/checkoutActions'
import {connect} from 'react-redux'

const CheckoutShippingItem = ({set_shippMethod, handleBlur,handleChange, name, children, price , id, value, currency ,data, checkoutState: {selectedShipping}}) => {
    return(
        <div className='CheckoutShipping_List_Item'>
        <div className='CheckoutShipping_List_Item_Data'>
            <input value={value} 
                onBlur={handleBlur} 
                onChange={(e) => {
                    handleChange(e);
                    set_shippMethod(data)
                }} 
                checked={selectedShipping? selectedShipping._id === id : false}
                className='CheckoutShipping_List_Item_Data_Input'
                type="radio" id={name + id} 
                name={name} 
                />
            <label htmlFor={name + id} className='CheckoutShipping_List_Item_Title'>{children}</label>
        </div>
        <p className='CheckoutShipping_List_Item_Price'>{price + currency}</p>
    </div>
    )
}

const mapStateToProps = (state) => ({
    checkoutState: state.checkout
})

CheckoutShippingItem.propTypes = {
    handleBlur: PropTypes.func,
    handleChange: PropTypes.func,
    name:PropTypes.string,
    children: PropTypes.node,
    price : PropTypes.number,
    value: PropTypes.string,
    currency: PropTypes.string,
    data: PropTypes.object,
    selectedShipping:PropTypes.object,
    set_shippMethod:PropTypes.func,
    id : PropTypes.string,

}

export default connect(mapStateToProps, {set_shippMethod})(CheckoutShippingItem)