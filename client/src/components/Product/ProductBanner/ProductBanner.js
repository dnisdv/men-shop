import React from 'react'
import './ProductBanner.css'
import BannerData from './BannerData/BannerData'

import { Link } from 'react-router-dom'

const ProductBanner = () => {
    return(
        <React.Fragment>

            <div className='ProductBanner'>
                <div className='ProductBanner_WrapperIMG'>
                    
                    <img className='ProductBanner_IMG' alt='ProductImage' src='https://cutt.ly/ltT1kit'></img>
                </div>

                <BannerData />
            </div>

            <Link to='/cart' className='ProductBannerData_Button ProductBannerData_Button-Mobile'>Add to bag</Link>

        </React.Fragment>
    )
}

export default ProductBanner