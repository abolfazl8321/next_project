'use client'
import Image from 'next/image'
import Link from 'next/link'
import ProductCart from './components/ProductCart'
import { getServerSession } from 'next-auth'
import { authOptions } from './api/auth/[...nextauth]/route'
import { Metadata } from 'next'
import { useState } from 'react'
import dynamic from 'next/dynamic';

const HeavyComponents=dynamic(()=>import('./components/HeavyComponents'),
{
  ssr:false,
  loading:()=><p>Loading...</p>})

export default function Home() {
  const [isVisible,setVisible]=useState(false);
  return (
    <main>
       <h1>سلام به سایت ما خوش آمدی</h1>
       <button onClick=
       {async()=>{
        const _=(await import('lodash')).default;
        const users=[
          {name:'c'},
          {name:'b'},
          {name:'a'}
        ];
        const sorted=_.orderBy(users,['name']);
        console.log(sorted);
       }}>Show</button>
    </main>
  )
}



/*      
const session=await getServerSession(authOptions)
<h1>سلام به سایت ما خوش آمدی {session && <span>{session.user!.name}</span>}</h1>
      <Link href="/users">کاربران</Link>
      <ProductCart/>
      <main className='relative h-screen'>
      <Image 
      src="https://bit.ly/react-cover" 
      alt='Coffee' 
      fill 
      className='object-cover' 
      sizes="(max-width:480px) 100vw,(max-width:768px) 50vw,33vw"
      quality={75}
      priority
      />
    </main>
      */
