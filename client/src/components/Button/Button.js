import React from 'react'
import './Button.css'
import {Link} from 'react-router-dom'

const Button = ({to, buttonType='black', styles, children, ...rest}) => {
    if(to){
        return <Link className='Button_Link_Wrapper' to={to} ><button {...rest} className={`Button Button-${buttonType}`} style={styles}>{children}</button></Link>
    }
    return(
        <button {...rest} className={`Button Button-${buttonType}`} style={styles}>{children}</button>
    )
}

export default Button