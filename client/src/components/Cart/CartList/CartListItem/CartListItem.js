import React, {useState} from 'react'
import './CartListItem.css'
import {connect} from 'react-redux'
import AutosizeInput from 'react-input-autosize';
import './CartListItem.css'
import DeleteICON from '../../../../Assests/icons/Delete.svg'


import {
    getCartProducts,
    addToCart,
    deleteOne,
    decreaseProduct,
    increaseProduct,
    setCount
} from '../../../../actions/cartActions'

const CartListItem = ({
    setCount,
    loading,
    increaseProduct,
    decreaseProduct,
    deleteOne,
    i
}) => {
    const [state, setstate] = useState(i.count)

    const increaseHandle = () => {
        increaseProduct({productID: i.productID, sku:i.sku});
        setstate(+state + +1)
        
    }
    const decreaseHandle = () => {
        if(state === 1) return
        decreaseProduct({productID: i.productID, sku:i.sku});
        setstate(+state - 1)
    }

    const changeInputHandle = (e) => {
        console.log(e.target)
        e.target.style.width = (state.length === 0 ? 10 : state.length) + "ch";
        setstate(e.target.value)
    }

    const blurInputHandle = (e) => {
        setCount({productID : i.productID, count: state})
    }

    return(
        <li className='CartList_Item'>

        <div className='CartList_Item_IMG_Wrapper'>
            <img src={i.image} alt='CartIMG' className='CartList_Item_IMG' />
        </div>

        <div className='CartList_Item_Data'>
            <div className='CartList_Item_DataFirst'>
                <h2 className='CartList_Item_DataFirst_Title'>{i.title}</h2>
                <div className='CartList_Item_Data_Wrapp'>
                    <button onClick={() => deleteOne(i.id, i.sku)} className='CartList_Item_Data_Wrapp_Button' >
                        <img src={DeleteICON} alt='deleteIcon' className='CartList_Item_Data_Wrapp_Delete'/>
                    </button>
                    <p className='CartList_Item_DataFirst_Price'>{i.price * i.count}$</p>
                </div>
            </div>
        


            <div className='CartList_Item_Data_Addition'>
            {Object.values(i.sku).join('/')}
            </div>
            
            <div className='CartList_Item_DataSecond'>
            
                <div className='CartList_Item_DataSecond_Actions'>
                <button disabled={loading.cartActions ? true : false} onClick={decreaseHandle} className='CartList_Item_DataSecond_Actions_Decrease'>-</button>
                    <AutosizeInput
                            name="form-field-name"
                            value={state}
                            onChange={changeInputHandle}
                            onBlur={blurInputHandle}
                            disabled={loading.cartActions ? true : false}
                            className='CartList_Item_DataSecond_Actions_Count'
                        />
                    <button disabled={loading.cartActions ? true : false} onClick={increaseHandle}
                        className='CartList_Item_DataSecond_Actions_Increase'>+</button>
                </div>

                <p className='CartList_Item_DataSecond_Shipp'>{i.shipping_price === 0 ? 'Free Shipping' : `shipping : ${i.shipping_price}$`}</p>
            </div>
            
        </div>
        </li>
    )
}


const mapStateToProps = (state) => ({
    loading: state.cart.loading
  });


export default connect(mapStateToProps, {
    getCartProducts,
    setCount,
    decreaseProduct,
    increaseProduct,
    addToCart,
    deleteOne
})(CartListItem)