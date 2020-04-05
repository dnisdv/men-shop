import React,{useContext} from 'react'
import './MenuCart.css'
import { Link } from "react-router-dom";

import {ThemeContext} from '../../../Context/theme-context'

const MenuCart = () => {
    const theme = useContext(ThemeContext)
    return(
            <div style={{ color: theme.foreground }} className='MenuCart' data-name='MenuCart' >
                <Link className='MenuCart_Link' to='/cart'>
                    <span className='MenuCart_Title'>Cart</span>
                    <div style={{ backgroundColor: theme.foreground }} className="MenuCart_Wrapper">
                        <div style={{ color: theme.reverseForegroud }} className="MenuCart_Wrapper_Count">0</div>
                    </div>
                </Link>
            </div>
    )
}

export default MenuCart