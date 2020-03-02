import React from 'react'
const Sorted = props => {
  const { value, sorted, list } = props
  return (
    <div className='items flex-center'>
      <div className='flex-center'>{value ? sorted : list}</div>
    </div>
  )
}
export default Sorted
