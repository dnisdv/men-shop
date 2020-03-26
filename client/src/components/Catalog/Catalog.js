import React from 'react'
import './Catalog.css'
import Features from './Features/Features'
import Button from '../Button/Button'

const Catalog = () => {
    return(
        <div className='Catalog'>

            <div className='Catalog_Addition'>
                <p className='Catalog_Addition_Title'>We create actionable shopper marketing solutions.</p>
                <p className='Catalog_Addition_Data'>So, the first question on your mind… what is it we do?</p>
            </div>


            <Features />

            <Button classN='Catalog_Button' variant='secondary' to='/Products' >Show Products</Button>
        </div>
    )
}

export default Catalog