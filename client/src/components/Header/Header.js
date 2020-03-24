import React from 'react'
import './Header.css'
import Menu from './Menu/Menu'
import Cart from './Cart/Cart'

import { Link } from "react-router-dom";

const Header = () => {


    return(
        <div className='Header'>
            <Menu  />
            <Link className='Header_Logo_Link' to='/'><div className="Header_Logo">Darwin</div></Link>
            <Cart />   
        </div>  
    )
}

export default Header