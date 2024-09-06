import React from 'react'

export default function Signup() {
    return (
        <div>
            <h1>Signup</h1>
        </div>
    )
}


export function generateMetadata({params}){
    return {
      title : "Signup",
      description : "This is signup page"
    }
  }