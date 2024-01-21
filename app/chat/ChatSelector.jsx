import Image from 'next/image'
import React from 'react'
import img from "/public/dummy1.jpg"
import Link from 'next/link'

export default function ChatSelector() {
  return (
    <Link href="/chat/1" className='flex gap-4 h-20 p-4  w-full  hover:shadow-xl
                      hover:scale-[1.01] hover:pb-0  cursor-pointer items-center
                      '>

      <div className='w-14  h-14'>
          <Image src={img}
           alt=""
           className='rounded-[50%] h-full'
           />
      </div>


      <div className='flex items-center justify-between w-full border-b-[1px]  border-gray-400'>
        <div className='flex flex-col gap-1  py-2'>
          <h4 className='font-bold'>Chat Name</h4>
          <p className='font-light'>Latest message</p>
        </div>

        <p className='flex h-8 w-8 justify-center items-center bg-green-600 rounded-[50%] text-white'>
          1
        </p>
      </div>
    </Link>
  )
}
