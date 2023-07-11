import * as jose from 'jose';
import { IUser } from '@/types/userTypes';

const secret = new TextEncoder().encode(process.env.JWT_SECRET);
const alg = 'HS256';

const signAccessToken = async (user: IUser) => {
    try {
        return await new jose.SignJWT({ user })
            .setProtectedHeader({ alg })
            .setExpirationTime(process.env.JWT_EXPIRES_IN as string)
            .sign(secret);
            
    } catch (error) {
        console.log(error);
        return null;
    }

};

const verifyAccessToken = async (token: string) => {
    try {
        const { payload } = await jose.jwtVerify(token, secret);
        return payload;

    } catch (error) {
        console.log(error);
        return null;
    }
};

const decodeAccessToken = (token: string) => {
    return jose.decodeJwt(token);
};

export { signAccessToken, verifyAccessToken, decodeAccessToken };