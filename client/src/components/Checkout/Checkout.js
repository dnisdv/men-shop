import React, {useState} from 'react'
import './Checkout.css'
import CheckoutDetails from './CheckoutDetails/CheckoutDetails'
import CheckoutBreadcrumbs from './CheckoutBreadcrumbs/CheckoutBreadcrumbs'
import CheckoutShipping from './CheckoutShipping/CheckoutShipping'
import CheckoutPayment from './CheckoutPayment/CheckoutPayment'


const Checkout = ({cart}) => {

    const [bread, setbread] = useState({
        Details: {
            active:true,
            finished:false
        },
        Shipping: {
            active:false,
            finished:false,
        },
        Payment: {
            active:false,
            finished:false
        }
    })

    return(
        <div className='Checkout'>
            <CheckoutBreadcrumbs bread={bread} setbread={setbread} />

            <CheckoutDetails bread={bread} setbread={setbread}/>
            <CheckoutShipping bread={bread} setbread={setbread}/>
            <CheckoutPayment bread={bread} setbread={setbread}/>
        </div>
    )
}

export default Checkout