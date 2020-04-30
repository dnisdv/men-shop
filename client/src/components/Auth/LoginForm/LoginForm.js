import React,{useState} from 'react'
import './LoginForm.css'
import {connect} from 'react-redux'
import{ loginUser } from '../../../actions/userActions'

const LoginForm = ({loginUser}, props) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const LoginHandler = () => {
        loginUser({email, password}, props.history)
    }

    return(
        <div className='LoginForm'>
            <form onSubmit={LoginHandler} className='LoginForm_Form'>
                <input onChange={(e) => setEmail(e.target.value)} className='LoginForm_Input' placeholder='Email' type='text'name='email' />
                <input onChange={(e) => setPassword(e.target.value)} className='LoginForm_Input' placeholder='Password' type='password' name='password' />
            </form>

            <button onClick={LoginHandler} className='LoginForm_Button'>Log In</button>
        </div>
    )
} 

const mapStateToProps = (state) => ({
    user : state.user
  });


export default connect(mapStateToProps,{loginUser})(LoginForm)