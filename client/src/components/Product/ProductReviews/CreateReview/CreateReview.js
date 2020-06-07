import React,{useState} from 'react'
import './CreateReview.css'
import { Formik } from 'formik';
import Rate from 'rc-rate'
import * as Yup from 'yup'
import {connect} from 'react-redux'
import {add_review, get_reviewsByProduct} from '../../../../actions/productsActions'



const CreateReview = ({add_review, product, userReducer : {authenticated, user}}) => {

    const [isOpen, setisOpen] = useState(false)

    const toggleReview = (elem) => {
        setisOpen(!isOpen)
    }

    const formValidation = () => {
        return Yup.object().shape({
            email: Yup.string()
                .email("This must be an email")
                .required("Required"),
            username : Yup.string()
                .required("Required"),
            title : Yup.string()
                .required("Required"),
            review : Yup.string()
                .required("Required"),
        })
    }
    const [initialState, setinitialState] = useState({
        title: '', 
        review: '', 
        email: authenticated && user ? user.email : '', 
        username: authenticated && user ? user.username : '',
        rate: 0
    })

    return(
        <div className='CreateReview'>
            <button onClick={toggleReview} className='CreateReview_Button'>
                {!isOpen ? <i className="fas fa-pen">   Write Review</i>
                 : <i className="fas fa-eye-slash">   Hide Review</i>}
            </button>
        <Formik
            enableReinitialize
            initialValues={initialState}

            validationSchema={formValidation}
            onSubmit={(values, {setSubmitting, resetForm}) => {
                add_review({...values, product:product._id}, product._id)
                setisOpen(false)
                resetForm(initialState)
            }}>
            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,   
                setValues,
                
            }) => (
                <form className={`ReviewsForm_Form ${isOpen ? 'ReviewsForm_Form_Open' : ''}`} onSubmit={handleSubmit}>
                
                <h2 className='ReviewsForm_Form_Title'>Write a review</h2>

                <Rate className='ReviewsForm_Rate' 
                    character={<i className="fas fa-star"></i>}      
                    onChange={(value) => setValues({...values , rate : value })}             
                    value={values.rate}
                    defaultValue={0}
                />

                <input
                    type="text"
                    name="title"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.title}
                    placeholder="Title"
                    className={
                        errors.title && touched.title
                        ? "ReviewsForm_Input ReviewsForm_Input_Error"
                        : "ReviewsForm_Input"
                    }
                />
                {errors.title && touched.title && (<div className='LoginForm_Input_Feedback'>{errors.title}</div>)}


                <textarea
                    cols="40" rows="5"
                    type="text"
                    name="review"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.review}
                    placeholder="Review"
                    className={
                        errors.review && touched.review 
                        ? "ReviewsForm_Input ReviewsForm_Input_textArea ReviewsForm_Input_Error"
                        : "ReviewsForm_Input ReviewsForm_Input_textArea"
                    }
                />
                {errors.review && touched.review && (<div className='LoginForm_Input_Feedback'>{errors.review}</div>)}


               {!authenticated ?  <div className='ReviewsForm_NoAuth'>
                    <div className="ReviewsForm_NoAuth_Input_Wrapper">
                    <input
                        type="text"
                        name="username"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.username}
                        placeholder="User Name"
                        className={
                            errors.username && touched.username
                            ? "ReviewsForm_NoAuth_Input ReviewsForm_NoAuth_Input_Error"
                            : "ReviewsForm_NoAuth_Input"
                        }
                    />
                    {errors.username && touched.username && (<div className='LoginForm_Input_Feedback'>{errors.username}</div>)}
                    </div>

                    <div className="ReviewsForm_NoAuth_Input_Wrapper">
                    <input
                        type="email"
                        name="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                        placeholder="Email"
                        className={
                            errors.email && touched.email
                            ? "ReviewsForm_NoAuth_Input ReviewsForm_NoAuth_Input_Error"
                            : "ReviewsForm_NoAuth_Input"
                        }
                    />
                    {errors.email && touched.email && (<div className='LoginForm_Input_Feedback'>{errors.email}</div>)}
                    </div>
                    
                </div> : null}

                <button className='ReviewsForm_Button' type="submit">
                    Submit
                </button>
                </form>
            )}
        </Formik>
        </div>
    )
}

const mapStateToProps = (state) => ({
    userReducer : state.user,
    product : state.products.product
})

export default connect(mapStateToProps, {add_review, get_reviewsByProduct})(CreateReview)