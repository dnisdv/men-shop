import React from 'react'
import './Button.css'

const Button = ({variant, children}) => {
    
    switch (variant) {
        case 'primary':
        return (<button className='Button Button-Primary'>{children}</button> )
    
        default:
        return (<button className='Button Button-Primary'>{children}</button> )
    }
}
export default Button