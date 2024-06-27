import { User } from "../interfaces"

export const getUser = async (id: string) => {
  const url = `https://jsonplaceholder.typicode.com/users/${id}`
  const response = await fetch(url)
  const data: User = await response.json()
  return data
}
