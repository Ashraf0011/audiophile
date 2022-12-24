import React from 'react'

const CartINC = ({ increaser, decreaser, amount }) => {
    return (
        <div className='increment'>
            <span className='incrementer inc_btn' onClick={decreaser} > - </span>
            <span className='incrementer'>{amount}</span>
            <span className='incrementer inc_btn' onClick={increaser}> + </span>
        </div>
    )
}

export default CartINC