import React from 'react'

export default function Forget() {
  return (
    <div>
      <h1>Forget</h1>
      <h2>{process.env.SERVER_URL}</h2>
      <h3>{process.env.SERVER_PASSWORD}</h3>
    </div>
  )
}
