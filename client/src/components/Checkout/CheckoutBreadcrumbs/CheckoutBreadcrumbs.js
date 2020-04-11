import React, {} from 'react'
import './CheckoutBreadcrumbs.css'

import { Link } from 'react-router-dom'

const CheckoutBreadcrumbs = ({bread, setbread}) => {

    const ChangeAtive = (e) => {
        const dataname = e.target.dataset.name
        if(!bread[dataname].finished) return
        setbread({
            ...bread,
            Details :{ ...bread.Details, active:false},
            Shipping :{ ...bread.Shipping, active:false},
            Payment :{ ...bread.Payment, active:false},
            [dataname] : {...bread[dataname], active:true}
        })
    }

    return(
        <div className='CheckoutBreadcrumbs'>
            <span data-name='Cart' className='CheckoutBreadcrumbs_Item'><Link className='BreadCart' to='/cart'>Cart</Link></span>
            <span onClick={ChangeAtive} 
                 style={{fontWeight: bread['Details'].finished ? '700' : '400', color:bread['Details'].active ? 'black' : ''}}
                 data-name='Details' 
                 className={`CheckoutBreadcrumbs_Item ${bread['Details'].finished ? 'CheckoutBreadcrumbs_Item_Finished' :''}`}>
                     Details
            </span>
            <span onClick={ChangeAtive} 
                 style={{fontWeight: bread['Shipping'].finished ? '700' : '400',color:bread['Shipping'].active ? 'black' : ''}}
                 data-name='Shipping' 
                 className={`CheckoutBreadcrumbs_Item ${bread['Shipping'].finished ? 'CheckoutBreadcrumbs_Item_Finished' :''}`}>
                     Shipping
            </span>
            <span onClick={ChangeAtive} 
                 style={{fontWeight: bread['Payment'].finished ? '700' : '400',color:bread['Payment'].active ? 'black' : ''}}
                 data-name='Payment' 
                 className={`CheckoutBreadcrumbs_Item ${bread['Payment'].finished ? 'CheckoutBreadcrumbs_Item_Finished' :''}`}>
                     Payment
            </span>
        </div>
    )
}

export default CheckoutBreadcrumbs