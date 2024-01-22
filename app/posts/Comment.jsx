import Image from 'next/image'
import img from "/public/dummy1.jpg"
import React from 'react'

export default function Comment() {
  return (
    <section className='flex '>
      <div className='flex gap-4 w-full'>
        <div className='img-container-md'>
          <Image src={img} alt="" className="img-md" fill/>
        </div>
        <div className='flex-1 bg-stone-100 p-8 rounded-lg border-[1px] border-gray-200'>
        </div>
      </div>
    </section>
  )
}
