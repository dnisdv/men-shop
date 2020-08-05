import React,{useEffect} from 'react'
import './OrderList.css'
import {connect} from 'react-redux'
import {get_orders} from '../../../../actions/orderActions'
import Preloader from '../../../preloader/preloader'

const OrderList = ({orders, get_orders}) => {

    useEffect(() => {
        get_orders()
    }, [get_orders])

    return(
        <ul className='OrderList'>
    {
    orders && orders.length > 0 ? orders.map( (k) => {
        return k.products.map( (i) => {
        return(                    
            <li key={i._id} className='OrderList_Item'>
                <div className='OrderList_Item_Main'>
                    <div className='OrderList_Item_IMG_Wrapper'>
                        <img src={`http://localhost:5000/${i.productID.images[0].path}`}  className='OrderList_Item_IMG' alt='Product'/>
                    </div>
                    <h2 className='OrderList_Item_Main_Title-Mobile'>{i.productID.title}</h2>
                </div>


                <div className='OrderList_Item_Data'>
                        <h3 className='OrderList_Item_Data_Title'>{i.productID.title}</h3>
                        <div className='OrderList_Item_Data_Char'>
                            <ul className='OrderList_Item_Data_Char_List'>
                                <li className='OrderList_Item_Data_Char_List_Item'>
                                    <span className='OrderList_Item_Data_Char_List_Item_Title'>Count :</span>
                                    <span className='OrderList_Item_Data_Char_List_Item_Value'>{i.count}</span>
                                </li>
                                {Object.keys(i.sku).map((key, index) => {
                                    return (
                                    <li key={index} className='OrderList_Item_Data_Char_List_Item'>
                                        <span className='OrderList_Item_Data_Char_List_Item_Title'>{key} :</span>
                                        <span className='OrderList_Item_Data_Char_List_Item_Value'>{i.sku[key]}</span>
                                    </li>
                                    )
                                })}
                            </ul>
                            <span className='OrderList_Item_Data_FullPrice'>Fullprice: {k.fullPrice}<span className='currency'>$</span></span>
                        </div>
                </div>
                <div className="OrderList_Item_Status">
                    <span className='OrderList_Item_Status_Preholder'>Status:</span>
                    <span className='OrderList_Item_Status_Title'>In process</span>
                </div>
            </li>)
        })
    }) : <Preloader />
}
            
            
        </ul>
    )
}

const mapStateToProps = (state) => ({
    orders : state.order.orders
})

export default connect(mapStateToProps,{get_orders})(OrderList)


