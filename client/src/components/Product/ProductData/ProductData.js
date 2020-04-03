import React from 'react'
import './ProductData.css'
import DataCharcs from './DataCharcs/DataCharcs'
import DataDetails from './DataDetails/DataDetails'

const CharcsData = [
    {id:1, title:'Item Weight', description:'0.1kg'},
    {id:2, title:'Interior', description:'Interior Slot Pocket'},
    {id:3, title:'Main Material', description:'Genuine Leather'},
    {id:4, title:'Lining Material', description:'Genuine Leather'},
    {id:5, title:'Closure Type', description:'No Zipper'},
]

const ProductData = () => {
    return(
        <React.Fragment>
            <div className='ProductData'>
                <h2 className='ProductData_Title'>Modern understatement and handcrafted quality come together
                                                in a full-grain leatherwallet with vibrant stitch detailing</h2>
            </div>

                <img src='https://cutt.ly/ItYAf4v' alt='decorate' className='ProductData_MainImage' />

            <div className='ProductData ProductData-Second'>
                <DataDetails />
                
                <DataCharcs options={CharcsData} />
            </div>
            </React.Fragment>
    )
}

export default ProductData