import React from 'react'
import './Button.css'
import { Link } from "react-router-dom";

const Button = ({variant, children , classN, to}) => {

    let Button  
    
    switch (variant) {
        case 'primary':
            Button = (<button className='Button Button-Primary'>{children}</button> )
            break
        case 'secondary':
            Button = (<button className='Button Button-Secondary'>{children}</button> )
            break
        default:
            Button = (<button className='Button Button-Primary'>{children}</button> )
            break
    }
    return(
        <Link className={classN} to={to}>
            {Button}
        </Link>
    )
}
export default Button