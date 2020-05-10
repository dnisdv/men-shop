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
        <ul className='Reviews_List'>
            { reviews.reviews ? reviews.reviews.map(i => (
                <li className='Reviews_List_Item'>
                <div className='Reviews_List_Item_Container'>
                    <div className='Reviews_List_Item_Wrapper'>
                        <div className='Reviews_List_Item_Avatar'>
                            <img src='https://cutt.ly/vtUUUOw' alt='Avatar' className='Reviews_List_Item_AvatarIMG'></img>
                        </div>

                        <div className='Reviews_List_Item_Data'>
                            <span className='Reviews_List_Item_Description_Date'>{moment(i.created_at).format("MMM Do YY")}</span>
                            
                                <h4 className='Reviews_List_Item_Title'>{i.user.username}</h4>
                                    <Rate className='Reviews_List_Item_Data_Rating'
                                        disabled
                                        defaultValue={i.rate}
                                        character={<i className="fas fa-star"></i>}
                                    />
                            <span className='Reviews_List_Item_Description-Mobile'>{i.description}</span>
                        </div>
                    </div>
                        <span className='Reviews_List_Item_Description-Desktop'>{i.description}</span>
                </div>
                <div className='Reviews_List_Item_Actions'>
                    <span className='Reviews_List_Item_Actions_Date'>{moment(i.created_at).format("MMM Do YY")}</span>
                        <ReviewsRep likes={i.likes} dislikes={i.dislikes} />
                </div>
            </li>
            )) : null}

    </ul>
    )
}

const mapStateToProps = (state) => ({
    reviews : state.products.reviews,
    loading: state.products.loading.reviews
  });

export default connect(mapStateToProps)(Reviews)