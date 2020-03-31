import React from 'react'
import './ProductBanner.css'
import BannerData from './BannerData/BannerData'
import Button from '../../Button/Button'

const ProductBanner = () => {
    return(
        <React.Fragment>

            <div className='ProductBanner'>
                <div className='ProductBanner_WrapperIMG'>
                    
                    <img className='ProductBanner_IMG' alt='ProductImage' src='https://cutt.ly/ltT1kit'></img>
                </div>

                <BannerData />
            </div>

            <Button className='BannerData_Button-Mobile' variant='third'>Buy</Button>
        </React.Fragment>
    )
}

export default ProductBanner