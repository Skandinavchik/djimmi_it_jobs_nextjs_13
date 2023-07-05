import SignInForm from "@/components/auth/forms/signInForm";


const SignIn = () => {

    return (
        <main>
            <section className='min-h-[calc(100vh-5rem-193px)] py-20 bg-light'>
                <div className='container'>
                    <div className='w-full flex justify-center items-center'>
                        <div className='w-[500px] px-5 py-8 border border-mainGrey rounded-xl bg-white'>
                            <h1 className='text-2xl font-normal mb-8'>Sign In to Djimmi</h1>
                            <SignInForm />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default SignIn;