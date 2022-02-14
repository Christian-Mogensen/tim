import React from 'react'

const NavBtn = ({val,spcstyling}) => {
  return (
    <button className={`${spcstyling} w-16 h-6 rounded text-[12px] font-bold`}>{val}</button>
  )
}

export default NavBtn