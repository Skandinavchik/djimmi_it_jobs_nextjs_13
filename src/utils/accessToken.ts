import * as jose from 'jose';

const secret = new TextEncoder().encode(process.env.JWT_SECRET);
const alg = 'HS256';

const signToken = async (id: string) => {
    return await new jose.SignJWT({ id })
        .setProtectedHeader({ alg })
        .setIssuedAt()
        .setExpirationTime(process.env.JWT_EXPIRES_IN as string)
        .sign(secret);
};

const verifyAccessToken = async (token: string) => {
    return await jose.jwtVerify(token, secret);
};

export { signToken, verifyAccessToken };