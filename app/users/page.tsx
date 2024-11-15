import React, { Suspense } from 'react'
import UserTable from './UserTable'
import Link from 'next/link'

interface Props{
  searchParams:{setOrder:string}
}
const UsersPage =async ({searchParams:{setOrder}}:Props) => {

  return (
    <div>
      <h1>کاربران</h1>
      <Link href="/users/new" className='btn'>کاربر جدید</Link>
      <Suspense fallback={<p>...Loading</p>}>
      <UserTable setOrder={setOrder}/>
      </Suspense>
    </div>
  )
}

export default UsersPage
