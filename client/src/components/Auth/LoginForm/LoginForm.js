import React from 'react'
import './LoginForm.css'

const LoginForm = () => {
    return(
        <div className='LoginForm'>
            <form className='LoginForm_Form'>
                <input className='LoginForm_Input' placeholder='Email' type='text'name='email' />
                <input className='LoginForm_Input' placeholder='Password' type='password' name='password' />
            </form>

            <button className='LoginForm_Button'>Log In</button>
        </div>
    )
} 

export default LoginForm