import React, { Fragment } from 'react'

const Square = ({value , onSqureClick}) => {
  return (
    <Fragment>
    <button onClick={onSqureClick} className='inline-flex items-center justify-center p-0 bg-white border border-[#999] text-base font-bold'>
   {value}
    </button>
    </Fragment>
  )
}

export default Square