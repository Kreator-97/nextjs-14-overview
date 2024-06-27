'use client'

import { useState } from "react"

export const ShowName = () => {
  const [name] = useState('Usuario')

  return (
    <h2>
      Hello {name}
    </h2>
  )
}
