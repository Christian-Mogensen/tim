import React from 'react'

const FormContainer = ({children}) => {
  return (
    <div className='grid grid-cols-1 row-auto gap-2 p-2 w-full'>{children}</div>
  )
}

export default FormContainer