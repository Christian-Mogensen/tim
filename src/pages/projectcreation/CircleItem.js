import React from 'react'

const CircleItem = ({active}) => {
  return (
    <div className={`h-2 w-2 border-2 border-gray-600 rounded-full place-self-center ${active}`}></div>
  )
}

export default CircleItem