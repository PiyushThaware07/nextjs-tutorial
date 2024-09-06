import { NextResponse } from 'next/server'

export function middleware(request) {
    return NextResponse.redirect(new URL("/auth/signin", request.url));
}

export const config = {
    matcher: [
        '/auth/posts',
        '/auth/forget',
    ],
};