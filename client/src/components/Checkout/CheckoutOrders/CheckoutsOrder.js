import React from 'react'
import './CheckoutsOrder.css'
import CheckoutTotal from './CheckoutTotal/CheckoutTotal'
import {connect} from 'react-redux'
import PropTypes from 'prop-types';


const CheckoutOrders = ({cart}) => {
    return(
        <div className='CheckoutOrders'>
            <h2 className='CheckoutOrders_Title'>Your order</h2>
            <ul className='CheckoutOrders_List'>
                {cart ? cart.map( (i) => (
                    <li key={i.id} className='CheckoutOrders_List_Item'>
                    <img src={`/${i.image}`} alt='productIMG' className='CheckoutOrders_List_Item_IMG' />
                    <div className='CheckoutOrders_List_Item_Data'>
                        <div className='CheckoutOrders_List_Item_DataFirst'>
                            <h2 className='CheckoutOrders_List_Item_DataFirst_Title'>{i.title}
                            <span className='CheckoutOrders_List_Item_Units'>x{i.count}</span>
                            </h2>
                            <div className='CheckoutOrders_List_Item_DataFirst_Addition'>
                                {Object.values(i.sku).join('/')}
                            </div>
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
});
CheckoutOrders.propTypes = {
    cart: PropTypes.array
}

export default connect(mapStateToProps)(CheckoutOrders)