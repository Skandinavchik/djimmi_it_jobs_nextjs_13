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

        const response = {
            status: 'success',
            user
        };
        const notFoundResponse = {
            status: 'failed',
            message: `User with ID: ${id} not found`,
        };

        if (!user) return new NextResponse(JSON.stringify(notFoundResponse), { status: 404 });

        return new NextResponse(JSON.stringify(response), { status: 200 });

    } catch (error) {
        return new NextResponse(JSON.stringify(error), { status: 500 });
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