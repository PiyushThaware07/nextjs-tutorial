import React from 'react'
import Link from 'next/link'

export default function page() {
    return (
        <div>
            <h1 className="text-2xl font-semibold text-white">Posts</h1>
            <ul>
                <li className="p-5">
                    <Link href="/auth/posts/01" className="text-xs font-semibold text-white">Post --{">"} 01</Link>
                </li>
                <li className="p-5">
                    <Link href="/auth/posts/02" className="text-xs font-semibold text-white">Post --{">"} 02</Link>
                </li>
                <li className="p-5">
                    <Link href="/auth/posts/03" className="text-xs font-semibold text-white">Post --{">"} 03</Link>
                </li>
                <li className="p-5">
                    <Link href="/auth/posts/04" className="text-xs font-semibold text-white">Post --{">"} 04</Link>
                </li>
            </ul>
        </div>
    )
}
