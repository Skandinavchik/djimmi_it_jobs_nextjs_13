import { prisma } from "@/utils/prismaClient";
import { NextResponse } from "next/server";


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

const DELETE = async () => {
    try {
        await prisma.user.deleteMany();
        return new NextResponse('Done', { status: 200 });

    } catch (error) {
        console.log(error);
    }
};

export { GET, DELETE };