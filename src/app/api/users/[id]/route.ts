import prisma from "@/utils/dataBase";
import { NextRequest, NextResponse } from "next/server";


interface Params {
    id: string;
};

const GET = async (req: NextRequest, { params }: { params: Params }) => {
    try {
        const user = await prisma.user.findUnique({
            where: {
                id: +params.id,
            },
        });

        const response = {
            status: 'success',
            user
        };

        return new NextResponse(JSON.stringify(response), { status: 200 });

    } catch (error) {
        console.log(error);
    }
};

const DELETE = async (req: NextRequest, { params }: { params: Params }) => {
    try {
        await prisma.user.delete({
            where: {
                id: +params.id,
            },
        });

        return new NextResponse(`User with ID: ${params.id} was deleted`, { status: 200 });

    } catch (error) {
        console.log(error);
    }
};

export { GET, DELETE };