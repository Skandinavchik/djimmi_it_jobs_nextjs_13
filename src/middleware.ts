import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { verifyAccessToken } from './utils/accessToken';
import ky from 'ky';


export const config = {
    matcher: ['/api/users'],
};

export const middleware = async (req: NextRequest) => {
    const token = req.cookies.get('accessToken')?.value;

    if (!token) {
        return NextResponse.redirect(new URL('/signin', req.url));
    }

    const decoded = await verifyAccessToken(token);

    const user = await ky(`http://localhost:3000/api/users/${decoded.payload.id}`).json();

    if (!user) {
        return NextResponse.redirect(new URL('/signin', req.url));
    }

    return NextResponse.next();
};