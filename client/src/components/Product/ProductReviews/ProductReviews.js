import React from 'react'
import './ProductReviews.css'
import Reviews from './Reviews/Reviews.js'
import Rate from 'rc-rate'
import Pagination from '../../Pagination/Pagination'
import CreateReview from './CreateReview/CreateReview'

import {connect} from 'react-redux'
import {get_reviewsByProduct} from '../../../actions/productActions'
import PropTypes from 'prop-types';


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
                    { reviews && reviews.totalReviews > 3 ?
                    <Pagination 
                        items={reviews.reviews} 
                        totalPages={reviews.totalPages}
                        onChange={(e) => get_reviewsByProduct(_id, e.selected)}
                    /> : null
                    }

                    <CreateReview />

                </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    product : state.product.product,
    reviews: state.product.reviews
  });

ProductReviews.propTypes = {
    rate:PropTypes.number,
    _id :PropTypes.number,
    get_reviewsByProduct:PropTypes.func,
    reviews:PropTypes.object
}

export default connect(mapStateToProps, {get_reviewsByProduct})(ProductReviews)