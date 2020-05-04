import React from 'react'
import './RegisterForm.css'
import {connect} from 'react-redux'
// import validator from 'validator';
import { Formik } from 'formik';
import { withRouter } from 'react-router';
import * as Yup from 'yup'

import {registerUser, checkUsernameExist} from '../../../actions/userActions'
import axios from 'axios';

const RegisterForm = ({registerUser,checkUsernameExist, user:{loading, usernameExist ,error}, history}) => {


    const formValidation = () => {
        return Yup.object().shape({
            email: Yup.string()
                .email("This must be an email")
                .required("Required"),
            password : Yup.string()
                .required("Required")
                .min(3, "password must have minimum 3 characters"),
            username: Yup.string()
                .required("Required")
                .min(3, "Username must have minimum 3 characters")
                .max(30, "Username must have maximum 30 characters")
        })
    }

    return(
        <div className='RegisterForm'>

            {error.register ? <span className='Auth_Error'>{error.register}</span> : null}

            <Formik
            initialValues={{username: '', email: '', password: '' }}
            validationSchema={formValidation}
            onSubmit={(values) => {
                registerUser(values, history)
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
                <form className='RegisterForm_Form' onSubmit={handleSubmit}>
                <input style={{ border: usernameExist === true ? '1px solid red' : "1px solid black"}}
                    type="text"
                    name="username"
                    onChange={(e) => {
                        handleChange(e)
                        checkUsernameExist(e.target.value)
                    }}
                    onBlur={handleBlur}
                    value={values.username}
                    placeholder="Username"
                    className={
                        errors.username && touched.username
                          ? "RegisterForm_Input RegisterForm_Input_Error"
                          : "RegisterForm_Input"
                      }
                />
                {usernameExist === true ? <div className='RegisterForm_Input_Feedback'>Username already exist</div> : null}
                {errors.username && touched.username && (<div className='RegisterForm_Input_Feedback'>{errors.username}</div>)}
                <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    placeholder="Email"
                    className={
                        errors.email && touched.email
                          ? "RegisterForm_Input RegisterForm_Input_Error"
                          : "RegisterForm_Input"
                      }
                />
                {errors.email && touched.email && (<div className='RegisterForm_Input_Feedback'>{errors.email}</div>)}
                <input
                    type="password"
                    name="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    placeholder="Password"
                    className={
                        errors.password && touched.password
                          ? "RegisterForm_Input RegisterForm_Input_Error"
                          : "RegisterForm_Input"
                      }
                />
                {errors.password && touched.password && (<div className='RegisterForm_Input_Feedback'>{errors.password}</div>)}
                <button className='RegisterForm_Button' type="submit" disabled={loading}>
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


export default withRouter(connect(mapStateToProps,{checkUsernameExist,registerUser})(RegisterForm))