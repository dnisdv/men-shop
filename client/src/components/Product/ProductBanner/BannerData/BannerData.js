import React from 'react'
import './BannerData.css'
import Button from '../../../Button/Button'
import BannerSku from '../BannerSku/BannerSku'

import Rate from 'rc-rate'  


const BannerData = () => {
    return(
        <div className='BannerData'>
            <div className='BannerData_Primary'>
                <div className='BannerData_Primary_Wrapper'>
                    <span className='BannerData_Primary_Shipping'>Free Shiping</span>

                    <Rate className='BannerData_Primary_Wrapper_Rating'
                     disabled
                     defaultValue={3}
                     character={<i class="fas fa-star"></i>}
                    />

                    <h2 className='BannerData_Primary_Title'>Modern understatement and handcrafted</h2>
                </div>
                <p className='BannerData_Primary_Price'>$44.00</p>
            </div>
            
            <BannerSku />
            <Button className='BannerData_Button-Desktop' variant='third'>Buy</Button>
        </div>
        
    )
}

export default BannerData




