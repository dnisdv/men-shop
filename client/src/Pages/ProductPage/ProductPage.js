import React, { useEffect } from 'react'
import './ProductPage.css'
import ProductBanner from '../../components/Product/ProductBanner/ProductBanner'
import ProductData from '../../components/Product/ProductData/ProductData'
import ProductReviews from '../../components/Product/ProductReviews/ProductReviews'

import { connect } from 'react-redux'
import {get_product, get_reviewsByProduct, clear_product} from '../../actions/productActions'
import PropTypes from 'prop-types';


const ProductPage = ({get_product, match, get_reviewsByProduct, product, clear_product}) => {
    useEffect(() => {  
        window.scrollTo(0, 0)
        if(match.params.id){
            get_product(match.params.id)
            get_reviewsByProduct(match.params.id)
        }
        
        return( () => {
            clear_product()
        })
    }, [get_product, get_reviewsByProduct, match.params.id, clear_product])
    
    if(!product || product === null) return <div className='ProductPageFull'></div>


    return(
        <div className='ProductPage'>
            <ProductBanner />
            <ProductData />
            <ProductReviews />
        </div>
    )
}

const mapStateToProps = (state) => ({
    product : state.product.product,
    reviews : state.product.reviews
  });

ProductPage.propTypes = {
    get_product:PropTypes.func,
    match:PropTypes.object,
    get_reviewsByProduct: PropTypes.func,
    product:PropTypes.object,
    clear_product:PropTypes.func
}

export default connect(mapStateToProps,{get_product, get_reviewsByProduct, clear_product} )(ProductPage)