import { NextResponse, NextRequest } from 'next/server'
import { verifyAccessToken } from './utils/accessToken';


export const config = {
    matcher: ['/jobs'],
};

export const middleware = async (req: NextRequest) => {
    const token = req.cookies.get('accessToken')?.value;

    if (token) {
        const decoded = await verifyAccessToken(token);
        if (decoded) {
            const user: IUser = decoded.user as IUser;
            return user ? NextResponse.next() : NextResponse.redirect(new URL('/signin', req.url));
        }
    }

    return NextResponse.redirect(new URL('/signin', req.url));
};