import React from 'react'
import Logo from './Logo'
import NavBtn from './NavBtn'

const Nav = () => {
    const navChildArr = [
        {stuff:<Logo />},
        {stuff:"item 1"},
        {stuff:"item 2"},
    ]
  return (
    <nav className='w-full p-1 max-w-7xl'>
        <ul className='grid grid-cols-3 gap-2 place-content-center'>
        {navChildArr.map((nc, i)=><NavBtn key={i} stuff={nc.stuff} />)}
        </ul></nav>
  )
}

export default Nav