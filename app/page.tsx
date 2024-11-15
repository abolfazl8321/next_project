import Image from 'next/image'
import Link from 'next/link'
import ProductCart from './components/ProductCart'
import { getServerSession } from 'next-auth'
import { authOptions } from './api/auth/[...nextauth]/route'

export default async function Home() {
  const session=await getServerSession(authOptions)
  return (
    <main >
      <h1>سلام به سایت ما خوش آمدی {session && <span>{session.user!.name}</span>}</h1>
      <Link href="/users">کاربران</Link>
      <ProductCart/>
    </main>
  )
}
