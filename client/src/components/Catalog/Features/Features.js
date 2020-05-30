import React,{useEffect} from 'react'
import './Features.css'
import {Link} from 'react-router-dom'
import Preloader from '../../preloader/preloader'

import {connect} from 'react-redux'
import {get_banners} from '../../../actions/bannerActions'
import {set_activeCategory} from '../../../actions/productsActions'

const Features = ({get_banners, set_activeCategory, banner :{ banners }}) => {

    useEffect(() => {
        get_banners()
    }, [get_banners])

    const selectCategory = (id) => {
        set_activeCategory(id)
    }   

    if(!banners) return <Preloader />
    return(
        <ul className='Features'>
            { banners.length > 0 ? banners.map( (i, index) => {
                return (
                    <li
                    key={i._id}
                    onClick={(e) => selectCategory(i.category._id)}
                    className={`Features_Item Features_Item-${index}`}>
                    <Link to={`/products?category=${i.category.title}`}>
                        <img src={i.image} alt='backpack' className={`Features_Item_Img Features_Item_Img-${index}`} />
                        <h2 className='Features_Item_Title'>{i.title}</h2>
                    </Link>
                </li>
                )
            }) : null}

        </ul>
    )
}

const mapStateToProps = (state) => ({
    banner : state.banner,
    products : state.products
  });

export default connect(mapStateToProps, {set_activeCategory, get_banners})(Features)