import React, { useEffect } from 'react'
import './ProductPage.css'
import ProductBanner from '../../components/Product/ProductBanner/ProductBanner'
import ProductData from '../../components/Product/ProductData/ProductData'
import ProductReviews from '../../components/Product/ProductReviews/ProductReviews'
// import ProductSimilar from '../../components/Product/ProductSimilar/ProductSimilar'

import Preloader from '../../components/preloader/preloader'

import { connect } from 'react-redux'
import {get_product, get_reviewsByProduct} from '../../actions/productsActions'


const ProductPage = ({history, get_product, match, location, get_reviewsByProduct, reviews, products: {loading, product}}) => {

    useEffect(() => {  
        window.scrollTo(0, 0)
        if(match.params.id){
            get_product(match.params.id)
            get_reviewsByProduct(match.params.id)
        }
    }, [get_product, get_reviewsByProduct, history, location, match])
    
    if(!product) return <div className='ProductPage ProductPage-Preloader'><Preloader /></div>


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