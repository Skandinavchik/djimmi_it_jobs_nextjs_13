import Link from "next/link";


const NavBar = () => {



    return (
        <header className='bg-mainGreen h-20 w-full flex justify-center items-center'>
            <div className=' container'>
                <nav className='flex justify-between items-center'>
                    <Link href={'/'} className='text-light text-2xl font-bold hover:drop-shadow-md transition-all duration-300'>
                        djimmi
                    </Link>

                    <Link href={'/signin'} className='text-light text-base font-light border rounded-full px-5 py-2 hover:shadow-md transition-all duration-300'>
                        Sign In
                    </Link>
                </nav>
            </div>
        </header>

    );
};

export default NavBar;