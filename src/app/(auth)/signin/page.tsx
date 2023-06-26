'use client';
import SignInForm from "@/components/auth/forms/signInForm";
import { signIn, signOut, useSession } from "next-auth/react";


const SignIn = () => {

    const session = useSession();

    console.log(session);

    return (
        <main>
            <section className='min-h-[calc(100vh-5rem-193px)] py-20 bg-light'>
                <div className='container'>
                    <div className='w-full flex justify-center items-start gap-10'>
                        <div className='w-[500px] px-5 py-8 border border-mainGrey rounded-xl bg-white'>
                            <h1 className='text-3xl font-medium mb-8'>Log In to Djimmi</h1>
                            <SignInForm />
                        </div>
                        <div className='w-[250px]'>
                            <button className='block bg-white w-full rounded-md border border-mainGrey text-lg text-left px-3 py-2 mb-4 hover:shadow-md transition-all duration-300' onClick={() => signIn('google')}><span className="icon-google mr-5 text-base" />Log In with Google</button>
                            <button className='block bg-white w-full rounded-md border border-mainGrey text-lg text-left px-3 py-2 mb-4 hover:shadow-md transition-all duration-300' onClick={() => signIn('github')}><span className="icon-github mr-5 text-base" />Log In with Github</button>
                            <button className='block bg-white w-full rounded-md border border-mainGrey text-lg text-left px-3 py-2 mb-4 hover:shadow-md transition-all duration-300' onClick={() => signOut()}>Log Out</button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default SignIn;