import React from 'react'
import './LoginForm.css'
import {connect} from 'react-redux'
import{ loginUser } from '../../../actions/userActions'
import { Formik } from 'formik';
import * as Yup from 'yup'
import {withRouter} from 'react-router-dom'
import PropTypes from 'prop-types';


const LoginForm = ({loginUser, history, user:{loading, error}}) => {
    
    const formValidation = () => {
        return Yup.object().shape({
            email: Yup.string()
                .email("This must be an email")
                .required("Required"),
            password : Yup.string()
                .required("Required")
        })
    }
    

    return(
        <div className='LoginForm'>
            {error.login ? <span className='Auth_Error'>{error.login}</span> : null}

    <Formik
            initialValues={{email: '', password: '' }}
            validationSchema={formValidation}
            onSubmit={(values) => {
                loginUser(values, history)
            }}
            >
            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,   
            }) => (
                <form className='LoginForm_Form' onSubmit={handleSubmit}>
                <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    placeholder="Email"
                    className={
                        errors.email && touched.email
                          ? "LoginForm_Input LoginForm_Input_Error"
                          : "LoginForm_Input"
                      }
                />
                {errors.email && touched.email && (<div className='LoginForm_Input_Feedback'>{errors.email}</div>)}
                <input
                    type="password"
                    name="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    placeholder="Password"
                    className={
                        errors.password && touched.password
                          ? "LoginForm_Input LoginForm_Input_Error"
                          : "LoginForm_Input"
                      }
                />
                {errors.password && touched.password && (<div className='LoginForm_Input_Feedback'>{errors.password}</div>)}
                <button className='LoginForm_Button' type="submit" disabled={loading}>
                    Submit
                </button>
                </form>
            )}
            </Formik>

        </div>
    )
} 


const mapStateToProps = (state) => ({
    user : state.user
  });

LoginForm.propTypes = {
    loginUser: PropTypes.func,
    history: PropTypes.object,
    user: PropTypes.object
}

export default withRouter(connect(mapStateToProps,{loginUser})(LoginForm))