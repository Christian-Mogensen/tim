import React from 'react'

const FrontPage = () => {
  return (
    <div className='bg-blue-200 px-2'>
    <div className='relative h-screen grid place-content-center bg-red-300'>
        what
        <button className='absolute top-1/2 left-2/3 w-[100px] h-[50px] bg-green-500'>CTA</button>
    </div>
    <div className=' h-screen grid place-content-center bg-green-200'>
        why
    </div>
    <div className='bg-orange-300 h-screen grid place-content-center'>
        how
    </div>
    </div>
  )
}

export default FrontPage