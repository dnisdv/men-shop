import React from 'react'
import './Products.css'
import arrowRight from '../../Assests/icons/arrow-right.svg'

import { Link } from 'react-router-dom'

const Products = () => {
    return(
        <ul className='Products'>
            <li className='Products_Item'>
                <div className='Products_Item_IMGWrapper'>
                    <img src='https://cutt.ly/7tTtrOu' alt='Product' className='Products_Item_IMG' />
                </div>

                <div className='Products_Item_Data'>
                    <span className='Products_Item_Data_Category'>Wallet</span>
                    <h3 className='Products_Item_Data_Title'>Apple iPhone 11 Pro Max 512 ГБ Золото</h3>
                    <p className='Products_Item_Data_Description'>A  brand new inovations in the story of phones and even of dogital</p>
                    <Link to='/product' className='Products_Item_Data_Link'>Shop <img src={arrowRight} alt='arrowIcon' /></Link>
                    <p className='Products_Item_Data_Price'>1500$</p>
                </div>
            </li>
            
            <li className='Products_Item'>
                <div className='Products_Item_IMGWrapper'>
                    <img src='https://cutt.ly/7tTtrOu' alt='Product' className='Products_Item_IMG' />
                </div>

                <div className='Products_Item_Data'>
                    <span className='Products_Item_Data_Category'>Wallet</span>
                    <h3 className='Products_Item_Data_Title'>Apple iPhone 11 Pro Max 512 ГБ Золото</h3>
                    <p className='Products_Item_Data_Description'>A  brand new inovations in the story of phones and even of dogital</p>
                    <Link to='/product' className='Products_Item_Data_Link'>Shop <img src={arrowRight} alt='arrowIcon' /></Link>
                    <p className='Products_Item_Data_Price'>1500$</p>
                </div>
            </li>

            <li className='Products_Item'>
                <div className='Products_Item_IMGWrapper'>
                    <img src='https://cutt.ly/7tTtrOu' alt='Product' className='Products_Item_IMG' />
                </div>

                <div className='Products_Item_Data'>
                    <span className='Products_Item_Data_Category'>Wallet</span>
                    <h3 className='Products_Item_Data_Title'>Apple iPhone 11 Pro Max 512 ГБ Золото</h3>
                    <p className='Products_Item_Data_Description'>A  brand new inovations in the story of phones and even of dogital</p>
                    <Link to='/product' className='Products_Item_Data_Link'>Shop <img src={arrowRight} alt='arrowIcon' /></Link>
                    <p className='Products_Item_Data_Price'>1500$</p>
                </div>
            </li>

            <li className='Products_Item'>
                <div className='Products_Item_IMGWrapper'>
                    <img src='https://cutt.ly/7tTtrOu' alt='Product' className='Products_Item_IMG' />
                </div>

                <div className='Products_Item_Data'>
                    <span className='Products_Item_Data_Category'>Wallet</span>
                    <h3 className='Products_Item_Data_Title'>Apple iPhone 11 Pro Max 512 ГБ Золото</h3>
                    <p className='Products_Item_Data_Description'>A  brand new inovations in the story of phones and even of dogital</p>
                    <Link to='/product' className='Products_Item_Data_Link'>Shop <img src={arrowRight} alt='arrowIcon' /></Link>
                    <p className='Products_Item_Data_Price'>1500$</p>
                </div>
            </li>
        </ul>
    )
}

export default Products