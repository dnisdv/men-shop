import React, { useEffect } from 'react'
import './ProductPage.css'
import ProductBanner from '../../components/Product/ProductBanner/ProductBanner'
import ProductData from '../../components/Product/ProductData/ProductData'
import ProductReviews from '../../components/Product/ProductReviews/ProductReviews'
import ProductSimilar from '../../components/Product/ProductSimilar/ProductSimilar'

import { connect } from 'react-redux'
import {get_product, get_reviewsByProduct} from '../../actions/productsActions'


const ProductPage = ({history, get_product, get_reviewsByProduct, reviews, products: {product}}) => {

    useEffect(() => {
        if(history.location.pathname.split('/')[2]){
            get_product(history.location.pathname.split('/')[2])
            get_reviewsByProduct(history.location.pathname.split('/')[2])
        }
    }, [get_product, get_reviewsByProduct, history])
    
    if(!product) return 'loading'


    return(
        <div className='ProductPage'>
            <ProductBanner />
            <ProductData />
            <ProductReviews />
            {/* <ProductSimilar /> */}
        </div>
    )
}

const mapStateToProps = (state) => ({
    products : state.products,
    reviews : state.products.reviews
  });

export default connect(mapStateToProps,{get_product, get_reviewsByProduct} )(ProductPage)