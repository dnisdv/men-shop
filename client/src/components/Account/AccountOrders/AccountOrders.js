import React from 'react'
import OrderList from './OrderList/OrderList'
import './AccountOrders.css'

import { Link } from 'react-router-dom'

const AccountOrders = () => {
    return(
        <div className='AccountOrders'>
            <div className="AccountOrders_Title_Wrapper">
                <h2 className="AccountOrders_Title1">Your</h2>
                <h2 className="AccountOrders_Title2">Orders</h2>
            </div>
            <OrderList />

            <Link className="AccountOrders_Button" to="/products" >Catalog</Link>
        </div>
    )
}

export default AccountOrders