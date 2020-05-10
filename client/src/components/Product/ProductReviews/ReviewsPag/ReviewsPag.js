import React from 'react'
import './ReviewsPag.css'
import ArrowLeft from '../../../../Assests/icons/arrow-left.svg'
import ArrowRight from '../../../../Assests/icons/arrow-right-pag.svg'

import {connect} from 'react-redux'
import { get_reviewsByProduct } from '../../../../actions/productsActions'

import {withRouter} from 'react-router'

import ReactPaginate from 'react-paginate';

const ReviewsPag = ({get_reviewsByProduct, reviews : {totalPages}, history}) => {


    return(
        <div className='ReviewsPag'>
            <ReactPaginate
                containerClassName={'ReviewsPag_List'}
                pageCount={totalPages}
                pageRangeDisplayed={5}
                marginPagesDisplayed={3}
                onPageChange={(e) => get_reviewsByProduct(history.location.pathname.split('/')[2], e.selected)}
                activeClassName='ReviewsPag_Item_active'
                activeLinkClassName='ReviewsPag_Item_Link_active'
                pageClassName='ReviewsPag_Item'
                nextLinkClassName="ReviewsPag_List_Next"
                previousLinkClassName="ReviewsPag_List_Prev"
                pageLinkClassName='ReviewsPag_Item_Link'
                disabledClassName="ReviewsPag_List_Disabled"
             />
        </div>
    )
}

const mapStateToProps = (state) => ({
    reviews : state.products.reviews,
  });

export default withRouter(connect(mapStateToProps, {get_reviewsByProduct})(ReviewsPag))