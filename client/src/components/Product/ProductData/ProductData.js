import React from 'react'
import './ProductData.css'
import DataCharcs from './DataCharcs/DataCharcs'
import DataDetails from './DataDetails/DataDetails'

const CharcsData = [
    {title:'Item Weight', description:'0.1kg'},
    {title:'Interior', description:'Interior Slot Pocket'},
    {title:'Main Material', description:'Genuine Leather'},
    {title:'Lining Material', description:'Genuine Leather'},
    {title:'Closure Type', description:'No Zipper'},
]

const ProductData = () => {
    return(
        <React.Fragment>
            <div className='ProductData'>
                <h2 className='ProductData_Title'>Modern understatement and handcrafted quality come together
                                                in a full-grain leatherwallet with vibrant stitch detailing</h2>
            </div>

                <img src='https://cutt.ly/ItYAf4v' className='ProductData_MainImage' />

            <div className='ProductData ProductData-Second'>
                <DataDetails />
                
                <DataCharcs options={CharcsData} />
            </div>
            </React.Fragment>
    )
}

export default ProductData