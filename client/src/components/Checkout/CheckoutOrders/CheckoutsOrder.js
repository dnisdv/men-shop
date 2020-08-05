import React from 'react'
import './CheckoutsOrder.css'
import CheckoutTotal from './CheckoutTotal/CheckoutTotal'
import {connect} from 'react-redux'


const CheckoutOrders = ({cart}) => {
    return(
        <div className='CheckoutOrders'>
            <h2 className='CheckoutOrders_Title'>Your order</h2>
            <ul className='CheckoutOrders_List'>
                {cart ? cart.map( (i) => (
                    <li key={i.id} className='CheckoutOrders_List_Item'>
                    <img src={`http://localhost:5000/${i.image}`} alt='productIMG' className='CheckoutOrders_List_Item_IMG' />
                    <div className='CheckoutOrders_List_Item_Data'>
                        <div className='CheckoutOrders_List_Item_DataFirst'>
                            <h2 className='CheckoutOrders_List_Item_DataFirst_Title'>{i.title}
                            <span className='CheckoutOrders_List_Item_Units'>x{i.count}</span>
                            </h2>
                            <div className='CheckoutOrders_List_Item_DataFirst_Addition'>
                                {Object.values(i.sku).join('/')}
                            </div>
                                {i.shipping_price > 0 ? 
                                <p className='CheckoutOrders_List_Item_DataFirst_ShipPrice'>{i.shipping_price}<span className='Currency'>$</span>
                                </p>  : 'Ships today'}
                        </div>

                        <p className='CheckoutOrders_List_Item_Data_Price'>{i.price}<span className='Currency'>$</span></p>
                    </div>
                </li>
                )) : null}
            </ul>
            <CheckoutTotal />
        </div>
    )
}

const mapStateToProps = (state) => ({
    cart : state.cart.items,
    loading: state.cart.loading
});

export default connect(mapStateToProps)(CheckoutOrders)