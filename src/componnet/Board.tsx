import React from 'react'
import Square from './Square'

const Board = () => {
  return (
    <div className='grid grid-cols-3 w-[calc(3 * 2.5rem)] h-[calc(3 * 2.5rem)] border border-[#999]'>
      <Square value="1"/>
      <Square value="2"/>
      <Square value="3"/>
      <Square value="4"/>
      <Square value="5"/>
      <Square value="6"/>
      <Square value="7"/>
      <Square value="8"/>
      <Square value="9"/>
    </div>
  )
}

export default Board