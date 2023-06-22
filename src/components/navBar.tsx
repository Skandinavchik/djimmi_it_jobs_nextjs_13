import Link from "next/link";


const NavBar = () => {



    return (
        <header className='bg-mainGreen h-20 w-full flex justify-center items-center'>
            <div className=' container flex justify-between items-center'>
                <Link href={'/'} className='text-light text-2xl font-bold'>
                    djimmi
                </Link>
                <button className='text-light text-base font-light border rounded-full px-5 py-2 hover:shadow-lg transition-all duration-300'>
                    Sign In
                </button>
            </div>
        </header>

    );
};

export default NavBar;