import React from 'react'
import './ProductData.css'
import DataCharcs from './DataCharcs/DataCharcs'
import DataDetails from './DataDetails/DataDetails'
import {connect} from 'react-redux'
import PropTypes from 'prop-types';

const ProductData = ({product :{ images, quick_description}}) => {
    return(
        <React.Fragment>
            <div className='ProductData'>
                <h2 className='ProductData_Title'>{quick_description}</h2>
            </div>

                <img src={`http://localhost:5000/${images[Math.floor(Math.random() * images.length)].path}`} alt='decorate' className='ProductData_MainImage' />

            <div className='ProductData ProductData-Second'>
                <DataDetails />
                
                <DataCharcs/>
            </div>
            </React.Fragment>
    )
}

const mapStateToProps = (state) => ({
    product : state.product.product
  });
ProductData.propTypes = {
    images:PropTypes.array,
    quick_description: PropTypes.string
}

export default connect(mapStateToProps)(ProductData)