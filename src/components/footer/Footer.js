import React from 'react'
import LogoBtn from '../btns/LogoBtn'

const Footer = () => {
  return (
    <footer className='
    bg-gray-50 px-3 h-14 flex items-center'>
        <ul className='grid grid-cols-3 gap-2 w-full'>
            <li className=' basis-full '><LogoBtn /> </li>
            <li className=' place-self-center text-[12px]'>copyright cmless</li>
        </ul>
    </footer>
  )
}

export default Footer