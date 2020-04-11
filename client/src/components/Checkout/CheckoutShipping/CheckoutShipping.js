import React from 'react'
import DetailsPreview from '../CheckoutDetails/DetailsPreview/DetailsPreview'
import './CheckoutShipping.css'

const CheckoutShipping = ({bread, setbread}) => {

    const nextBread = () => {
        setbread({
            ...bread,
            Shipping: {
                ...bread.Shipping,
                 active:false,
                 finished:true,
            },
            Payment: {
                ...bread.Payment,
                active:true,
            }
        })
    }

    const prevBread = () => {
        setbread({
            ...bread,
            Details: {...bread.Details , active:true},
            Shipping: {...bread.Shipping, active:false},
        })
    }
 
    return(
        <div style={{display : bread['Shipping'].active ? 'flex' : 'none'}} className='CheckoutShipping'>

            <DetailsPreview />

            <h1 className='CheckoutShipping_Title'>Shipping method</h1>
            <ul className='CheckoutShipping_List'>
                <li className='CheckoutShipping_List_Item'>
                    <div className='CheckoutShipping_List_Item_Data'>
                        <input className='Checkput' type="radio" id='Shipping1' name="Shipping" />
                        <label htmlFor='Shipping1' className='CheckoutShipping_List_Item_Title'>Standart Shipping</label>
                    </div>
                    <p className='CheckoutShipping_List_Item_Price'>Free</p>
                </li>

                <li className='CheckoutShipping_List_Item'>
                    <div className='CheckoutShipping_List_Item_Data'>
                        <input type="radio" id='Shipping2' name="Shipping" />
                        <label htmlFor='Shipping2' className='CheckoutShipping_List_Item_Title'>2 - 3 Bussines day shipping</label>
                    </div>
                    <p className='CheckoutShipping_List_Item_Price'>5.00</p>
                </li>

            </ul>
            <div className='CheckoutShipping_Actions'>
                <button onClick={prevBread} className='CheckoutShipping_Actions_Back'>Back to Details</button>
                <button onClick={nextBread} className='CheckoutShipping_Actions_Button'>Next</button>
            </div>
        </div>
    )
}

export default CheckoutShipping