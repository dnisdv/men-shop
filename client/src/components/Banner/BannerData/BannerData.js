import React from 'react'
import './BannerData.css'
import Button from '../../Button/Button'
import { Link } from "react-router-dom";


const BannerData = () => {
    return(
        <div className='BannerData'>
        <h2 className='BannerData_Title'>URBAN GADGETS FOR YOUR STYLE</h2>
        <h2 className='BannerData_Title_Shadow'>URBAN GADGETS FOR YOUR STYLE</h2>

        <div className="BannerData_Addition">
            <p className="BannerData_Addition_Data">Good organized inside antiprotect +  on water</p>
            <p className="BannerData_Addition_Data">Good organized inside antiprotect +  on water</p>
        </div>

        <Link className='BannerData_Button' to='/Products'>
            <Button variant='primary'>See Catalog</Button>
        </Link>

    </div>
    )
}

export default BannerData