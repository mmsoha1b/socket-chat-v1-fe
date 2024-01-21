import React from 'react'

export default function ReactionButton({children}) {
  return (
    <div className='flex-1 py-4 cursor-pointer flex justify-between items-center'>
    <p className='text-center text-lg text-gray-500 font-mono w-full'>
      {children}
    </p>
  </div>
  )
}
