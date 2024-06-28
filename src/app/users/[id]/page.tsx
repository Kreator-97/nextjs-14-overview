import { getUser } from "@/users/services"


export default async function UserPage(
  { params }: { params: { id: string } }
) {
  const user = await getUser(params.id)
  console.log(user)
  return (
    <main>
      <h1 className="">User</h1>

      <p>
        {user.name}
      </p>
    </main>
  )
}