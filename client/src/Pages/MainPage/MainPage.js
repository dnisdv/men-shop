import React from 'react'
import './MainPage.css'
import Banner from '../../components/Banner/Banner'
import Catalog from '../../components/Catalog/Catalog'
const MainPage = () => {
    return(
        <div className='MainPage'>
            <Banner />
            <Catalog />
        </div>
    )
}

export default MainPage