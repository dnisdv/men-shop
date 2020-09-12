import React from 'react'
import './Catalog.css'
import Features from './Features/Features'

import Button from '../Button/Button'

const buttonStyles = {
    border:"1px solid rgba(255,255,255,0.05)",
    margin: "0 auto",
    fontWeight:"700",
    height:"100%",
}

const Catalog = () => {
    return(
        <React.Fragment>
        <div className='Catalog'>

            <div className='Catalog_Addition'>
                <p className='Catalog_Addition_Title'>We create actionable shopper marketing solutions.</p>
                <p className='Catalog_Addition_Data'>So, the first question on your mind… what is it we do?</p>
            </div>
            <Features />
        </div>
        
        <div className='Catalog_Button_Wrapper'>
            <Button styles={buttonStyles} buttonType='white' to='/products'>Show Products</Button>
        </div>
        </React.Fragment>
    )
}

export default Catalog