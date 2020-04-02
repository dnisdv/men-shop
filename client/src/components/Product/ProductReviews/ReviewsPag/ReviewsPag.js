import React from 'react'
import './ReviewsPag.css'
import ArrowLeft from '../../../../Assests/icons/arrow-left.svg'
import ArrowRight from '../../../../Assests/icons/arrow-right-pag.svg'


const ReviewsPag = () => {
    return(
        <div className='ReviewsPag'>
            <div className='ReviewsPag_Action ReviewsPag-Prev'><img alt='ArrowLeft' src={ArrowLeft} /></div>
            <ul className='ReviewsPag_List'>
                <li className='ReviewsPag_List_Item'>1</li>
                <li className='ReviewsPag_List_Item'>2</li>
                <li className='ReviewsPag_List_Item'>3</li>
                <li className='ReviewsPag_List_Item'>4</li>
                <li className='ReviewsPag_List_Item'>5</li>
                <li className='ReviewsPag_List_Item'>6</li>
            </ul>
            <div className='ReviewsPag_Action ReviewsPag-Prev'><img alt='ArrowRight' src={ArrowRight} /></div>
        </div>
    )
}

export default ReviewsPag