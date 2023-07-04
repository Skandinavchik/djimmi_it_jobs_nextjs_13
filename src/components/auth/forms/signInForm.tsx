'use client';
import ky from "ky";
import { useForm, SubmitHandler } from "react-hook-form";
import { useEffect } from "react";


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

    const { register, handleSubmit, reset, formState: { errors, isSubmitSuccessful } } = useForm<IFormInputs>({
        defaultValues: {
            email: '',
            password: '',
        },
    });

    const onSubmit: SubmitHandler<IFormInputs> = async (data: IFormInputs) => {
        await signIn(data, 'http://localhost:3000/api/signin');
        reset();
    };

    useEffect(() => {
        if (isSubmitSuccessful) {
            window.location.replace('/');
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
            <button type="submit" className='w-full text-lg rounded-md mt-8 text-light font-semibold py-2.5 px-10 bg-mainGreen hover:shadow-md transition-all duration-300'>Log In</button>
        </form>
    );
};

export default SignInForm;