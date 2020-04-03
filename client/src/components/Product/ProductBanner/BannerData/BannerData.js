import React from 'react'
import './BannerData.css'
import BannerSku from '../BannerSku/BannerSku'

import Rate from 'rc-rate'  
import { Link } from 'react-router-dom'


const BannerData = () => {
    return(
        <div className='BannerData'>
            <div className='BannerData_Primary'>
                <div className='BannerData_Primary_Wrapper'>
                    <span className='BannerData_Primary_Shipping'>Free Shiping</span>

                    <Rate className='BannerData_Primary_Wrapper_Rating'
                     disabled
                     defaultValue={3}
                     character={<i className="fas fa-star"></i>}
                    />

                    <h2 className='BannerData_Primary_Title'>Modern understatement and handcrafted</h2>
                </div>
                <p className='BannerData_Primary_Price'>$44.00</p>
            </div>
            
            <BannerSku />

            <Link to='/cart' className='ProductBannerData_Button ProductBannerData_Button-Desktop' >Add to cart</Link>
        </div>
        
    )
}

export default BannerData




