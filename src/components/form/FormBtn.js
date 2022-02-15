import React from 'react'

const FormBtn = ({val, onClick, customwidth, type, customgridSE}) => {
  return (
    <button
    type="submit"
    className={`bg-gray-700 text-white rounded h-8 ${customwidth} ${customgridSE}`}
    onClick={onClick}
  >
    {val}
  </button>
  )
}

export default FormBtn