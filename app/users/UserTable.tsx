import Link from 'next/link'
import React from 'react'
import { sort } from 'fast-sort'

interface User {
  id: number;
  name: string;
  email: string;
  followers: number;
  isActive: boolean;
  registeredAt: Date;
}
interface Props {
  sortBy: 'name' | 'email'
}

const UserTable = async ( { sortBy }: Props) => {
  const res =  await fetch(
    'http://localhost:3000/api/users/',
    {
      cache: 'no-store',
    },
  )
  const users: User[] = await res.json();

  const sorted = sort(users).asc(u => u[sortBy]);
  return (
    <>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>
              <Link href="?sortBy=name"> Name </Link>
            </th>
            <th>
              <Link href="?sortBy=email"> Email </Link>
            </th>
          </tr>
        </thead>
        <tbody>
          {sorted.map(user =>
            <tr key={user.id}>
              <td><Link href={`/users/${user.id}`}> {user.name} </Link></td>
              <td>{user.email}</td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  )
}

export default UserTable