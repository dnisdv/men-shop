import React,{useEffect} from 'react'
import './OrderList.css'
import {connect} from 'react-redux'
import {get_orders} from '../../../../actions/orderActions'

const OrderList = ({orders, get_orders}) => {

    useEffect(() => {
        get_orders()
    }, [get_orders])

    return(
        <div className='OrderList'>
            
            <table class="Order">
                <thead>
                    <tr>
                        <th className="OrderTable_Product">Product</th>
                        <th className="OrderTable_Name">Name</th>
                        <th className="OrderTable_Sku">Sku</th>
                        <th className="OrderTable_Count">Count</th>
                        <th className="OrderTable_Price">Price</th>
                        <th className="OrderTable_State">State</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders && orders.length > 0 ? orders.map( (k) => {
                            return k.products.map( (i) => {
                            return(                    
                                <tr className='OrderList_Table_TR'>
                                    <td><img alt="OrderImage" className="OrderList_Table_Image" src={`http://localhost:5000/${i.productID.images[0].path}`} /></td>
                                    <td>{i.productID.title}</td>
                                    <td>{i.sku ? Object.values(i.sku).join('/') : ""}</td>
                                    <td>{i.count}</td>
                                    <td>{i.productID.price}$</td>
                                    <td>{k.status ? k.status.label : "in progress"}</td>
                                </tr>)
                            })
                        }) : <tr><td className='OrderList_Table_NoOrders-Feedback' colspan='6'>No orders yet</td></tr>
                    }
                </tbody>
            </table>

        </div>
    )
}

const mapStateToProps = (state) => ({
    orders : state.order.orders
})

export default connect(mapStateToProps,{get_orders})(OrderList)