import prisma from "@/utils/dataBase";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from 'bcrypt';


interface IRequestBody {
    email: string;
    password: string;
};

const POST = async (req: NextRequest) => {
    const body: IRequestBody = await req.json();

    const user = await prisma.user.findUnique({
        where: {
            email: body.email
        },
    });

    if (user && (await bcrypt.compare(body.password, user.password))) {
        const { password, ...userWithoutPassword } = user;
        return new NextResponse(JSON.stringify(userWithoutPassword));
    } else {
        return new NextResponse(JSON.stringify(null));
    }
};

export { POST };