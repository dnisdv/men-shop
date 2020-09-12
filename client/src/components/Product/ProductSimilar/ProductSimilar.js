import React from 'react'
import './ProductSimilar.css'
import SimilarProducts from '../../SimilarProducts/SimilarProducts'


const ProductSimilar = () => {
    return(
        <div className='ProductSimilar'>
            <h2 className='ProductSimilar_Title'>Similar Products</h2>
            <SimilarProducts productsProp={ProductsItems} />
        </div>
    )
}

export default ProductSimilar

