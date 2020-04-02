import React from 'react'
import './Button.css'
import { Link } from "react-router-dom";

const Button = ({variant, type, children , className, to}) => {

    let Button  
    
    switch (variant) {
        case 'primary':
            Button = (<button className='Button Button-Primary'>{children}</button> )
            break
        case 'secondary':
            Button = (<button className={`Button Button-Secondary ${type === 'black' ? 'ButtonBlack' : 'ButtonWhite'}`}>{children}</button> )
            break
        case 'secondary-mini':
            Button = (<button className={`Button Button-Secondary Button-Secondary-mini ${type === 'black' ? 'ButtonBlack' : 'ButtonWhite'}`}>{children}</button> )
            break
        case 'third':
            Button = (<button className='Button Button-Third'>{children}</button> )
            break
        default:
            Button = (<button className='Button Button-Primary'>{children}</button> )
            break
    }
    return(
        <Link className={className} to={to}>
            {Button}
        </Link>
    )
}
export default Button