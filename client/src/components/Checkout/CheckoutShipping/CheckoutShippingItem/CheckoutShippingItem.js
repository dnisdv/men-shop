import React from 'react'
import './CheckoutShippingItem.css'
import {connect} from 'react-redux'


const CheckoutShippingItem = ({handleBlur,handleChange, name, children, price , id, shippMethod}) => {
    return(
        <div className='CheckoutShipping_List_Item'>
        <div className='CheckoutShipping_List_Item_Data'>
            <input value="Standart" 
                onBlur={handleBlur} 
                onChange={handleChange} 
                className='Checkput'
                type="radio" id={name + id} 
                name={name} 
                />
            <label htmlFor={name + id} className='CheckoutShipping_List_Item_Title'>{children}</label>
        </div>
        <p className='CheckoutShipping_List_Item_Price'>{price}</p>
    </div>
    )
}


const mapStateToProps = (state) => ({
    shippMethod : state.order.shippMethod
});

export default connect(mapStateToProps)(CheckoutShippingItem)