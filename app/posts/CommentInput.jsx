"use client"
import Image from 'next/image'
import img from "/public/dummy1.jpg"
import React from 'react'
import { Button, Textarea } from '@mantine/core'

export default function CommentInput() {
  return (
    <section className='flex flex-col gap-1'>
    <div className='flex gap-4 w-full'>
      <div className='img-container-md'>
        <Image src={img} alt="" className="img-md" fill/>
      </div>
      <Textarea className='flex-1 bg-stone-100 'size='xl' radius="md" placeholder='Write a comment ...' ></Textarea>
    </div>
    <div className='w-full flex justify-end'>
      <Button className='bg-blue-400' radius="md" size='xs'>Save</Button>
    </div>
  </section>
  )
}
