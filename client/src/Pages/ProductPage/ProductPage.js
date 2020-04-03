import React from 'react'
import './ProductPage.css'
import ProductBanner from '../../components/Product/ProductBanner/ProductBanner'
import ProductData from '../../components/Product/ProductData/ProductData'
import ProductReviews from '../../components/Product/ProductReviews/ProductReviews'
import ProductSimilar from '../../components/Product/ProductSimilar/ProductSimilar'

const ProductPage = () => {
    return(
        <div className='ProductPage'>
            <ProductBanner/>
            <ProductData />
            <ProductReviews />
            <ProductSimilar />
        </div>
    )
}

export default ProductPage