import * as jose from 'jose';



const secret = new TextEncoder().encode(process.env.JWT_SECRET);

export const verifyAccessToken = async (token: string)  => {
    try {
        const data = await jose.jwtVerify(token, secret)
        return data;
    } catch (error) {
        return;
    }
};