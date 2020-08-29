import React,{ useState, useEffect } from 'react'
import './ProductsCatalog.css'
import {connect} from 'react-redux'
import {get_category, get_productsByCategory, get_products, set_activeCategory} from '../../../actions/productsActions'

import { Link } from 'react-router-dom'
import {withRouter} from 'react-router'
import PropTypes from 'prop-types';

const ProductsCatalog 
    = ({
        get_category, 
        set_activeCategory, 
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
        history.push(`?category=${title}`)
        setTimeout(() => {
            setcatalogOpen(false)
        }, 200);
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
                            className={`ProductsCatalog_List_Item ${activeCategory === i._id ? 'ProductsCatalog_List_Item_ACTIVE': '' } ${loading.product ? 'ProductsCatalog_List_Item_Disabled': '' }`}
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

ProductsCatalog.propTypes = {
    get_category: PropTypes.func,
    set_activeCategory: PropTypes.func,
    get_products : PropTypes.func,
    history: PropTypes.object,
    activeCategory:PropTypes.string,
    loading:PropTypes.object,
    category: PropTypes.array,
}

export default withRouter(connect(mapStateToProps, {get_category,get_products, get_productsByCategory, set_activeCategory})(ProductsCatalog))