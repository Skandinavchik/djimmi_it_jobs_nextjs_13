import { prisma } from "@/utils/prismaClient";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from 'bcrypt';
import { signAccessToken } from "@/utils/accessToken";


interface IRequestData {
    username: string;
    email: string;
    password: string;
};

const POST = async (req: NextRequest) => {
    try {
        const data: IRequestData = await req.json();

        const user = await prisma.user.create({
            data: {
                username: data.username,
                email: data.email,
                password: await bcrypt.hash(data.password, 12),
            },
        });

        const { password, ...userWithoutPassword } = user;

        const token = await signAccessToken(user);

        if (token) {
            const response = NextResponse.json({
                status: 'success',
                user: userWithoutPassword,
            }, { status: 201 });

            response.cookies.set({
                name: 'accessToken',
                value: token,
                httpOnly: true,
                maxAge: 14 * 24 * 60 * 60,
            });

            return response;
        }

        return NextResponse.json({ error: 'Error' }, { status: 401 });

    } catch (error) {
        console.log(error);
    }
};

export { POST };