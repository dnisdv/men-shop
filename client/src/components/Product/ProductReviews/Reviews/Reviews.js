import React from 'react'
import './Reviews.css'
import Rate from 'rc-rate'
import ReviewsRep from '../ReviewsRep/ReviewsRep'
import Preloader from '../../../preloader/preloader'

import {connect} from 'react-redux'
import moment from 'moment'

const Reviews = ({reviews, loading}) => {

    if(loading){
        return (
            <ul className='Reviews_List'>
                <Preloader />
            </ul>
        )
    }

    return(
        <React.Fragment>
        {reviews.reviews.length !== 0 ? 
        <ul className='Reviews_List'>
            {reviews.reviews.map(i => (
                <li key={i._id} className='Reviews_List_Item'>
                <div className='Reviews_List_Item_Container'>
                    <div className='Reviews_List_Item_Wrapper'>
                        <div className='Reviews_List_Item_Avatar'>
                            <img src='https://cutt.ly/vtUUUOw' alt='Avatar' className='Reviews_List_Item_AvatarIMG'></img>
                        </div>

                        <div className='Reviews_List_Item_Data'>
                            <span className='Reviews_List_Item_Description_Date'>{moment(i.created_at).format("MMM Do YY")}</span>
                            
                                <h4 className='Reviews_List_Item_Title'>{i.user && i.username.username ? i.user.username : i.username}</h4>
                                    <Rate className='Reviews_List_Item_Data_Rating'
                                        disabled
                                        defaultValue={i.rate}
                                        character={<i className="fas fa-star"></i>}
                                    />
                            <span className='Reviews_List_Item_Description-Mobile'>{i.review}</span>
                        </div>
                    </div>
                        <span className='Reviews_List_Item_Description-Desktop'>{i.review}</span>
                </div>
                <div className='Reviews_List_Item_Actions'>
                    <span className='Reviews_List_Item_Actions_Date'>{moment(i.created_at).format("MMM Do YY")}</span>
                        <ReviewsRep liked={i.liked} reviewId={i._id} likes={i.likes} dislikes={i.dislikes} />
                </div>
            </li>
            ))}

    </ul>
     : <span className='Reviews_NoReviews_Feedback'>No reviews yet</span> }
    </React.Fragment>
    )
}

const mapStateToProps = (state) => ({
    reviews : state.products.reviews,
    loading: state.products.loading.reviews
  });

export default connect(mapStateToProps)(Reviews)