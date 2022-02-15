import React from 'react'

const FormContainer = ({children, onSubmit}) => {
  return (
    <form onSubmit={onSubmit} className='grid w-full grid-cols-1 row-auto gap-8 p-2 mt-12'>{children}</form>
  )
}

export default FormContainer