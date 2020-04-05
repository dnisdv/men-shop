import React from 'react'
import './CartList.css'

const CartList = () => {
    return(
        <div className='CartList_Wrapper'>
            <h2 className='CartList_Wrapper_Title'>Your Items</h2>
        <ul className='CartList'>
            <li className='CartList_Item'>

                <div className='CartList_Item_IMG_Wrapper'>
                    <img src='https://cutt.ly/itSBMl3' alt='CartIMG' className='CartList_Item_IMG' />
                </div>

                <div className='CartList_Item_Data'>
                    <div className='CartList_Item_DataFirst'>
                        <h2 className='CartList_Item_DataFirst_Title'>Apple iPhone 11 Pro Max 512 ГБ Золото</h2>
                        <p className='CartList_Item_DataFirst_Price'>55$</p>
                    </div>
                    
                    <div className='CartList_Item_DataSecond'>

                        <div className='CartList_Item_DataSecond_Actions'>
                            <button className='CartList_Item_DataSecond_Actions_Increase'>+</button>
                            <p className='CartList_Item_DataSecond_Actions_Count'>0</p>
                            <button className='CartList_Item_DataSecond_Actions_Decrease'>-</button>
                        </div>

                        <p className='CartList_Item_DataSecond_Shipp'>Ships within a day</p>
                    </div>
                    
                </div>
            </li>
            

            <li className='CartList_Item'>

                <div className='CartList_Item_IMG_Wrapper'>
                    <img src='https://cutt.ly/itSBMl3' alt='CartIMG' className='CartList_Item_IMG' />
                </div>

                <div className='CartList_Item_Data'>
                    <div className='CartList_Item_DataFirst'>
                        <h2 className='CartList_Item_DataFirst_Title'>Apple iPhone 11 Pro Max 512 ГБ Золото</h2>
                        <p className='CartList_Item_DataFirst_Price'>55$</p>
                    </div>
                    
                    <div className='CartList_Item_DataSecond'>

                        <div className='CartList_Item_DataSecond_Actions'>
                            <button className='CartList_Item_DataSecond_Actions_Increase'>+</button>
                            <p className='CartList_Item_DataSecond_Actions_Count'>0</p>
                            <button className='CartList_Item_DataSecond_Actions_Decrease'>-</button>
                        </div>

                        <p className='CartList_Item_DataSecond_Shipp'>Ships within a day</p>
                    </div>
                    
                </div>
            </li>




            <li className='CartList_Item'>

                <div className='CartList_Item_IMG_Wrapper'>
                    <img src='https://cutt.ly/itSBMl3' alt='CartIMG' className='CartList_Item_IMG' />
                </div>

                <div className='CartList_Item_Data'>
                    <div className='CartList_Item_DataFirst'>
                        <h2 className='CartList_Item_DataFirst_Title'>Apple iPhone 11 Pro Max 512 ГБ Золото</h2>
                        <p className='CartList_Item_DataFirst_Price'>55$</p>
                    </div>
                    
                    <div className='CartList_Item_DataSecond'>

                        <div className='CartList_Item_DataSecond_Actions'>
                            <button className='CartList_Item_DataSecond_Actions_Increase'>+</button>
                            <p className='CartList_Item_DataSecond_Actions_Count'>0</p>
                            <button className='CartList_Item_DataSecond_Actions_Decrease'>-</button>
                        </div>

                        <p className='CartList_Item_DataSecond_Shipp'>Ships within a day</p>
                    </div>
                    
                </div>
            </li>
            
        </ul>
        </div>
    )
}

export default CartList