import React from 'react'
import './SimilarProducts.css'
import arrowRight from '../../Assests/icons/arrow-right.svg'

import { Link } from 'react-router-dom'


const SimilarProducts = ({productsProp}) => {
    return(
        <ul className='SimilarProducts'>
            {productsProp.map( (item) => { 
                return(
                    <li className='SimilarProducts_Item'>
                        <div className='SimilarProducts_Item_IMGWrapper'>
                            <Link to='/product'><img src='https://cutt.ly/7tTtrOu' alt='Product' className='SimilarProducts_Item_IMG' /></Link>
                        </div>

                        <div className='SimilarProducts_Item_Data'>
                            <span className='SimilarProducts_Item_Data_Category'>{item.category}</span>
                            <h3 className='SimilarProducts_Item_Data_Title'>Apple iPhone 11 Pro Max 512 ГБ Золото</h3>
                            <p className='SimilarProducts_Item_Data_Description'>A  brand new inovations in the story of phones and even of dogital</p>
                            <Link to='/product' className='SimilarProducts_Item_Data_Link'>Shop <img src={arrowRight} alt='arrowIcon' /></Link>
                            <p className='SimilarProducts_Item_Data_Price'>1500$</p>
                        </div>
                    </li>
                )      
                })}     
        </ul>
    )
}

export default SimilarProducts



