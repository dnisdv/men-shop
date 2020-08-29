import React,{useEffect} from 'react'
import './AuthPage.css'
import Auth from '../../components/Auth/Auth'

const AuthPage = () => {
    useEffect(() => {  
        window.scrollTo(0, 0)
    })
    return(
        <div className='AuthPage'>
            <img src='https://cutt.ly/1tOmSoS' alt='Decoration' className='AuthPage_IMG' />
            <Auth/>
        </div>
    )
}

export default AuthPage