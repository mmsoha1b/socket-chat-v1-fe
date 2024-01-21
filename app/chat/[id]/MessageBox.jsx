import Image from 'next/image'
import React from 'react'
import img from "/public/dummy1.jpg"
import Link from 'next/link'

export default function MessageBox() {
  return (
    <div className='flex gap-2'>
      <Link href="/profile/1" className='w-8 h-8 rounded-[50%] bg-pink-100 relative cursor-pointer'>
        <Image alt="" src={img} style={{ objectFit: "cover" } } placeholder='blur' fill className='rounded-[50%]' />
      </Link>
      <div className='bg-blue-300 min-h-14 p-4 rounded-lg  w-fit max-w-prose'>
      </div>
    </div>
  )
}
