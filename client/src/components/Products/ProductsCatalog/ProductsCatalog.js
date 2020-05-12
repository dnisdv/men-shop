import React,{ useState, useEffect } from 'react'
import './ProductsCatalog.css'
import {connect} from 'react-redux'
import {get_category, get_productsByCategory, get_products, set_activeCategory} from '../../../actions/productsActions'

import { Link } from 'react-router-dom'

const ProductsCatalog 
    = ({
        get_category, 
        set_activeCategory, 
        get_productsByCategory, 
        get_products, 
        products: {activeCategory,category }
    }) => {

    const [catalogOpen, setcatalogOpen] = useState(false)

    const mobileCatalogHandler = (e) => {
        setcatalogOpen(!catalogOpen)
    }
    
    const [Active, setActive] = useState()

    useEffect(() => {
        get_category()
    }, [activeCategory, get_category])

    const selectCategory = (e, id) => {
        get_productsByCategory(e.target.dataset.name)
        setActive(id)
        set_activeCategory(id)
    }
    const selectAllCategory = (e) => {
        get_products()
        setActive(null)
    }

    return(
        
            <div className={`ProductsCatalog ${catalogOpen ? 'CatalogOpen' : ''}`}>
                <h2 onClick={selectAllCategory} className='ProductsCatalog_Title'>Products</h2>
                <button onClick={mobileCatalogHandler} className='ProductsCatalog_Title-Mobile'>Products</button>

            <div className='ProductsCatalog_Modal_BG'></div>
            <div className='ProductsCatalog_Modal'>
                <ul className='ProductsCatalog_List'>
                    {category ? category.map( (i) => 
                        <li 
                            key={i._id} 
                            onClick={(e) => selectCategory(e, i._id)}
                            data-name={i.title}
                            className={`ProductsCatalog_List_Item ${activeCategory === i._id ? 'ProductsCatalog_List_Item_ACTIVE': '' }`}>
                            {i.label}</li>)
                    : null }
                </ul>
            </div>
            </div>
        
    )
}

const mapStateToProps = (state) => ({
    products : state.products
  });


export default connect(mapStateToProps, {get_category,get_products, get_productsByCategory, set_activeCategory})(ProductsCatalog)