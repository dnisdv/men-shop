import React,{useState} from 'react'
import './Auth.css'
import LoginForm from './LoginForm/LoginForm'
import RegisterForm from './RegisterForm/RegisterForm'


const Auth = () => {

    const [ActiveForm, setActiveForm] = useState('login')

    const ToggleForm = () => {
        if(ActiveForm === 'login') return setActiveForm('register')
        if(ActiveForm === 'register') return setActiveForm('login')
        if(ActiveForm !== 'login' || 'register') return setActiveForm('login')
    }

    return(
        <div className='Auth'>

            <div className='Auth_Data'>
                <h2 className='Auth_Data_Title'>{ActiveForm === 'login' ? 'Sign In' : 'Create an account.'}</h2>
            </div>

            <div className='Auth_Socials'>
                <button className='Auth_Socials_Item Auth_Socials_Item_Gmail'>G-mail</button>
                <button className='Auth_Socials_Item Auth_Socials_Item_Facebook'>Facebook</button>
                <button className='Auth_Socials_Item Auth_Socials_Item_VK'>VK</button>
            </div>
            
            { ActiveForm === 'login' ? <LoginForm /> : <RegisterForm /> }
            <div className='Auth_Toggle'>
                    <p className='Auth_Toggle_Main'>{ActiveForm === 'login' ? 'Dont have an account?' : 'have an account?'}
                        <button onClick={ToggleForm} className='Auth_Toggle_Button'>{ActiveForm === 'login' ? 'Register Now' : 'Log In'}</button>
                    </p>
            </div>
        </div>
    )
}

export default Auth