import React,{useContext} from 'react'
import './Header.css'

import Menu from './Menu/Menu'
import Cart from './Cart/Cart'

import { Link } from "react-router-dom";
import { ThemeContext } from '../../Context/theme-context'

const Header = () => {

    const theme = useContext(ThemeContext)

    return(
        
        <div className='Header'>
            <Menu  />
            <Link style={{color:theme.foreground}} className='Header_Logo_Link' to='/'><div className="Header_Logo">Darwin</div></Link>
            <Cart />   
        </div>  
    )
}

export default Header