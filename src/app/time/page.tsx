
export const revalidate = 0
export const dynamic = 'force-dynamic'

export default async function TimePage() {
  const res = await fetch('http://localhost:3000/api/time')

  const { time } = await res.json()

  return (
    <div>
      <h1>Time</h1>
      <time>{ time }</time>
      <br />
      <time>{ new Date(time).toLocaleDateString('es-MX', {
        minute: 'numeric',
        hour: 'numeric',
        second: 'numeric',
      }) }</time>
    </div>
  )
}