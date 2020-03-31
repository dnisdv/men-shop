import React,{ useState } from 'react'
import './ProductsCatalog.css'

import { Link } from 'react-router-dom'

const ProductsCatalog = () => {

    const [catalogOpen, setcatalogOpen] = useState(false)

    const mobileCatalogHandler = (e) => {
        setcatalogOpen(!catalogOpen)
    }


    return(
            <div className={`ProductsCatalog ${catalogOpen ? 'CatalogOpen' : ''}`}>
                <h2 className='ProductsCatalog_Title'>Products</h2>
                <button onClick={mobileCatalogHandler} className='ProductsCatalog_Title-Mobile'>Products</button>

            <div className='ProductsCatalog_Modal_BG'></div>
            <div className='ProductsCatalog_Modal'>
                <ul className='ProductsCatalog_List'>
                    <li className='ProductsCatalog_List_Item'><Link to='#' className='ProductsCatalog_List_Item_Link'>Watches</Link></li>
                    <li className='ProductsCatalog_List_Item'><Link to='#' className='ProductsCatalog_List_Item_Link'>Sunglasses</Link></li>
                    <li className='ProductsCatalog_List_Item'><Link to='#' className='ProductsCatalog_List_Item_Link'>Wallets</Link></li>
                    <li className='ProductsCatalog_List_Item'><Link to='#' className='ProductsCatalog_List_Item_Link'>Backpacks</Link></li>
                    <li className='ProductsCatalog_List_Item'><Link to='#' className='ProductsCatalog_List_Item_Link'>For Womens</Link></li>
                    <li className='ProductsCatalog_List_Item'><Link to='#' className='ProductsCatalog_List_Item_Link'>For Mens</Link></li>
                    <li className='ProductsCatalog_List_Item'><Link to='#' className='ProductsCatalog_List_Item_Link'>Accesories</Link></li>
                </ul>
            </div>
            </div>
    )
}

export default ProductsCatalog