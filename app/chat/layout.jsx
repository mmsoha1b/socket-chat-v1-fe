import React from 'react'

export default function ChatLayout({children}) {
  return (
    <div className='flex flex-col relative items-center py-[5dvh] '>
    <div className='w-[95%]  bg-white h-[80dvh] overflow-auto shadow-lg rounded-lg p-4'>
      <div className=' mb-16 flex flex-col gap-4'>
        {children}
      </div>
    </div>
    </div>
  )
}
