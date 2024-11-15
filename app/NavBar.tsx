'use client'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  const {status,data:session}=useSession();
  return (
    <div className='flex bg-slate-200 p-3'>
      <Link href="/" className='mr-5'>خانه</Link>
      <Link href="/users" className='mr-5'>کاربران</Link>
      {status ==='loading'&&<div>...Loading</div>}
      {status==='authenticated' && 
      <div className='mr-5'>{session.user!.name}
        <Link href='/api/auth/signout' className='mr-5'>خروج</Link></div>}
      {status==='unauthenticated' && <Link href="/api/auth/signin" className='mr-5'>Login</Link>}
    </div>
  )
}

export default NavBar
