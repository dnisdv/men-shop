import React from 'react'
import './ProductPage.css'
import ProductBanner from '../../components/Product/ProductBanner/ProductBanner'
import ProductData from '../../components/Product/ProductData/ProductData'
import ProductReviews from '../../components/Product/ProductReviews/ProductReviews'

const ProductPage = () => {
    return(
        <div className='ProductPage'>
            <ProductBanner/>
            <ProductData />
            <ProductReviews />
        </div>
    )
}

export default ProductPage