"use client"
import { useParams } from 'next/navigation'
import React from 'react'

export default function Post() {
    const params = useParams();
    console.log(params);
    return (
        <div>
            <h1 className="text-2xl font-medium">Post</h1>
        </div>
    )
}
