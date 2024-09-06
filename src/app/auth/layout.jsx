'use client'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

export default function layout({ children }) {
    const pathname = usePathname();
    const router = useRouter();

    return (
        <div className="app_layout p-10 grid grid-cols-3 gap-10">
            <section className="col-span-1">
                <ul className="flex flex-nowrap flex-col gap-3">
                    <li>
                        <Link href="/auth/signup" className={`text-xs font-medium 
                            ${pathname === "/auth/signup" ? "text-cyan-500" : "text-white"} `}>
                            Signup
                        </Link>
                    </li>
                    <li>
                        <Link href="/auth/signin" className={`text-xs font-medium 
                            ${pathname === "/auth/signin" ? "text-cyan-500" : "text-white"} `}>
                            Signin
                        </Link>
                    </li>
                    {
                        pathname === "/auth/forget" && 
                        <li>
                        <button type="button"
                            onClick={() => router.push("/auth/forget")}
                            className={`text-xs font-medium 
                            ${pathname === "/auth/forget" ? "text-cyan-500" : "text-white"} `}>
                            Forget
                        </button>
                    </li>
                    }
                    <li>
                        <Link href="/auth/posts" className={`text-xs font-medium 
                            ${pathname === "/auth/posts" ? "text-cyan-500" : "text-white"} `}>
                            Posts
                        </Link>
                    </li>
                </ul>
            </section>
            <section className="cols-span-2">
                {children}
            </section>
        </div>
    )
}
