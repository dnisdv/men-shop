import React from 'react'
import './ProductReviews.css'
import ProductPag from './ReviewsPag/ReviewsPag'
import Reviews from './Reviews/Reviews.js'
import Rate from 'rc-rate'


const ProductReviews = () => {
    return(
        <div className='ProductReviews'>
            <div className='ProductReviews_Container'>

                <div className='ProductReviews_Data'>
                    <h2 className='ProductReviews_Title'>REVIEWS</h2>

                    <div className='ProductReviews_Rate_Data'>
                        <h2 className='ProductReviews_Rate_Data_Rating'>3</h2>
                            <div className='ProductReviews_Rate_Data_Wrapper'>
                                <Rate className='ProductReviews_Rate' 
                                    character={<i className="fas fa-star"></i>}
                                    disabled
                                    defaultValue={3}
                                />
                                <span className='ProductReviews_Rate_Wrapper_Total'>1 REVIEWS</span>
                            </div>
                    </div>


                </div>
                    <Reviews />
                <ProductPag />

                </div>
        </div>
    )
}

export default ProductReviews