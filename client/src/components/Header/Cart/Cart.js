import React from 'react'
import './Cart.css'
import { Link } from "react-router-dom";

const Cart = () => {
    return(
            <div className='Cart' data-name='Cart' >
                <Link className='Cart_Link' to='/cart'>
                    <span className='Cart_Title'>Cart</span>
                    <div className="CartWrapper">
                        <div className="CartWrapper_Count">0</div>
                    </div>
                </Link>
            </div>
    )
}

export default Cart