import { NextRequest, NextResponse } from "next/server";


const POST = async (req: NextRequest) => {
    try {
        if (req.cookies.get('accessToken')?.value !== 'deleted') {
            const response = NextResponse.json({
                status: 'success',
            }, { status: 200 });

            response.cookies.set({
                name: 'accessToken',
                value: 'deleted',
                httpOnly: true,
                maxAge: 0.01,
            });

            return response;
        }
        
        return NextResponse.json('Not Signed In', {status: 200});

    } catch (error) {

    }
};

export { POST };