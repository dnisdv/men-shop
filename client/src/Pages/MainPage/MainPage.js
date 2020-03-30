import React,{useContext, useEffect} from 'react'
import './MainPage.css'

import Banner from '../../components/Banner/Banner'
import Catalog from '../../components/Catalog/Catalog'

import {themes, ThemeContext} from '../../Context/theme-context'


const MainPage = ({changeTheme}) => {
    
    useEffect(() => {
        changeTheme(themes.dark)
        return( ()=> {
            changeTheme(themes.light)
        })
    }, [])

    return(
        <div className='MainPage'>
            <Banner />
            <Catalog />
        </div>
    )
}

export default MainPage