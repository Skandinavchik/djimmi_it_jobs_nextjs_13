import * as jose from 'jose';



const secret = new TextEncoder().encode(process.env.JWT_SECRET);

export const verifyAccessToken = async (token: string) => {
	try {
		const { payload } = await jose.jwtVerify(token, secret)
		return payload;
	} catch (error) {
		return;
	}
};