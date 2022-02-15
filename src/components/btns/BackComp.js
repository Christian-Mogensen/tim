import React from 'react'
import { Link } from 'react-router-dom'
import BackIcon from '../../assets/img/icons/BackIcon'
const BackComp = ({href}) => {
  return (
    <Link to={href}><div className='grid w-8 h-8 gap-3 border border-gray-300 rounded cursor-pointer place-content-center'><BackIcon /> </div></Link>
  )
}

export default BackComp