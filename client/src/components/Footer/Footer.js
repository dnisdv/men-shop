import React from 'react'
import './Footer.css'
import FooterMenu from './FooterMenu/FooterMenu'
import Ticker from '../Ticker/Ticker'
import Logo from '../Logo/Logo'

const Footer = ({footerRef}) => {
    return(
        <div ref={footerRef} className='Footer'>
            <Ticker />
            <div className='Footer_Data'>
                <div className='Footer_Data_Logo'>
                    <div className="Footer_Data_Logo_Logo"><Logo width="210" height="30" fill="white" /></div>
                    <div className="Footer_Data_Logo_Data"> A ultimate mens gadget stores </div>
                </div>  
                <FooterMenu/>
            </div>
        </div>
    )
}

export default Footer