import React, {useEffect, useState} from 'react'
import './Products.css'
import arrowRight from '../../Assests/icons/arrow-right.svg'

import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { get_products, get_productsByCategory, set_activeCategory } from '../../actions/productsActions'
import {withRouter} from 'react-router'
import {clear_activeCategory} from '../../actions/productsActions'

import PropTypes from 'prop-types';

const Products = 
    ({
        get_products,
        get_productsByCategory, 
        set_activeCategory,
        history, 
        clear_activeCategory,
        productsState:{products, category, loading}
    }) => {
        const [noItems, setnoItems] = useState("")

    useEffect(() => {
        let timeout = setTimeout( () => {
            setnoItems("Sorry no items")
        },2000)
          

        const categoryPath = history.location.search.split('=')[1]
        if(categoryPath && category){
                const productId = category.find( (i) => i.title === categoryPath)._id
                return get_productsByCategory(productId)
        }else{
            clear_activeCategory()
            get_products()
        }
        return( () => {
            clearTimeout(timeout);
        })
    }, [category, get_products, clear_activeCategory, get_productsByCategory, history.location.search, set_activeCategory])

    if(loading.product) return <div className='Products_Loading'></div>

    return(
        <ul className={`Products ${products && products.length <= 0 ? "mobile-noItems" : ""}`}>
            {products && products.length !== 0  ? products.map( (item) => {
                return(
                <li key={item._id} className='Products_Item'>
                    <Link to={`/product/${item._id}`} className='Products_Item_IMGLink'>
                        <div className='Products_Item_IMGWrapper'>
                                <img src={`/${item.images[0].path}`} alt='Product' className='Products_Item_IMG' />
                        </ div>
                    </Link>
                     <div className='Products_Item_Data'>
                         <h3 className='Products_Item_Data_Title'>{item.title}</h3>
                         <p className='Products_Item_Data_Description'>{item.quick_description}</p>
                         <p className='Products_Item_Data_Price'>{item.price}<span className="currency">$</span></p>

                         <Link to={`/product/${item._id}`} className='Products_Item_Data_Link'>Shop <img className='Products_Item_Data_SVG' src={arrowRight} alt='arrowIcon' /></Link>
                     </div>
                 </li>
                )
            }) : <div className='Products_Loading'>{noItems}</div>}
        </ul>
    )
}

const mapStateToProps = (state) => ({
    productsState : state.products,
    activeCategory : state.products.activeCategory
  });


Products.propTypes = {
    get_products: PropTypes.func,
    get_productsByCategory: PropTypes.func, 
    set_activeCategory : PropTypes.func,
    clear_activeCategory : PropTypes.func,
    productsState : PropTypes.object
}

export default withRouter(connect(mapStateToProps,{set_activeCategory,clear_activeCategory, get_productsByCategory, get_products})(Products))

