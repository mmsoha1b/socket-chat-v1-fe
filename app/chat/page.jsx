import React from 'react'
import MessageBox from './MessageBox'
import { FaPaperPlane } from "react-icons/fa";

export default function Chat() {
  return (
    <div className='flex flex-col relative items-center py-[5dvh] '>
      <div className='w-[95%]  bg-slate-200 h-[80dvh] overflow-auto shadow-lg rounded-lg p-4'>
        <div className=' mb-16 flex flex-col gap-4'>
        <MessageBox/>
        <MessageBox/>
        <MessageBox/>
        <MessageBox/>
        <MessageBox/>
        <MessageBox/>
        <MessageBox/>
        <MessageBox/>
        <MessageBox/>
        <MessageBox/>
        <MessageBox/>
        <MessageBox/>
        <MessageBox/>
        <MessageBox/>
        </div>
      </div>
       <div className='w-[95%] relative bottom-16 flex min-h-20  bg-white shadow-lg rounded-full'>
        <div className='w-20 rounded-s-full bg-slate-100'></div>
        <input className='w-20 px-4 text-xl  flex-grow '></input>
        <div className='w-20 rounded-e-full bg-slate-100 flex  items-center cursor-pointer'>
          <FaPaperPlane size={30} className='ml-4'/>
        </div>
      </div>
    </div>
  )
}
