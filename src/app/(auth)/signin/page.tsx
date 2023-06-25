'use client';
import SignInForm from "@/components/auth/forms/signInForm";
import { signIn, signOut, useSession } from "next-auth/react";


const SignIn = () => {

    const session = useSession();

    // console.log(session);

    return (
        <main>
            <section className='min-h-[calc(100vh-5rem-193px)] pt-20 bg-light'>
                <div className='container'>
                    <div className='w-full flex justify-center items-start gap-10'>
                        <div className='w-[500px] px-5 py-8 shadow-lg rounded-xl bg-white'>
                            <h1 className='text-3xl font-medium mb-8'>Log In to Djimmi</h1>
                            <SignInForm />
                        </div>
                        <div className='w-[400px] border h-40'>
                            <button className='border' onClick={() => signIn('google')}>Sign In with Google</button>
                            <button className='border' onClick={() => signOut()}>Logout</button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default SignIn;