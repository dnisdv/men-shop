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


const ProductsItems = [
    {
        category:'Wallet',
        title:'Apple iPhone 11 Pro Max 512 ГБ Золото',
        description: 'A  brand new inovations in the story of phones and even of dogital',
        price: '1500$'
    },
    {
        category:'Wallet',
        title:'Apple iPhone 11 Pro Max 512 ГБ Золото',
        description: 'A  brand new inovations in the story of phones and even of dogital',
        price: '1500$'
    },
    {
        category:'Wallet',
        title:'Apple iPhone 11 Pro Max 512 ГБ Золото',
        description: 'A  brand new inovations in the story of phones and even of dogital',
        price: '1500$'
    }
]