import Link from "next/link";



const SignInButton = () => {

    

    return (
        <Link href={'/signin'} className='text-light text-base font-light border rounded-full px-5 py-2 hover:shadow-md transition-all duration-300'>
            Sign In
        </Link>
    );
};

export default SignInButton;