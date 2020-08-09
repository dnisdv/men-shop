import React from 'react'
import './BannerData.css'
import BannerSku from '../BannerSku/BannerSku'

import Rate from 'rc-rate'  
import {connect} from 'react-redux'
import PropTypes from 'prop-types';


const BannerData = ({product : {rate, shipping_price ,quick_description ,title, price}}) => {

    return(
        <div className='BannerData'>
            <div className='BannerData_Primary'>
                <div className='BannerData_Primary_Wrapper'>
                    <Rate className='BannerData_Primary_Wrapper_Rating'
                     disabled
                     defaultValue={rate}
                     character={<i className="fas fa-star"></i>}
                    />

                    <h2 className='BannerData_Primary_Title'>{title}</h2>
                    <span className='BannerData_Primary_quick_description'>{quick_description}</span>
                    
                </div>
                <p className='BannerData_Primary_Price'>{price}<span className='price_currency'>$</span></p>
            </div>
            
            <BannerSku  />
        </div>
        
    )
}

const mapStateToProps = (state) => ({
    product : state.product.product
  });

BannerData.propTypes = {
    rate:PropTypes.number,
    shipping_price: PropTypes.number,
    quick_description: PropTypes.string,
    title:PropTypes.string,
    price:PropTypes.number
}

export default connect(mapStateToProps)(BannerData)




