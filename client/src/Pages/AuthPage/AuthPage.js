import React from 'react'
import './AuthPage.css'
import Auth from '../../components/Auth/Auth'

const AuthPage = () => {
    return(
        <div className='AuthPage'>
            <img src='https://cutt.ly/1tOmSoS' alt='Decoration' className='AuthPage_IMG' />
            <Auth/>
        </div>
    )
}

export default AuthPage