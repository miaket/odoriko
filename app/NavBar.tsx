'use client'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'


const NavBar = () => {
  const { status, data: session } = useSession()

  return (
    <div className='flex bg-slate-400 p-6 space-x-4'>
      <Link href="/" className='mr-6'> home </Link>
      <Link href="/users" className=''> users </Link>
      { status === 'unauthenticated' &&
        <Link href="/api/auth/signin"> login </Link>
      }
      { status === 'authenticated' && 
        <p>{session.user?.name}</p> &&
        <Link href="api/auth/signout"> logout </Link>
      }
    </div>
  )
}

export default NavBar