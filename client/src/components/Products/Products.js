import React, {useEffect} from 'react'
import './Products.css'
import arrowRight from '../../Assests/icons/arrow-right.svg'

import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { get_products } from '../../actions/productsActions'

const Products = ({get_products, productsState:{products, loading}}) => {

    useEffect(() => {
        get_products()
    }, [get_products])

    const preloader = (
        <div className="cssload-container">
            <div className="cssload-speeding-wheel"></div>
        </div>
    )
    if(loading) return preloader

    return(
        <ul className='Products'>
            {products && products.length !== 0 ? products.map( (item) => {
                return(
                <li key={item._id} className='Products_Item'>
                     <div className='Products_Item_IMGWrapper'>
                         <img src={item.images[0].src} alt='Product' className='Products_Item_IMG' />
                     </div>

                     <div className='Products_Item_Data'>
                         <span className='Products_Item_Data_Category'>{item.category.title}</span>
                         <h3 className='Products_Item_Data_Title'>{item.title}</h3>
                         <p className='Products_Item_Data_Description'>{item.quick_description}</p>
                         <Link to={`/product/${item._id}`} className='Products_Item_Data_Link'>Shop <img src={arrowRight} alt='arrowIcon' /></Link>
                         <p className='Products_Item_Data_Price'>{item.price}<span className="currency">$</span></p>
                     </div>
                 </li>
                )
            }) : <span className="Products_Feedback">sorry, no products yet</span>}
           
        </ul>
    )
}

const mapStateToProps = (state) => ({
    productsState : state.products
  });


export default connect(mapStateToProps,{get_products})(Products)

