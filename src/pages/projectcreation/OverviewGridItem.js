import React from 'react'

const OverviewGridItem = ({icon,val,span, iconplacement}) => {
  return (
    <div className={`grid customgridarea ${span} gap-3`}><div className={`relative top-1 flex justify-end`}>{icon}</div><p className='col-span-7'>{val}</p></div>
  )
}

export default OverviewGridItem