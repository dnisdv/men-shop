import React,{useContext} from 'react'
import './Header.css'

import Menu from './Menu/Menu'
import MenuCart from './MenuCart/MenuCart'

import { Link } from "react-router-dom";
import { ThemeContext } from '../../Context/theme-context'

const Header = ({headerRef}) => {

    const theme = useContext(ThemeContext)

    return(
        
        <div ref={headerRef} className='Header'>
            <Menu  />
            <Link style={{color:theme.foreground}} className='Header_Logo_Link' to='/'><div className="Header_Logo">Darwin</div></Link>
            <MenuCart />   
        </div>  
    )
}

export default Header