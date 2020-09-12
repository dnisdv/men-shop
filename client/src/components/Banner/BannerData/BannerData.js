import React from 'react'
import './BannerData.css'
import Button from '../../Button/Button'

const BannerData = () => {
    const buttonStyles={
        width:"258px",
    }
    return(
        <div className='BannerData'>
        <h2 className='BannerData_Title'>URBAN GADGETS FOR YOUR STYLE</h2>
        <h2 className='BannerData_Title_Shadow'>URBAN GADGETS FOR YOUR STYLE</h2>

        <div className="BannerData_Addition">
            <p className="BannerData_Addition_Data">Good organized inside antiprotect +  on water</p>
            <p className="BannerData_Addition_Data">Good organized inside antiprotect +  on water</p>
        </div>
        <div className="BannerData_Button_Wrapper">
            <Button to='/products' styles={buttonStyles} buttonType='white'>See Products</Button>
        </div>
    </div>
    )
}

export default BannerData