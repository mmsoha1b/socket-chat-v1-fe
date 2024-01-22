import React from 'react'
import Post from './post'

export default function Posts() {
  return (
    <main className='flex flex-col items-center gap-6 px-2 py-8'>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
    </main>
  )
}
