import React from 'react'
import './CheckoutInput.css'
import PropTypes from 'prop-types';

const CheckoutInput = ({handleChange, handleBlur, values, touched, errors, name, children}) => {
    return(
        <div style={{gridArea : name}} className={`CheckoutInput_Wrapp ${`CheckoutInput_Wrapp_${name}`}`}>
        <input onChange={handleChange}
                onBlur={handleBlur}
                value={values[name]} 
                type='text' 
                className={
                    errors[name] && touched[name]
                      ? "CheckoutInput CheckoutInput_Error"
                      : "CheckoutInput"
                  }
                id={name} 
        />
        <label htmlFor={name} className='CheckoutInput_LabeL'>{children}</label>
    </div>
    )
}
CheckoutInput.propTypes = {
    handleChange: PropTypes.func,
    handleBlur: PropTypes.func,
    values: PropTypes.object,
    touched: PropTypes.object,
    errors: PropTypes.object,
    name: PropTypes.string,
    children: PropTypes.node
}

export default CheckoutInput