import React,{useEffect} from 'react'
import './MainPage.css'

import Banner from '../../components/Banner/Banner'
import Catalog from '../../components/Catalog/Catalog'

import {themes} from '../../Context/theme-context'


const MainPage = ({changeTheme}) => {
    
    useEffect(() => {
        window.scrollTo(0, 0)
        changeTheme(themes.dark)
        return( ()=> {
            changeTheme(themes.light)
        })
    }, [changeTheme])

    return(
        <div className='MainPage'>
            <Banner />
            <Catalog />
        </div>
    )
}

export default MainPage