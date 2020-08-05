import React from 'react'
import './DataDetails.css'

import {connect} from 'react-redux'
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


export default connect(mapStateToProps)(DataDetails)