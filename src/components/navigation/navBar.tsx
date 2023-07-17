import Link from "next/link";
import SignInButton from "../auth/signInButton";
import UserAccountButton from "../auth/userAccountButton";
import { cookies } from 'next/headers';
import { verifyAccessToken } from '@/libs/accessToken';

const aaa = async (token: string | undefined) => {
    try {
        if (token) {
            return await verifyAccessToken(token);
        }
    } catch (error) {
        
    }
};

const NavBar = () => {

    const accessCookie = cookies().get('accessToken')?.value;
    
    return (
        <header className='bg-mainGreen h-20 w-full flex justify-center items-center'>
            <div className=' container'>
                <nav className='flex justify-between items-center'>
                    <Link href={'/'} className='text-light text-2xl font-bold hover:drop-shadow-md transition-all duration-300'>
                        djimmi
                    </Link>

                    {accessCookie ? <UserAccountButton data={aaa(accessCookie)} /> : <SignInButton />}

                </nav>
            </div>
        </header>
    );
};

export default NavBar;