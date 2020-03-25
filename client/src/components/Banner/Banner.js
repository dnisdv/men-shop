import React,{useEffect} from 'react'
import './Banner.css'
import BannerData from './BannerData/BannerData'
import BannerCatalog from './BannerCatalog/BannerCatalog'


const Banner = () => {
        
    
    return(
        <div className='Banner'>
            <BannerData />
            <BannerCatalog/>
        </div>
    )               
}

export default Banner