import { prisma } from "@/utils/prismaClient";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from 'bcrypt';
import { signToken } from "@/utils/accessToken";


interface IRequestBody {
    email: string;
    password: string;
};

const POST = async (req: NextRequest) => {
    try {
        const body: IRequestBody = await req.json();

        const user = await prisma.user.findUnique({
            where: {
                email: body.email,
            },
        });

        if (user && (await bcrypt.compare(body.password, user.password))) {
            const { password, ...userWithoutPassword } = user;

            const token = await signToken(user.id);

            const response = NextResponse.json({
                status: 'success',
                user: userWithoutPassword,
            }, { status: 200 });

            response.cookies.set({
                name: 'accessToken',
                value: token,
                httpOnly: true,
                maxAge: 14 * 24 * 60 * 60,
            });

            return response;

        } else {
            return NextResponse.json(null, { status: 401 });
        }
    } catch (error) {
        console.log(error);
    }
};

export { POST };