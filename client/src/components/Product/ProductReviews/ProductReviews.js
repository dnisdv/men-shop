import React from 'react'
import './ProductReviews.css'
import Reviews from './Reviews/Reviews.js'
import Rate from 'rc-rate'
import Pagination from '../../Pagination/Pagination'

import {connect} from 'react-redux'

import {get_reviewsByProduct} from '../../../actions/productsActions'

const ProductReviews = ({product: {rate , _id}, get_reviewsByProduct, reviews}) => {

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
                    <Pagination 
                        items={reviews.reviews} 
                        totalPages={reviews.totalPages}
                        onChange={(e) => get_reviewsByProduct(_id, e.selected)}
                    />

                </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    product : state.products.product,
    reviews: state.products.reviews
  });

export default connect(mapStateToProps, {get_reviewsByProduct})(ProductReviews)