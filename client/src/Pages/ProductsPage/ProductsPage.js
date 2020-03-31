import React from 'react'
import './ProductsPage.css'

import Products from '../../components/Products/Products'
import ProductsCatalog from '../../components/Products/ProductsCatalog/ProductsCatalog'

const ProductsPage = () => {
    return(
        <div className='ProductsPage'>
            <ProductsCatalog />
            <Products />
        </div>
    )
}

export default ProductsPage