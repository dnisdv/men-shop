import React, {useState} from 'react'
import './CartListItem.css'
import {connect} from 'react-redux'
import AutosizeInput from 'react-input-autosize';
import './CartListItem.css'
import DeleteICON from '../../../../Assests/icons/Delete.svg'
import PropTypes from 'prop-types';


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
    const [stateCount, setstatecount] = useState(+i.count || 1)

    const increaseHandle = () => {
        increaseProduct({productID: i.productID, sku:i.sku});
        setstatecount(+stateCount + +1)
        
    }
    const decreaseHandle = () => {
        if(stateCount === 1) return
        decreaseProduct({productID: i.productID, sku:i.sku});
        setstatecount(+stateCount - 1)
    }

    const changeInputHandle = (e) => {
        e.target.style.width = (stateCount.length === 0 ? 10 : stateCount.length) + "ch";
        setstatecount(+e.target.value.replace(/[^\d.]/g, ''))
    }
    const keyPressInputHandle = (e) => {
        const keys = ['0','1','2','3','4','5','6','7','8','9','.']
        return keys.indexOf(e.key) > -1
    }

    const blurInputHandle = (e) => {
        if(e.target.value < 1) {
            setCount({productID : i.productID, count: 1})

            return setstatecount(1)
        }

        setCount({productID : i.productID, count: stateCount, sku:i.sku})
        setstatecount(+e.target.value)
    }

    return(
        <li className='CartList_Item'>

        <div className='CartList_Item_IMG_Wrapper'>
                <img src={`/${i.image}`} alt='CartIMG' className='CartList_Item_IMG' />
        </div>

        <div className='CartList_Item_Data'>
            <div 
            style={{marginBottom : Object.values(i.sku).length > 0 ? '' : '25px'}}
            className={`CartList_Item_DataFirst`}>
                <h2 className='CartList_Item_DataFirst_Title'>{i.title}</h2>
                <div className='CartList_Item_Data_Wrapp'>
                    <button onClick={() => deleteOne(i.id, i.sku)} className='CartList_Item_Data_Wrapp_Button' >
                        <img src={DeleteICON} alt='deleteIcon' className='CartList_Item_Data_Wrapp_Delete'/>
                    </button>
                    <p className='CartList_Item_DataFirst_Price'>{i.price * i.count}$</p>
                </div>
            </div>
        

            {Object.values(i.sku).length > 0 ?
                <div className='CartList_Item_Data_Addition'>
                    {Object.values(i.sku).join('/')}
                </div> : null  
            }
            
            <div className='CartList_Item_DataSecond'>
            
                <div className='CartList_Item_DataSecond_Actions'>
                <button disabled={loading.cartActions ? true : false} onClick={decreaseHandle} className='CartList_Item_DataSecond_Actions_Decrease'>-</button>
                    <AutosizeInput
                            name="form-field-name"
                            value={stateCount}
                            onKeyPress={keyPressInputHandle}
                            onChange={changeInputHandle}
                            onBlur={blurInputHandle}
                            disabled={loading.cartActions ? true : false}
                            className='CartList_Item_DataSecond_Actions_Count'
                            min="1" max="100"
                        />
                    <button disabled={loading.cartActions ? true : false} onClick={increaseHandle}
                        className='CartList_Item_DataSecond_Actions_Increase'>+</button>
                </div>

            </div>
            
        </div>
        </li>
    )
}


const mapStateToProps = (state) => ({
    loading: state.cart.loading
  });

CartListItem.propTypes = {
    setCount:PropTypes.func,
    loading:PropTypes.object,
    increaseProduct: PropTypes.func,
    decreaseProduct: PropTypes.func,
    deleteOne:PropTypes.func,
    i: PropTypes.object
}


export default connect(mapStateToProps, {
    getCartProducts,
    setCount,
    decreaseProduct,
    increaseProduct,
    addToCart,
    deleteOne
})(CartListItem)