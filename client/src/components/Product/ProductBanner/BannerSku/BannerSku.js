import React,{useState, useEffect} from 'react'
import './BannerSku.css'
import Select from 'react-select'
import {connect} from 'react-redux'
import { Formik } from 'formik'

import {addToCart} from '../../../../actions/cartActions'
import { get_productInitialState } from '../../../../actions/productActions'
import PropTypes from 'prop-types';

const BannerSku = ({
  addToCart,
  cart,
  productInitialState,
  product,
  get_productInitialState
}) => {
  
  const [CartActive, setCartActive] = useState(false)
  useEffect(() => {
    if(cart){
      const cartItems = cart.map( (i) => {
        return product._id === i.productID
      })
      cartItems.includes(true) ? setCartActive(true) : setCartActive(false);
    }
    get_productInitialState(product._id)
  }, [cart, get_productInitialState, product._id])

  if(!(product.stock && productInitialState)) return null
        return(
          <div className='BannerSku'>
      <Formik
            enableReinitialize={true}
            initialValues={productInitialState}
            validate={(val) => {
              const errors = {}
              Object.keys(productInitialState).map( (i) => 
                  val[i] === ''?  errors[i] = 'Required' : false
              )
              return errors
            }}
            onSubmit={(values) => {
              return addToCart({productID: product._id, count:1, sku:values, 
                        title: product.title, price: product.price, image : product.images[0].path})
            }}
            >
            {({
                values,
                errors,
                touched,
                handleSubmit,
                setValues,
            }) => (
                <form className='BannerSku_Form' onSubmit={handleSubmit}>
                  {product.stock.map( i => ( 
                    <div key={i._id}>
                    <Select 
                        key={i._id}
                        name={i.title} 
                        isSearchable={false}
                        onChange={ (e) => {
                          setValues({...values, [i.title] : e.value})
                        }} 
                        placeholder={i.title} 
                        styles={customStyles} 
                        className='BannerSku_Item_Select' 
                        options={i.data.map(item => {return { value:item.value, label:item.value} })} />
                        {errors[i.title] && touched[i.title] && (<div className='RegisterForm_Input_Feedback'>{errors[i.title]}</div>)}
                    </div>
                  ))}
                    <button type='submit' 
                    className={`ProductBannerSku_Button ${CartActive ? 'ProductBannerSku_Button_Cart_Finished' : ''}`}>{CartActive ? `Added To Cart` :'Add To Cart'}</button>
                </form>
            )}
            </Formik>
          </div>
        )
}


const mapStateToProps = (state) => ({
  product : state.product.product,
  productInitialState : state.product.productInitialState,
  cart : state.cart.items,
});

BannerSku.propTypes = {
  addToCart:PropTypes.func,
  cart: PropTypes.array,
  productInitialState: PropTypes.object,
  product:PropTypes.object,
  get_productInitialState: PropTypes.func
}

export default connect(mapStateToProps, {addToCart, get_productInitialState})(BannerSku)


const customStyles = {
  option: (styles, state) => ({
    ...styles,
    fontWeight: state.isSelected ? 700 : 400,
    border: 'none',
    color: 'black',
    "&:active": {
      background:"rgba(0,0,0,0.2)"
    },
    padding: 10,
    backgroundColor:'white'
  }),
  control: (styles) => ({
    ...styles,
    boxShadow: "none",
    border: 'none',
    borderBottom: '1px solid black',
    '&:hover': { borderColor: 'gray' }, 
  }),

}




