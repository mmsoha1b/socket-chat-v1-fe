import React from 'react'

export default function Chat() {
  return (
    <div className='flex flex-col relative items-center py-[5dvh] '>
      <div className='w-[95%]  bg-slate-200 h-[80dvh] overflow-auto shadow-lg rounded-lg'>
      </div>
        <div className='w-[95%] absolute bottom-16 min-h-20 bg-white shadow-lg rounded-full'></div>
    </div>
  )
}
