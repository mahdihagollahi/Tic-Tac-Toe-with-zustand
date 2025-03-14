import React, { Fragment } from 'react'
interface SquareValue{
    value: string
    onSqureClick:any
}
const Square:React.FC<SquareValue> = ({value , onSqureClick}) => {
  return (
    <Fragment>
    <button onClick={onSqureClick} className='inline-flex items-center justify-center p-0 bg-white border border-[#999] text-base font-bold'>
   {value}
    </button>
    </Fragment>
  )
}

export default Square