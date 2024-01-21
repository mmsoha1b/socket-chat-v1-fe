import React from 'react'
import MessageBox from './MessageBox'
import { FaPaperPlane } from "react-icons/fa";
export default function Chat() {
  return (
    <>
    <div className='flex flex-col gap-4 mb-4'>
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
     <div className='w-[95%] self-center absolute bottom-8 border-[1px] border-black flex min-h-20  bg-white shadow-lg rounded-full'>
      <div className='w-20 rounded-s-full bg-slate-100 border-e-[1px] border-black'></div>
      <input className='w-20 px-4 text-xl  flex-grow '></input>
      <div className='w-20 rounded-e-full bg-slate-100 flex  border-s-[1px] border-black items-center cursor-pointer'>
        <FaPaperPlane size={30} className='ml-4'/>
      </div>
    </div>
    </>
  )
}
