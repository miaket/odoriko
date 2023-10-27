import React, { Suspense } from 'react'
import UserTable from './UserTable';
import Link from 'next/link';

interface Props {
	searchParams: {	sortBy: 'name' | 'email' }
}

const UsersPage = ({ searchParams: { sortBy } }: Props) => {
  return (
    <>
      <h1>UsersPage, {sortBy}</h1>
      <p>{new Date().toLocaleTimeString()}</p>
      <Link href='users/new' className='btn btn-primary'> New User </Link>
      <Suspense fallback={<p>... loading</p>}>
        <UserTable sortBy={sortBy}/>
      </Suspense>
    </>
  )
}

export default UsersPage