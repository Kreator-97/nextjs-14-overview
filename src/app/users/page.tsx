import Link from 'next/link'
import { getUsers } from '@/users/services/get-users'

export default async function UsersPage() {
  const users = await getUsers()

  return (
    <div>
      <h1 className="heading">
        Users page
      </h1>
      {
        users.map((user: any) => (
          <div key={user.id}>
            <h2>
              <Link href={`/users/${user.id}`}>
                {user.name}
              </Link>
            </h2>
            <p>{user.email}</p>
          </div>
        ))
      }
    </div>
  )
}
