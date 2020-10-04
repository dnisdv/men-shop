import React from 'react'
import './BannerCatalog.css'

const BannerCatalog = () => {
    return(
        <div className='BannerCatalog'>
            <div className='BanerCatalog_ImgWrapper'>
                    <img className='BannerCatalog_Img BannerCatalog_Img--Main' alt='img' src='https://cutt.ly/stnfoDi'></img>
            </div>
            <div className='BanerCatalog_ImgWrapper'>
                    <img className='BannerCatalog_Img BannerCatalog_Img--Second' alt='img' src='https://cutt.ly/ktnfoda'></img>
            </div>
            <div className='BanerCatalog_ImgWrapper'>
                    <img className='BannerCatalog_Img BannerCatalog_Img--Third' alt='img' src='https://cutt.ly/Ttnfukj'></img>
            </div>
        </div>
    )
}

export default BannerCatalog