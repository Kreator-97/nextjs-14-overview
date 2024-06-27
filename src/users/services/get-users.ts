
export const getUsers = async () => {
  const url = 'https://jsonplaceholder.typicode.com/users'
  const response = await fetch(url)
  const data = await response.json()
  return data
}
