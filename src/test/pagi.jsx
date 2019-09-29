import React, { Component } from 'react';
import _ from 'lodash'

const Pagi = (props) => {
    const {pageSize, totalItems, onPageClick,currentPage} = props
    const pageCount = Math.ceil(totalItems/pageSize)
    const pages =_.range(1,pageCount+1)
    return ( 
        <nav >
            <ul className="pagination">
            {pages.map(page=>
            <li className={page === currentPage ? 'page-item active' :'page-item'} key={page}><a className='page-link' onClick={()=>onPageClick(page)}>{page}</a></li>
            )}
            </ul>
        </nav>
     );
}
 
export default Pagi;