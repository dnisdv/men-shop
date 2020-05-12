import React from 'react'
import './ProductData.css'
import DataCharcs from './DataCharcs/DataCharcs'
import DataDetails from './DataDetails/DataDetails'
import {connect} from 'react-redux'

const ProductData = ({product :{ images, quick_description}}) => {
    console.log(images)
    return(
        <React.Fragment>
            <div className='ProductData'>
                <h2 className='ProductData_Title'>{quick_description}</h2>
            </div>

                <img src={images[Math.floor(Math.random() * images.length)].src} alt='decorate' className='ProductData_MainImage' />

            <div className='ProductData ProductData-Second'>
                <DataDetails />
                
                <DataCharcs/>
            </div>
            </React.Fragment>
    )
}

const mapStateToProps = (state) => ({
product : state.products.product
  });


export default connect(mapStateToProps)(ProductData)