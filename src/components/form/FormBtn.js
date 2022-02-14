import React from 'react'

const FormBtn = ({val, onClick}) => {
  return (
    <button
    className={`bg-gray-700 text-white rounded h-8 `}
    onClick={onClick}
  >
    {val}
  </button>
  )
}

export default FormBtn