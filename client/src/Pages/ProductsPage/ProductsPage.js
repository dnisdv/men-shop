import React,{useEffect} from 'react'
import './ProductsPage.css'

import Products from '../../components/Products/Products'
import ProductsCatalog from '../../components/Products/ProductsCatalog/ProductsCatalog'

import Pagination from '../../components/Pagination/Pagination'

import {connect} from 'react-redux'
import {get_products, get_productsByCategory} from '../../actions/productsActions'

const ProductsPage = ({
        productsItems,
        get_productsByCategory,
        get_products,
        products:{ activeCategory, pagination : {totalPages, currentPage}}
    }) => {
        
    useEffect(() => {  
        window.scrollTo(0, 0)
    }, [])


    return(
        <div className='ProductsPage_Wrapper'>
            <div className='ProductsPage'>
                <ProductsCatalog />
                <div className='Products_Wrapper'>
                    <Products />
                    {/* <Pagination 
                        items={productsItems} 
                        totalPages={totalPages}
                        onChange={(e) => 
                            activeCategory ?
                                get_productsByCategory(activeCategory , e.selected) 
                                : get_products(e.selected)} 
                        forcePage={currentPage}
                    /> */}
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    productsItems : state.products.products,
    products : state.products
})

export default connect(mapStateToProps, {get_products, get_productsByCategory})(ProductsPage)

