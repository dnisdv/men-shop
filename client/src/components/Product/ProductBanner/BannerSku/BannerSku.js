import React from 'react'
import './BannerSku.css'
import Select from 'react-select'

const customStyles = {
  option: (styles, state) => ({
    ...styles,
    cursor: 'none',
  }),
  control: (styles) => ({
    ...styles,
    cursor: 'none',
    border: 'none',
    borderBottom: '1px solid black',
    focus:'none'
  }),
}

const optionsSize = [
    { value: 'L', label: 'L' },
    { value: 'XL', label: 'XL' },
    { value: 'XXL', label: 'XXL' }
  ]

  const optionsColor = [
    { value: 'Red', label: 'Red' },
    { value: 'Green', label: 'Green' },
    { value: 'Blue', label: 'Blue' }
  ]

const BannerSku = () => {
        return(
        <ul className='BannerSku'>
            <li className='BannerSku_Item'>
                <Select placeholder='Size' styles={customStyles} className='BannerSku_Item_Select' options={optionsSize} />
            </li>
            
            <li className='BannerSku_Item'>
                <Select  placeholder='Color' styles={customStyles} className='BannerSku_Item_Select' options={optionsColor} />
            </li>
        </ul>
        )
}

export default BannerSku