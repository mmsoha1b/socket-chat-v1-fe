"use client"
import { Button, PasswordInput, TextInput } from '@mantine/core'
import { useForm } from '@mantine/form'
import Link from 'next/link'
import React from 'react'
export default function SignIn() {
  const form = useForm({
    initialValues:{
      email:"",
      password:"",
    },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      password:(value)=>value.length>5?null:"Password too short"
    },
  })
  return (
    <main className='w-1/2 relative top-[50vh]  left-1/4 -translate-y-2/3 '>
      <div className='bg-white w-full min-h-[50vh] p-8 flex justify-center shadow-xl rounded-xl'>
        <div className='w-full'>
          <form
          onSubmit={form.onSubmit((values)=>console.log(values))}
          className='flex w-full flex-col  pt-6 '
          >
            <TextInput
            withAsterisk
            label="Email"
            placeholder='your@email.com'
            variant='filled'
            radius="md"
            description="Enter a valid email"
            size="md"
            className='w-full mb-16'
            {...form.getInputProps("email")}
            />

            <PasswordInput
            withAsterisk
            label="Password"
            variant='filled'
            size="md"
            radius="md"
            description="Enter at least 6 characters"
            placeholder='At least 6 charcters'
            className='w-full mb-8'
            {...form.getInputProps("password")}
            />

            <Button type="submit" className='bg-blue-500 w-32 rounded-lg' size='md'>
              Sign In
            </Button>
          </form>
          <p className='mt-10  text-sm'>
              Don&#39; have an accout? <Link href="/signup" className='link' >Sign up</Link>
          </p>
      </div>
    </div>
  </main>
  )
}
