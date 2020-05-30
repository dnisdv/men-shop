import React from 'react'
import './ProductReviews.css'
import ProductPag from './ReviewsPag/ReviewsPag'
import Reviews from './Reviews/Reviews.js'
import Rate from 'rc-rate'

import {connect} from 'react-redux'


const ProductReviews = ({product: {rate}, reviews}) => {

    if(!reviews) return (<div className='Loadin'>LOADING...</div>)
    return(
        <div className='ProductReviews'>
            <div className='ProductReviews_Container'>

                <div className='ProductReviews_Data'>
                    <h2 className='ProductReviews_Title'>REVIEWS</h2>

                    <div className='ProductReviews_Rate_Data'>
                        <h2 className='ProductReviews_Rate_Data_Rating'>{rate}</h2>
                            <div className='ProductReviews_Rate_Data_Wrapper'>
                                <Rate className='ProductReviews_Rate' 
                                    character={<i className="fas fa-star"></i>}
                                    disabled
                                    defaultValue={rate}
                                />
                                <span className='ProductReviews_Rate_Wrapper_Total'>{reviews.totalReviews} REVIEWS</span>
                            </div>
                    </div>


                </div>
                    <Reviews />
                <ProductPag />

                </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    product : state.products.product,
    reviews: state.products.reviews
  });

export default connect(mapStateToProps)(ProductReviews)