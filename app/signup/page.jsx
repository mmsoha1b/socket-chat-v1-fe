"use client"

import { Button, PasswordInput, TextInput } from '@mantine/core'
import { useForm } from '@mantine/form'
import Link from 'next/link'
import React from 'react'

export default function Signup() {
  const form = useForm({
    initialValues:{
      email:"",
      password:"",
      confirmPassword:"",
      firstName:"",
      lastName:"",
      userName:"",
    },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      password:(value)=>value.length>5?null:"Password too short",
      confirmPassword:(value,values)=>value===values.password?null:"Passwords should match",
      firstName:(value)=>value.length>0?null:"First name cant be empty",
      secondName:(value)=>value.length>0?null:"Second name cant be empty"
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
            <div className='flex justify-between'>
              <TextInput
                  withAsterisk
                  label="First Name"
                  placeholder='Joe'
                  variant='filled'
                  radius="md"
                  description="Enter first name"
                  size="md"
                  className='w-96 mb-8'
                  {...form.getInputProps("firstName")}
                  />
                  <TextInput
                  withAsterisk
                  label="Last Name"
                  placeholder='Doe'
                  variant='filled'
                  radius="md"
                  description="Enter last name"
                  size="md"
                  className='w-96 mb-8'
                  {...form.getInputProps("lastName")}
                  />
            </div>
            <TextInput
                withAsterisk
                label="Username"
                placeholder='xXnewcooluserXx'
                variant='filled'
                radius="md"
                description="Enter a username"
                size="md"
                className='w-full mb-8'
                {...form.getInputProps("lastName")}
                />
              <PasswordInput
                withAsterisk
                label="Password"
                placeholder='At least 6 chaarcters'
                variant='filled'
                radius="md"
                description="Enter a password"
                size="md"
                className='w-full mb-8'
                {...form.getInputProps("password")}
                />
                <PasswordInput
                withAsterisk
                label="Retype password"
                placeholder='At least 6 chaarcters'
                variant='filled'
                radius="md"
                description="Reneter pasword"
                size="md"
                className='w-full mb-8'
                {...form.getInputProps("confirmPassword")}
                />

              <Button type="submit" className='bg-blue-500 w-32 rounded-lg' size='md'>
                Sign Up
              </Button>
          </form>
        <p className='mt-10  text-sm'>
          Already have an accout? <Link href="/signin" className='link'> Sign in</Link>
        </p>
        </div>
      </div>
    </main>
  )
}
