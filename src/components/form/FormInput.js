import React from 'react'
import LogOut from '../../assets/img/icons/LogOut'

const FormInput = ({icon,type, value, onChange, placeholder}) => {
  return (
    <div className="relative w-full">
    <input
          type={type}
          className='p-2 pl-10 rounded transition-all bg-gray-50 relative outline-none placeholder:text-[12px] w-full'
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          />
          <div className="absolute left-2 top-1/2 -translate-y-1/2 ">{icon}</div>
          <p></p>
          </div>
  )
}

export default FormInput