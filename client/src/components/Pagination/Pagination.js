import React from 'react'
import './Pagination.css'
import ReactPaginate from 'react-paginate';
import PropTypes from 'prop-types';

const Pagination = ({items, totalPages, onChange, forcePage}) => {
    return(
        <div className='Pagination_Wrapper'>
            {items && items.length !== 0 ?
            <div className='Pagination'>
                <ReactPaginate
                    containerClassName={'Pagination_List'}
                    pageCount={totalPages}
                    forcePage={forcePage}
                    pageRangeDisplayed={5}
                    marginPagesDisplayed={3}
                    onPageChange={onChange}
                    activeClassName='Pagination_Item_active'
                    activeLinkClassName='Pagination_Item_Link_active'
                    pageClassName='Pagination_Item'
                    nextLinkClassName="Pagination_List_Next"
                    previousLinkClassName="Pagination_List_Prev"
                    pageLinkClassName='Pagination_Item_Link'
                    disabledClassName="Pagination_List_Disabled"
                />
            </div>
            : null}
        </div>
    )
}

Pagination.propTypes = {
    items: PropTypes.array,
    totalPages: PropTypes.number,
    onChange: PropTypes.func,
    forcePage: PropTypes.number
}

export default Pagination