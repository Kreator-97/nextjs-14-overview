'use client'

export const ClockTime = () => {
  const date = new Date().toLocaleDateString('es-MX')
  return (
    <div>
      <h2 className="heading">
        Clock Time
      </h2>
      <time>{ date } </time>
    </div>
  )
}
