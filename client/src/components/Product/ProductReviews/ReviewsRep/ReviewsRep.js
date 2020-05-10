import React from 'react'
import './ReviewsRep.css'
import iconLike from '../../../../Assests/icons/icon-like.svg'


const ReviewsRep = ({likes, dislikes}) => {
    return(
        <div className='ReviewsRep'>
            <div className='ReviewsRep_Like'>
                <img src={iconLike} alt='LikeIcon' className='ReviewsRep_Like_IMG' ></img>
                <span className='ReviewsRep_Like_Count'>{likes}</span>
            </div>
        </div>
    )
}

export default ReviewsRep