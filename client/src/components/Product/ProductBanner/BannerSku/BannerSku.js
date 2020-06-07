import React,{useState, useEffect} from 'react'
import './BannerSku.css'
import Select from 'react-select'
import {connect} from 'react-redux'
import { Formik } from 'formik'

import {addToCart} from '../../../../actions/cartActions'
import { get_productInitialState } from '../../../../actions/productsActions'


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
      cart.map( (i) => {
        return product._id === i.productID
      }).includes(true) ? setCartActive(true) : setCartActive(false) 
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
                Object.keys(productInitialState).map( (i) => {
                  if(val[i] === '') return errors[i] = 'Required'
               })
              return errors
            }}
            onSubmit={async (values) => {
              addToCart({productID: product._id, count:1, sku:values, 
                        title: product.title, price: product.price, image : product.images[0].path, shipping_price: product.shipping_price})
            }}
            >
            {({
                values,
                errors,
                touched,
                handleSubmit,
                setValues,
            }) => (
                <form enableReinitialize className='BannerSku_Form' onSubmit={handleSubmit}>
                  {product.stock.map( i => ( 
                    <div key={i._id}>
                    <Select 
                        key={i._id}
                        name={i.title} 
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
                    <input type='submit' 
                    value={CartActive ? `Added To Cart` :'Add To Cart'} 
                    className={`ProductBannerSku_Button ${CartActive ? 'ProductBannerSku_Button_Cart_Finished' : ''}`}></input>
                </form>
            )}
            </Formik>
          </div>
        )
}


const mapStateToProps = (state) => ({
  product : state.products.product,
  productInitialState : state.products.productInitialState,
  cart : state.cart.items,
});

export default connect(mapStateToProps, {addToCart, get_productInitialState})(BannerSku)


const customStyles = {
  option: (styles, state) => ({
    ...styles,
    fontWeight: state.isSelected ? 900 : 400
    
  }),
  control: (styles) => ({
    ...styles,
    border: 'none',
    borderBottom: '1px solid black',
    focus:'none'
  }),
}




