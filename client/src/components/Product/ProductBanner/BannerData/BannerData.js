import React from 'react'
import './BannerData.css'
import BannerSku from '../BannerSku/BannerSku'

import Rate from 'rc-rate'  

import {connect} from 'react-redux'


const BannerData = ({product : {rate, shipping_price ,title, price, _id}}) => {

    return(
        <div className='BannerData'>
            <div className='BannerData_Primary'>
                <div className='BannerData_Primary_Wrapper'>
                    <span className='BannerData_Primary_Shipping'>{shipping_price ? shipping_price + '$ Shipping' : 'Free shipping'}</span>

                    <Rate className='BannerData_Primary_Wrapper_Rating'
                     disabled
                     defaultValue={rate}
                     character={<i className="fas fa-star"></i>}
                    />

                    <h2 className='BannerData_Primary_Title'>{title}</h2>
                </div>
                <p className='BannerData_Primary_Price'>{price}<span className='price_currency'>$</span></p>
            </div>
            
            <BannerSku  />
        </div>
        
    )
}

const mapStateToProps = (state) => ({
    product : state.products.product
  });

export default connect(mapStateToProps)(BannerData)




