import React,{useEffect} from 'react'
import './ProductsPage.css'

import Products from '../../components/Products/Products'
import ProductsCatalog from '../../components/Products/ProductsCatalog/ProductsCatalog'

const ProductsPage = () => {
    useEffect(() => {  
        window.scrollTo(0, 0)
    })
    return(
        <div className='ProductsPage'>
            <ProductsCatalog />
            <Products />
        </div>
    )
}

export default ProductsPage

