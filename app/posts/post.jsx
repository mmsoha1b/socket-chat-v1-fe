"use client"

import Image from 'next/image'
import React, { useState } from 'react'
import img from "/public/dummy1.jpg"
import ReactionButton from './ReactionButton'
import Comment from './Comment'
import CommentInput from './CommentInput'


export default function Post() {
  const [commentsVisible,setCommentsVisible] = useState(false)
  const toggleCommentsVisibility = ()=>{
    setCommentsVisible(!commentsVisible)
  }
  return (
    <section className='bg-white p-4 w-1/2 pb-0 rounded-md border-[1px] gray-400 flex flex-col gap-6'>
      <div className='flex gap-2 items-center'>
        <div className='img-container-md '>
          <Image alt="" src={img} className='img-md' fill/>
        </div>
        <div className='flex justify-between'>
          <div className='flex flex-col gap-0'>
            <h4 className='font-bold'>Author</h4>
            <p className='font-light'> 2 hours ago</p>
          </div>
        </div>
      </div>

      <article className='border-t-[1px] border-gray-300 p-2 pb-0'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione, atque corrupti tenetur ducimus quis, amet fuga rerum distinctio porro iure, rem labore harum deleniti accusantium! Adipisci quae eveniet aut! Cum?
      </article>
      <div className='flex justify-between p-2'>
        <div className='font-light font-mono text-sm text-gray-500'>2 likes</div>
        <div className='font-light font-mono text-sm text-gray-500 cursor-pointer' onClick={toggleCommentsVisibility}>2 Comments</div>
      </div>
      <div className='border-t-[1px] border-gray-300 p-2 flex'>
        <ReactionButton>Like</ReactionButton>
        <ReactionButton clickHandler={toggleCommentsVisibility}>Comment</ReactionButton>
        <ReactionButton>Share</ReactionButton>
      </div>

      <div className={`p-4 ${commentsVisible?'flex':"hidden"} flex-col gap-4 `} >
        <CommentInput/>
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
      </div>


    </section>
  )
}
