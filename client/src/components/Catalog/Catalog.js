import React from 'react'
import './Catalog.css'
import Features from './Features/Features'

import { Link } from 'react-router-dom'

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
        
        <Link className='Catalog_Button' to='/products'>Show Products</Link>
        
        </React.Fragment>
    )
}

export default Catalog