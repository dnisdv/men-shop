import React from 'react'
import OrderList from './OrderList/OrderList'
import './AccountOrders.css'


const AccountOrders = () => {
    return(
        <div className='AccountOrders'>
            <h2 className='AccountOrders_Title'>Your orders</h2>
            <OrderList />
        </div>
    )
}

export default AccountOrders