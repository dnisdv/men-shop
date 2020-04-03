import React from 'react'
import './ProductsPage.css'

import Products from '../../components/Products/Products'
import ProductsCatalog from '../../components/Products/ProductsCatalog/ProductsCatalog'

const ProductsPage = () => {
    return(
        <div className='ProductsPage'>
            <ProductsCatalog />
            <Products productsProp={ProductsItems} />
        </div>
    )
}

export default ProductsPage



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
    },
    {
        category:'Wallet',
        title:'Apple iPhone 11 Pro Max 512 ГБ Золото',
        description: 'A  brand new inovations in the story of phones and even of dogital',
        price: '1500$'
    }
]