"use client"
import { Button, Textarea } from '@mantine/core'
import React from 'react'

export default function CreatePost() {
  return (
    <main className='flex justify-center w-full p-4'>
      <div className='bg-white w-1/2 p-4 min-h-[40rem] border-[1px] border-gray-300 flex flex-col gap-4'>
        <h3 className='font-bold text-xl'>Share your thoughts</h3>
        <Textarea className='border-[1px] p-4 text-lg rounded-lg border-black flex-1'
        styles={{
          input:{border:"none",fontSize:"1.2rem",height:"100%"},
          wrapper:{height:"100%"},
        }}
        placeholder='Write something' >

        </Textarea>
        <div className='w-full p-2 flex justify-end'>
          <Button className='bg-blue-500'>Post</Button>
        </div>
      </div>
    </main>
  )
}
