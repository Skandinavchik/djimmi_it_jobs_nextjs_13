import { prisma } from "@/utils/prismaClient";
import { NextResponse } from "next/server";


const GET = async () => {
    try {
        const users = await prisma.user.findMany();

        const usersWithoutPassword = users.map(item => {
            const { password, ...itemWithoutPassword } = item;
            return itemWithoutPassword;
        });

        const response = {
            status: 'success',
            results: users.length,
            users: usersWithoutPassword,
        };

        return NextResponse.json(response, { status: 200 });

    } catch (error) {
        console.log(error);
    }
};

const DELETE = async () => {
    try {
        await prisma.user.deleteMany();
        return NextResponse.json('Done', { status: 200 });

    } catch (error) {
        console.log(error);
    }
};

export { GET, DELETE };