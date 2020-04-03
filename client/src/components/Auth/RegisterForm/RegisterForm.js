import React from 'react'
import './RegisterForm.css'

const RegisterForm = () => {
    return(
        <div className='RegisterForm'>
            <form className='RegisterForm_Form'>
                <input className='RegisterForm_Input' placeholder='Name' type='text'name='name' />
                <input className='RegisterForm_Input' placeholder='Email' type='text'name='email' />
                <input className='RegisterForm_Input' placeholder='Password' type='password' name='password' />
            </form>

            <button className='RegisterForm_Button'>Register</button>
        </div>
    )
}

export default RegisterForm