import React, {useEffect} from 'react'
import './Products.css'
import arrowRight from '../../Assests/icons/arrow-right.svg'

import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { get_products, get_productsByCategory, set_activeCategory } from '../../actions/productsActions'
import {withRouter} from 'react-router'

const Products = 
    ({
        get_products,
        get_productsByCategory, 
        history, 
        match,
        location,
        productsState:{products,  category, loading}
    }) => {

    useEffect(() => {
        const categoryPath = history.location.search.split('=')[1]
        if(categoryPath && category){
            if(category.find(i => i.title === categoryPath)){
                get_productsByCategory(categoryPath)
            }
        }else{
            get_products()
        }
    }, [category, get_products, get_productsByCategory, history.location.search])

    const preloader = (
        <div className="cssload-container">
            <div className="cssload-speeding-wheel"></div>
        </div>
    )
    if(loading.product) return preloader

    return(
        <ul className='Products'>
            {products && products.length !== 0 ? products.map( (item) => {
                return(
                <li key={item._id} className='Products_Item'>
                     <div className='Products_Item_IMGWrapper'>
                         <img src={`http://localhost:5000/${item.images[0].path}`} alt='Product' className='Products_Item_IMG' />
                     </div>

                     <div className='Products_Item_Data'>
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


export default withRouter(connect(mapStateToProps,{set_activeCategory, get_productsByCategory, get_products})(Products))

