import { notFound } from 'next/navigation'
import React from 'react'

interface Props {
  params: { id: number },
  searchParams: {	sortBy: string }
}

const UserDetailPage = async ({ params: { id }, searchParams: { sortBy }}: Props) => {
	const user = await fetch(`http://localhost:3000/api/users/${id}`, {
		cache: 'no-cache'
	}).then(result => result.json())
	
	console.log('user', user)
	return (
		<>
			<table className='table table-bordered'>
				<thead>
					<tr>
						<th> name </th>
						<th> email </th>
						<th> followers </th>
						<th> registration date </th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>
							{ user.name }
						</td>
						<td>
							{ user.email }
						</td>
						<td>
							{ user.followers }
						</td>
						<td>
							{ user.registeredAt.toString() }
						</td>
					</tr>
				</tbody>
			</table>
		</>
	)
}

export default UserDetailPage