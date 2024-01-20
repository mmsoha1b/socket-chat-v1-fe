import Image from 'next/image'
import React from 'react'
import img from "/public/dummy1.jpg"
import { Button } from '@mantine/core'
import { FaPaperPlane, FaPhone, FaPhoneAlt } from 'react-icons/fa'

export default function Profile({params}) {
  const id =params.id
  return (
    <main className='flex flex-col gap-4 items-center p-4 '>
      <div className=' w-96 h-96 relative mt-8'>
        <Image
          src={img}
          alt='image'
          className='rounded-full'
          fill
          style={{ objectFit: "cover" }}
          />
      </div>
      <h3 className='text-4xl font-bold'>Name</h3>
      <p className='text-xl font-extralight'>About</p>
      <div className='flex gap-8  '>
        <Button  className='bg-blue-400 shadow-sm py-2 px-32 h-auto '  radius="xl">
          <FaPaperPlane className='mr-2' size={20}/>
          Message
        </Button>
        <Button  className='bg-red-500 py-4 px-32 h-auto'  radius="xl">
          <FaPhoneAlt className='mr-2' size={20}/>
          Call
        </Button>
      </div>
    </main>
  )
}
