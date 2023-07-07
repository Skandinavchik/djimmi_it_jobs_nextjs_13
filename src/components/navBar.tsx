import Link from "next/link";
import SignButton from "./auth/signButton";
import { cookies } from 'next/headers';


const NavBar = () => {

    const accessCookie = cookies().get('accessToken');
    

    return (
        <header className='bg-mainGreen h-20 w-full flex justify-center items-center'>
            <div className=' container'>
                <nav className='flex justify-between items-center'>
                    <Link href={'/'} className='text-light text-2xl font-bold hover:drop-shadow-md transition-all duration-300'>
                        djimmi
                    </Link>

                    <SignButton accessCookie={accessCookie} />
                </nav>
            </div>
        </header>
    );
};

export default NavBar;