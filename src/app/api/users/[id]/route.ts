import { prisma } from "@/utils/prismaClient";
import { NextRequest, NextResponse } from "next/server";


interface Params {
    id: string;
};

const GET = async (req: NextRequest, { params }: { params: Params }) => {
    try {
        const { id } = params;
        const user = await prisma.user.findUnique({
            where: {
                id,
            },
        });

        if (!user) {
            const notFoundResponse = {
                status: 'failed',
                message: `User with ID: ${id} not found`,
            };

            return NextResponse.json(notFoundResponse, { status: 404 });
        }

        const { password, ...userWithoutPassword } = user;

        const response = {
            status: 'success',
            user: userWithoutPassword,
        };

        return NextResponse.json(response, { status: 200 });

    } catch (error) {
        return NextResponse.json(error, { status: 500 });
    }
};

const DELETE = async (req: NextRequest, { params }: { params: Params }) => {
    try {
        const { id } = params;
        await prisma.user.delete({
            where: {
                id,
            },
        });

        return new NextResponse(`User with ID: ${id} was deleted`, { status: 200 });

    } catch (error) {
        console.log(error);
    }
};

export { GET, DELETE };