import React from 'react'
import './DataDetails.css'

const DataDetails = () => {
    return(
        <div className='DataDetails'>
            <h2 className='DataDetails_Title'>DETAILS & CARE</h2>

            <div className='DataDetails_Data'>
                <p className='DataDetails_Data_Main'>Modern understatement and handcrafted quality come together 
                in a full-grain leather wallet with vibrant stitch detailing. The smart style offers Tumi 
                ID Lock technology to help protect personal data encoded on your cards from electronic theft. 
                A ballistic nylon spine ensures durability and longevity.</p>
                <ol className='DataDetails_Data_List'>
                    <li className='DataDetails_Data_List_Item'>100% Guarantee</li>
                    <li className='DataDetails_Data_List_Item'>Fast Shipping</li>
                    <li className='DataDetails_Data_List_Item'>Money Return</li>
                    <li className='DataDetails_Data_List_Item'>Free Delivery</li>
                </ol>
            </div>
        </div>
    )
}

export default DataDetails