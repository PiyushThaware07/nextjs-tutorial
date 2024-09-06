import React from 'react'

export default function Signin() {
  return (
    <div>
        <h1>Signin</h1>
    </div>
  )
}


export function generateMetadata({params}){
  return {
    title : "Signin",
    description : "This is signin page"
  }
}