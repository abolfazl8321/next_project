import { sort } from 'fast-sort';
import Link from 'next/link';
import React from 'react'

interface User{
    id:number;
    name:string;
    email:string;
}
interface Props{
  setOrder:string
}
const UserTable = async({setOrder}:Props) => {
    const res=await fetch('https://jsonplaceholder.typicode.com/users',{cache:"no-store"})
    const users:User[]=await res.json();
    const userSort=sort(users).asc(setOrder==='email'?
      user=>user.email:
      user=>user.name
    )
  return (
    <div>
        <table className='table table-bordered'>
        <thead>
          <tr>
            <th>
              <Link href="/users?setOrder=name">Name</Link>
            </th>
            <th>
            <Link href="/users?setOrder=email">Email</Link>
            </th>
          </tr>
        </thead>
        <tbody>
          {userSort.map(user=><tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
          </tr>)}
        </tbody>
      </table>
    </div>
  )
}

export default UserTable
