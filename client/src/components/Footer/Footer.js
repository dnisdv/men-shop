import React from 'react'
import './Footer.css'
import FooterMenu from './FooterMenu/FooterMenu'
import Ticker from '../Ticker/Ticker'

const Footer = ({footerRef}) => {
    return(
        <div ref={footerRef} className='Footer'>
            <Ticker />
            <div className='Footer_Data'>
                <div className='Footer_Data_Logo'>
                    <div className="Footer_Data_Logo_Logo">Darwin</div>
                    <div className="Footer_Data_Logo_Data"> A ultimate mens gadget stores </div>
                </div>  
                <FooterMenu/>
            </div>
        </div>
    )
}

export default Footer