import React from 'react'
import { Formik } from 'formik';
import * as Yup from 'yup'
import './AccountSettings.css'

import {connect} from 'react-redux'
import PropTypes from 'prop-types';


const AccountSettings = ({user}) => {

    const initialState = {
        firstName : "",
        lastName: "",
        email: user.email ||  "",
        birthDate : ""

    }

    return (
        <div className='AccountSettings'>

            <div className="AccountSettings_Title_Wrapper">
                <h2 className="AccountSettings_Title1">Your</h2>
                <h2 className="AccountSettings_Title2">Settings</h2>
            </div>

            <div className="AccountSettings_Contact">

            <h2 className="AccountSettings_Contact_Title" >Contact Information</h2>

            <Formik
            initialValues={initialState}
            // validationSchema={}
            onSubmit={(values) => {
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
                <form className='AccountSettings_Form' onSubmit={handleSubmit}>
                    <div className="AccountSettings_Form_Wrapper">
                        <input
                            type="text"
                            name="firstName"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.firstName}
                            placeholder="First Name"
                            className={
                                errors.firstName && touched.firstName
                                ? "AccountSettings_Input AccountSettings_Input_Error"
                                : "AccountSettings_Input"
                            }
                        />
                        {errors.firstName && touched.firstName && (<div className='AccountSettings_Input_Feedback'>{errors.firstName}</div>)}

                        
                        <input
                            type="text"
                            name="lastName"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.lastName}
                            placeholder="Last Name"
                            className={
                                errors.lastName && touched.lastName
                                ? "AccountSettings_Input AccountSettings_Input_Error"
                                : "AccountSettings_Input"
                            }
                        />
                        {errors.lastName && touched.lastName && (<div className='AccountSettings_Input_Feedback'>{errors.lastName}</div>)}


                        <input
                            type="email"
                            name="email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                            placeholder="Email"
                            className={
                                errors.email && touched.email
                                ? "AccountSettings_Input AccountSettings_Input_Error"
                                : "AccountSettings_Input"
                            }
                        />
                            {errors.email && touched.email && (<div className='AccountSettings_Input_Feedback'>{errors.email}</div>)}



                        <input
                            type="date"
                            name="birthDate"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.birthDate}
                            placeholder="Date of Birth"
                            className={
                                errors.birthDate && touched.birthDate
                                ? "AccountSettings_Input AccountSettings_Input_Error"
                                : "AccountSettings_Input"
                            }
                        />
                            {errors.birthDate && touched.birthDate && (<div className='AccountSettings_Input_Feedback'>{errors.birthDate}</div>)}
                    </div>

                
                    <button className='AccountSettings_Button' type="submit" >
                        Save
                    </button>
                </form>
            )}
            </Formik>
            </div>


        </div>
    )
}

const mapStateToProps = (state) => ({
    user: state.user.user
})

AccountSettings.propTypes = {
    user: PropTypes.object
}

export default connect(mapStateToProps)(AccountSettings)