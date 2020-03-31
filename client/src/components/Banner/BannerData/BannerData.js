import React from 'react'
import './BannerData.css'
import Button from '../../Button/Button'


const BannerData = () => {
    return(
        <div className='BannerData'>
        <h2 className='BannerData_Title'>URBAN GADGETS FOR YOUR STYLE</h2>
        <h2 className='BannerData_Title_Shadow'>URBAN GADGETS FOR YOUR STYLE</h2>

        <div className="BannerData_Addition">
            <p className="BannerData_Addition_Data">Good organized inside antiprotect +  on water</p>
            <p className="BannerData_Addition_Data">Good organized inside antiprotect +  on water</p>
        </div>

            <Button className='BannerData_Button' variant='primary' to='/products'>See Products</Button>

    </div>
    )
}

export default BannerData