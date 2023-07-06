'use client';
import ky from "ky";
import { useForm, SubmitHandler } from "react-hook-form";
import { useEffect } from "react";
import Link from "next/link";


interface IFormInputs {
    email: string;
    password: string;
};

const signIn = async (data: IFormInputs, url: string) => {
    return await ky.post(url, {
        json: data,
    }).json();
};


const SignInForm = () => {

    const { register, handleSubmit, reset, formState: { errors, isSubmitSuccessful, isSubmitting } } = useForm<IFormInputs>({
        defaultValues: {
            email: '',
            password: '',
        },
    });

    const onSubmit: SubmitHandler<IFormInputs> = async (data: IFormInputs) => {
        try {
            await signIn(data, 'http://localhost:3000/api/signin');
            reset();
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (isSubmitSuccessful) {
            window.location.replace('/jobs');
        }
    }, [isSubmitSuccessful]);

    return (
        <form
            noValidate
            onSubmit={handleSubmit(onSubmit)}>
            <input {...register('email', { required: 'Email is required' })} type="email" placeholder="Email" className={`block w-full rounded-md border-0 py-3 ring-1 ring-inset ${errors.email ? 'ring-red-700 focus:ring-red-700' : 'ring-mainGrey focus:ring-mainGreen'} placeholder:text-gray-400 focus:ring-2 focus:ring-inset`} />
            <div className='h-7 pt-1 pb-2 pl-1 text-xs font-light text-red-700'>{errors.email?.message || ' '}</div>
            <input {...register('password', { required: 'Password is required' })} type="password" placeholder="Password" className={`block w-full rounded-md border-0 py-3 ring-1 ring-inset ${errors.password ? 'ring-red-700 focus:ring-red-700' : 'ring-mainGrey focus:ring-mainGreen'} placeholder:text-gray-400 focus:ring-2 focus:ring-inset`} />
            <div className='h-7 pt-1 pb-2 pl-1 text-xs font-light text-red-700'>{errors.password?.message || ' '}</div>
            <button type="submit" disabled={isSubmitting ? true : false} className={'disabled:opacity-75 w-full text-lg rounded-md mt-7 text-light font-semibold py-2.5 px-10 bg-mainGreen hover:shadow-md transition-all duration-300'}>{isSubmitting ? 'Loading...' : 'Sign In'}</button>
            <div className='flex justify-center mt-4'>
                <div className='font-light text-sm'>
                    {`Don't have an account? `}
                    <Link href={'/signup'} className='text-mainGreen underline'>Sign Up</Link>
                </div>
                <div className='mx-3 text-sm font-light text-mainGreen'>|</div>
                <Link href={'/'} className="text-mainGreen underline text-sm font-light">Forgot Password?</Link>
            </div>
        </form>
    );
};

export default SignInForm;