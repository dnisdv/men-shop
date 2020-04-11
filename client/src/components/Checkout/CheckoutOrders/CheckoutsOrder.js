import React from 'react'
import './CheckoutsOrder.css'
import CheckoutTotal from './CheckoutTotal/CheckoutTotal'

const CheckoutOrders = () => {
    return(
        <div className='CheckoutOrders'>
            <h2 className='CheckoutOrders_Title'>Your order</h2>
            <ul className='CheckoutOrders_List'>
                <li className='CheckoutOrders_List_Item'>
                    <img src='https://cutt.ly/9tGp035' alt='productIMG' className='CheckoutOrders_List_Item_IMG' />
                    <div className='CheckoutOrders_List_Item_Data'>
                        <div className='CheckoutOrders_List_Item_DataFirst'>
                            <h2 className='CheckoutOrders_List_Item_DataFirst_Title'>Some book 
                                <span className='CheckoutOrders_List_Item_Units'>x7</span>
                            </h2>
                            <div className='CheckoutOrders_List_Item_DataFirst_Addition'>
                                <p className='CheckoutOrders_List_Item_DataFirst_Addition_Size'>XS</p>
                                <span className='CheckoutOrders_List_Item_DataFirst_Addition_delimiter'>/</span>
                                <p className='CheckoutOrders_List_Item_DataFirst_Addition_Color'>RED</p>
                            </div>
                            <p className='CheckoutOrders_List_Item_DataFirst_ShipDate'>Ships today</p>
                        </div>

                        <p className='CheckoutOrders_List_Item_Data_Price'>50$</p>
                    </div>
                </li>

                <li className='CheckoutOrders_List_Item'>
                    <img src='https://cutt.ly/9tGp035' alt='productIMG' className='CheckoutOrders_List_Item_IMG' />
                    <div className='CheckoutOrders_List_Item_Data'>
                        <div className='CheckoutOrders_List_Item_DataFirst'>
                            <h2 className='CheckoutOrders_List_Item_DataFirst_Title'>Some book 
                                <span className='CheckoutOrders_List_Item_Units'>x7</span>
                            </h2>
                            <div className='CheckoutOrders_List_Item_DataFirst_Addition'>
                                <p className='CheckoutOrders_List_Item_DataFirst_Addition_Size'>XS</p>
                                <span className='CheckoutOrders_List_Item_DataFirst_Addition_delimiter'>/</span>
                                <p className='CheckoutOrders_List_Item_DataFirst_Addition_Color'>RED</p>
                            </div>
                            <p className='CheckoutOrders_List_Item_DataFirst_ShipDate'>Ships today</p>
                        </div>

                        <p className='CheckoutOrders_List_Item_Data_Price'>50$</p>
                    </div>
                </li>

                <li className='CheckoutOrders_List_Item'>
                    <img src='https://cutt.ly/9tGp035' alt='productIMG' className='CheckoutOrders_List_Item_IMG' />
                    <div className='CheckoutOrders_List_Item_Data'>
                        <div className='CheckoutOrders_List_Item_DataFirst'>
                            <h2 className='CheckoutOrders_List_Item_DataFirst_Title'>Some book 
                                <span className='CheckoutOrders_List_Item_Units'>x7</span>
                            </h2>
                            <div className='CheckoutOrders_List_Item_DataFirst_Addition'>
                                <p className='CheckoutOrders_List_Item_DataFirst_Addition_Size'>XS</p>
                                <span className='CheckoutOrders_List_Item_DataFirst_Addition_delimiter'>/</span>
                                <p className='CheckoutOrders_List_Item_DataFirst_Addition_Color'>RED</p>
                            </div>
                            <p className='CheckoutOrders_List_Item_DataFirst_ShipDate'>Ships today</p>
                        </div>

                        <p className='CheckoutOrders_List_Item_Data_Price'>50$</p>
                    </div>
                </li>

            </ul>
            <CheckoutTotal />
        </div>
    )
}

export default CheckoutOrders