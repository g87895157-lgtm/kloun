import React from 'react'

const Evaluation = ({ score }) => {
  return (
    <div className='absolute top-4 right-4 rounded-md bg-slate-900/70 px-3 py-1'>
      <h6 className='text-sm font-semibold text-yellow-400'>* {score}</h6>
    </div>
  )
}

export default Evaluation
