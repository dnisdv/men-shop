import React from 'react'
import './Features.css'

const Features = () => {


    return(
        <ul className='Features'>
            <li className='Features_Item Features_Item-Backpacks '>
                <img src='https://cutt.ly/ctncrqF' alt='backpack' className='Features_Item_Img Features_Item_Img-Backpacks' />
                <h2 className='Features_Item_Title'>Backpacks</h2>
            </li>

            <li className='Features_Item Features_Item-Wallets' >
                <img src='https://cutt.ly/htnctqp' alt='Wallet' className='Features_Item_Img Features_Item_Img-Wallets' />
                <h2 className='Features_Item_Title'>Wallets</h2>
            </li>

            <li className='Features_Item Features_Item-Watches '>
                <img src='https://cutt.ly/Ftncyql' alt='Wathces' className='Features_Item_Img Features_Item_Img-Watches' />
                <h2 className='Features_Item_Title'>Watches</h2>
            </li>

            <li className='Features_Item Features_Item-Sunglasses '>
                <img src='https://cutt.ly/KtnvjdR' alt='Sunglasses' className='Features_Item_Img Features_Item_Img-Sunglasses' />
                <h2 className='Features_Item_Title'>Sunglasses</h2>
            </li >
        </ul>
    )
}

export default Features