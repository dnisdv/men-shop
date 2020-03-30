import React,{useContext} from 'react'
import './Cart.css'
import { Link } from "react-router-dom";

import {ThemeContext} from '../../../Context/theme-context'

const Cart = () => {
    const theme = useContext(ThemeContext)
    return(
            <div style={{ color: theme.foreground }} className='Cart' data-name='Cart' >
                <Link className='Cart_Link' to='/cart'>
                    <span className='Cart_Title'>Cart</span>
                    <div style={{ backgroundColor: theme.foreground }} className="CartWrapper">
                        <div style={{ color: theme.reverseForegroud }} className="CartWrapper_Count">0</div>
                    </div>
                </Link>
            </div>
    )
}

export default Cart