import React from 'react'

const CheckoutPayment = ({bread, setbread}) => {
    return(
        <div style={{display : bread['Payment'].active ? 'flex' : 'none'}} className='CheckoutPayment'>
            <h2 className='CheckoutPayment_Title'>There will be payment</h2>
        </div>
    )
}

export default CheckoutPayment