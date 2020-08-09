import React,{useState} from 'react'
import './ReviewsRep.css'
import { like_review } from '../../../../actions/productActions'
import {connect} from 'react-redux'
import PropTypes from 'prop-types';


const ReviewsRep = ({likes, reviewId, liked, like_review, user : {authenticated}}) => {

    const [like, setlike] = useState(likes)
    const [isLiked, setLiked] = useState(liked)

    const likeHandle = () => {
        if(!authenticated) return alert("Log in to like")
        if(isLiked){
            setlike(like -1)
            like_review(reviewId)
            return setLiked(!isLiked)
        }
        like_review(reviewId)
        setlike(like + 1)
        setLiked(true)
    }
    return(
        <div className='ReviewsRep'>
            <div onClick={likeHandle} className={`ReviewsRep_Like ${isLiked ? "ReviewsRep_Like_Liked" : ''} `}>
            <i className="far fa-heart"></i>
                <span className='ReviewsRep_Like_Count'>{like}</span>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    user : state.user
})

ReviewsRep.propTypes = {
    likes:PropTypes.number,
    reviewId: PropTypes.string,
    liked:PropTypes.bool,
    like_review: PropTypes.func,
    authenticated: PropTypes.bool,
}

export default connect(mapStateToProps , {like_review})(ReviewsRep)