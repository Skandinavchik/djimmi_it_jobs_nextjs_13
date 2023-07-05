import Link from "next/link";
import SignButton from "./auth/signButton";
import { cookies } from 'next/headers';


const NavBar = () => {

    const hasCookie = cookies().has('accessToken');
    

    return (
        <header className='bg-mainGreen h-20 w-full flex justify-center items-center'>
            <div className=' container'>
                <nav className='flex justify-between items-center'>
                    <Link href={'/'} className='text-light text-2xl font-bold hover:drop-shadow-md transition-all duration-300'>
                        djimmi
                    </Link>

                    <SignButton hasCookie={hasCookie} />
                </nav>
            </div>
        </header>
    );
};

export default NavBar;