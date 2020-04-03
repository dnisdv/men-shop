import React from 'react'
import './DataCharcs.css'

const DataCharcs = ({options}) => {
    return(
        <div className='DataCharcs'>
            <h2 className='DataCharcs_Title'>Product Details</h2>
            <ul className='DataCharcs_List'>
                {options.map( (item, index) => {
                    return (
                        <li key={item.id} className='DataCharcs_List_Item'>
                            <div className='DataCharcs_List_Item_Index'>{index.lenght > 1 ? index + 1 : '0' + (index + 1)}</div>
                            <div className='DataCharcs_List_Item_Data'>
                                <h2 className='DataCharcs_List_Item_Data_Title'>{item.title}</h2>
                                <p className='DataCharcs_List_Item_Data_Description'>{item.description}</p>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default DataCharcs