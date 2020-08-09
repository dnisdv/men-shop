import React from 'react'
import './CheckoutDetailsItem.css'
import PropTypes from 'prop-types';


const CheckoutDetailsItem = ({handleChange, handleBlur, values, touched, errors, name, children}) => {
    return(
        <div className={`CheckoutDetails_Input_Wrapp 
        ${name === "zip" ? "CheckoutDetails_Zipcode" : ''}
        ${name === "state" ? "CheckoutDetails_State" : ''}
        `}>
        <input onChange={handleChange}
                onBlur={handleBlur}
                value={values[name]} 
                type='text' 
                className={
                    errors[name] && touched[name]
                      ? "CheckoutDetails_Input CheckoutDetails_Input_Error"
                      : "CheckoutDetails_Input"
                  }
                id={name} 
        />
        <label htmlFor={name} className='CheckoutDetails_Input_LabeL'>{children}</label>
    </div>
    )
}
CheckoutDetailsItem.propTypes = {
    handleChange: PropTypes.func,
    handleBlur: PropTypes.func,
    values: PropTypes.object,
    touched: PropTypes.object,
    errors: PropTypes.object,
    name: PropTypes.string,
    children: PropTypes.node
}

export default CheckoutDetailsItem