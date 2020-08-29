import React from 'react'
import './DataDetails.css'

import {connect} from 'react-redux'
import PropTypes from 'prop-types';

const DataDetails = ({product : {description}}) => {
    return(
        <div className='DataDetails'>
            <h2 className='DataDetails_Title'>DETAILS & CARE</h2>

            <div className='DataDetails_Data'>
                <p className='DataDetails_Data_Main'dangerouslySetInnerHTML={{
                    __html: description
                }} ></p>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    product : state.product.product
  });
DataDetails.propTypes = {
    description: PropTypes.string
}

export default connect(mapStateToProps)(DataDetails)