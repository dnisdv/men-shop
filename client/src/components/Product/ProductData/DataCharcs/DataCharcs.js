import React from 'react'
import './DataCharcs.css'

import {connect} from 'react-redux'

const DataCharcs = ({product:{ characteristics}}) => {

    return(
        <div className='DataCharcs'>
            <h2 className='DataCharcs_Title'>Product Details</h2>
            <ul className='DataCharcs_List'>
                {characteristics.map( (item, index) => {
                    return (
                        <li key={item._id} className='DataCharcs_List_Item'>
                            <div className='DataCharcs_List_Item_Index'>{index.lenght > 1 ? index + 1 : '0' + (index + 1)}</div>
                            <div className='DataCharcs_List_Item_Data'>
                                <h2 className='DataCharcs_List_Item_Data_Title'>{item.title}</h2>
                                <p className='DataCharcs_List_Item_Data_Description'>{item.value}</p>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

const mapStateToProps = (state) => ({
    product : state.products.product
  });


export default connect(mapStateToProps)(DataCharcs)