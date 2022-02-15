import React from 'react'
import CircleItem from './CircleItem'

const CircleHistory = ({active}) => {
  return (
    <div className='grid w-full h-10 grid-cols-7'>
        <CircleItem active={active} />
        <CircleItem />
        <CircleItem />
        <CircleItem />
        <CircleItem />
        <CircleItem />
        <CircleItem />
            
        </div>
  )
}

export default CircleHistory