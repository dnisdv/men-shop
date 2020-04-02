import React from 'react'
import './ReviewsRep.css'
import iconLike from '../../../../Assests/icons/icon-like.svg'
import iconDislike from '../../../../Assests/icons/icon-dislike.svg'


const ReviewsRep = () => {
    return(
        <div className='ReviewsRep'>
            <div className='ReviewsRep_Like'>
                <img src={iconLike} alt='LikeIcon' className='ReviewsRep_Like_IMG' ></img>
                <span className='ReviewsRep_Like_Count'>0</span>
            </div>
            <div className='ReviewsRep_Dislike'>
                <img src={iconDislike} alt='DislikeIcon' className='ReviewsRep_Dislike_IMG' ></img>
                <span className='ReviewsRep_Dislike_Count'>0</span>
            </div>
        </div>
    )
}

export default ReviewsRep