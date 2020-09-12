import React from 'react'
import './CartTotal.css'
import {connect} from 'react-redux'
import PropTypes from 'prop-types';
import Button from '../../Button/Button'

const buttonStyles = {
    width:"300px",
    height:"53px",
    textTransform: "uppercase",
    fontSize:"14px",
    marginTop:"40px",
    fontWeight:"700",
    marginLeft:"auto"
}

const CartTotal = ({cart :{TotalPrice, items}}) => {
    return(
        <div className='CartTotal'>

            <div className='CartTotal_Total'>
                <h5 className='CartTotal_Total_Title'>Total</h5>
                    <p className='CartTotal_Total_Value'>{TotalPrice || 0}<span className='Currency'>$</span></p>

            </div>
            <p className='CartTotal_Data'>Shipping costs will be specified in Checkout.</p>
            
            {
               items ? items.length !== 0 ?
               <Button styles={buttonStyles} to='/checkout'>Checkout</Button>
                : <Button styles={buttonStyles} disabled>Checkout</Button> : <Button styles={buttonStyles} disabled>Checkout</Button>
            }
        </div>
    )
}
const mapStateToProps = (state) => ({
    cart : state.cart,
    loading: state.cart.loading
});

CartTotal.propTypes = {
    TotalPrice:PropTypes.number,
    items:PropTypes.array
}


export default connect(mapStateToProps)(CartTotal)