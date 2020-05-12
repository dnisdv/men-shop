import React,{ useState, useEffect } from 'react'
import './ProductsCatalog.css'
import {connect} from 'react-redux'
import {get_category, get_productsByCategory, get_products, set_activeCategory} from '../../../actions/productsActions'

import { Link } from 'react-router-dom'

import {withRouter} from 'react-router'


const ProductsCatalog 
    = ({
        get_category, 
        set_activeCategory, 
        get_productsByCategory, 
        get_products, 
        history,
        products: {activeCategory, loading,category }
    }) => {

    const [catalogOpen, setcatalogOpen] = useState(false)

    const mobileCatalogHandler = (e) => {
        setcatalogOpen(!catalogOpen)
    }
    
    useEffect(() => {
        get_category()
    }, [get_category])

    const selectCategory = (e, id, title) => {
        // get_productsByCategory(e.target.dataset.name)
        set_activeCategory(id)
        history.push(`?category=${title}`)
    }
    const selectAllCategory = (e) => {
        get_products()
        set_activeCategory(null)
    }

    return(
        
            <div className={`ProductsCatalog ${catalogOpen ? 'CatalogOpen' : ''}`}>
                <Link onClick={selectAllCategory} className='ProductsCatalog_Title' to="/Products">Products</Link>
                <button onClick={mobileCatalogHandler} className='ProductsCatalog_Title-Mobile'>Products</button>

            <div className='ProductsCatalog_Modal_BG'></div>
            <div className='ProductsCatalog_Modal'>
                <ul className='ProductsCatalog_List'>
                    {category ? category.map( (i) => 
                        <li 
                            key={i._id} 
                            onClick={(e) => selectCategory(e, i._id, i.title)}
                            data-name={i.title}
                            className={`ProductsCatalog_List_Item 
                            ${activeCategory === i._id ? 'ProductsCatalog_List_Item_ACTIVE': '' }
                            ${loading.product ? 'ProductsCatalog_List_Item_Disabled': '' }
                            `}
                            
                            >
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


export default withRouter(connect(mapStateToProps, {get_category,get_products, get_productsByCategory, set_activeCategory})(ProductsCatalog))