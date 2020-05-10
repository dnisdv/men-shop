import React from 'react'
import './BannerSku.css'
import Select from 'react-select'
import {connect} from 'react-redux'

const customStyles = {
  option: (styles, state) => ({
    ...styles,
  }),
  control: (styles) => ({
    ...styles,
    border: 'none',
    borderBottom: '1px solid black',
    focus:'none'
  }),
}

const BannerSku = ({ product : {stock}}) => {
  console.log(stock)
  if(!stock) return null
        return(
        <ul className='BannerSku'>
          {stock.map( i => (<li key={i._id} className='BannerSku_Item'>
                <Select placeholder={i.title} styles={customStyles} className='BannerSku_Item_Select' options={i.data.map(item => {return { value:item.value, label:item.value} })} />
            </li>))}                                                                                  
        </ul>
        )
}

const mapStateToProps = (state) => ({
  product : state.products.product
});

export default connect(mapStateToProps)(BannerSku)







