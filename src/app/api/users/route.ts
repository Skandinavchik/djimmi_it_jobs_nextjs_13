import prisma from "@/utils/dataBase";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from 'bcrypt';


const GET = async () => {
    try {
        const users = await prisma.user.findMany();
        const response = {
            status: 'success',
            results: users.length,
            users,
        };

        return new NextResponse(JSON.stringify(response), { status: 200 });

    } catch (error) {
        console.log(error);
    }
};


interface IUser {
    username: string;
    email: string;
    password: string;
};

const POST = async (req: NextRequest) => {
    try {
        const data: IUser = await req.json();
        const { username, email, password } = data;

        const hashedPassword = await bcrypt.hash(password, 12);

        const user = await prisma.user.create({
            data: {
                username,
                email,
                password: hashedPassword,
            },
        });

        const response = {
            status: 'success',
            user
        };

        return new NextResponse(JSON.stringify(response), { status: 201 });

    } catch (error) {
        console.log(error);
    }
};

const DELETE = async () => {
    try {
        await prisma.user.deleteMany();
        return new NextResponse('Done', { status: 200 });

    } catch (error) {
        console.log(error);
    }
};

export { GET, POST, DELETE };