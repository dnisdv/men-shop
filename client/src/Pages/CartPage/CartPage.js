import React,{useEffect} from 'react'
import './CartPage.css'
import Cart from '../../components/Cart/Cart'

const CartPage = () => {
    useEffect(() => {  
        window.scrollTo(0, 0)
    })
    return(
        <div className='CartPage'>
            <Cart />
        </div>
    )
}

export default CartPage