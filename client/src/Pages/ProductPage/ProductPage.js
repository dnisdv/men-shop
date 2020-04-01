import React from 'react'
import './ProductPage.css'
import ProductBanner from '../../components/Product/ProductBanner/ProductBanner'
import ProductData from '../../components/Product/ProductData/ProductData'

const ProductPage = () => {
    return(
        <div className='ProductPage'>
            <ProductBanner/>
            <ProductData />
        </div>
    )
}

export default ProductPage