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
                {/* <ol className='DataDetails_Data_List'>
                    <li className='DataDetails_Data_List_Item'>100% Guarantee</li>
                    <li className='DataDetails_Data_List_Item'>Fast Shipping</li>
                    <li className='DataDetails_Data_List_Item'>Money Return</li>
                    <li className='DataDetails_Data_List_Item'>Free Delivery</li>
                </ol> */}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    product : state.products.product
  });


export default connect(mapStateToProps)(DataDetails)