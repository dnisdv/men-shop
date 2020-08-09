import React from 'react'
import './BannerData.css'

import { Link } from 'react-router-dom'


const BannerData = () => {
    return(
        <div className='BannerData'>
        <h2 className='BannerData_Title'>URBAN GADGETS FOR YOUR STYLE</h2>
        <h2 className='BannerData_Title_Shadow'>URBAN GADGETS FOR YOUR STYLE</h2>

        <div className="BannerData_Addition">
            <p className="BannerData_Addition_Data">Good organized inside antiprotect +  on water</p>
            <p className="BannerData_Addition_Data">Good organized inside antiprotect +  on water</p>
        </div>
            <Link to='/products' className='BannerData_Button'>See Products</Link>
    </div>
    )
}

export default BannerData