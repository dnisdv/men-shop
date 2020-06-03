import React,{useEffect} from 'react'
import './ProductsPage.css'

import Products from '../../components/Products/Products'
import ProductsCatalog from '../../components/Products/ProductsCatalog/ProductsCatalog'

import {connect} from 'react-redux'

const ProductsPage = () => {
        
    useEffect(() => {  
        window.scrollTo(0, 0)
    }, [])


    return(
        <div className='ProductsPage_Wrapper'>
            <div className='ProductsPage'>
                <ProductsCatalog />
                <div className='Products_Wrapper'>
                    <Products />
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    productsItems : state.products.products,
    products : state.products
})

export default connect(mapStateToProps)(ProductsPage)

