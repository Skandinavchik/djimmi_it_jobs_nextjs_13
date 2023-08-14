'use client';
import ky from "ky";
import Link from "next/link";
import { useEffect } from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';



interface IFormInputs {
	username: string;
	email: string;
	password: string;
};

const validationSchema = yup.object({
	username: yup.string()
		.required('Username is required')
		.min(2, 'Name must be at least 2 characters long'),
	email: yup.string()
		.required('Email is required')
		.matches(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'Email must be valid'),
	password: yup.string()
		.required('Password is required')
		.min(8, 'Password must be at least 8 characters long')
		.matches(/[a-z]/, 'Password must contain at least one lowercase letter')
		.matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
		.matches(/[0-9]/, 'Password must contain at least one digit'),
}).required();



const UserSignUpForm = () => {

	const { register, handleSubmit, reset, setFocus, formState: { errors, isSubmitting } } = useForm<IFormInputs>({
		defaultValues: {
			username: '',
			email: '',
			password: '',
		},
		mode: 'onChange',
		resolver: yupResolver(validationSchema),
	});

	const signUp = async (data: IFormInputs, url: string): Promise<{ accessToken: string }> => {
		return await ky.post(url, {
			json: data,
			credentials: 'include',
		}).json<{ accessToken: string }>();
	};

	const onSubmit = async (formInput: IFormInputs): Promise<void> => {
		await signUp(formInput, 'http://localhost:8000/api/auth/signup')
			.then(res => {
				if (res.accessToken) {
					reset();
					window.location.replace('/profile');
				}
			})
			.catch((e) => {
				console.log(e);
				reset();
			});
	};

	useEffect(() => {
		setFocus('username');
	}, [setFocus]);

	return (
		<form
			noValidate
			onSubmit={handleSubmit(onSubmit)}>
			<input
				{...register('username')}
				type="text"
				placeholder="Username"
				className={`block w-full rounded-md border-0 py-3 ring-1 ring-inset ${errors.username ? 'ring-red-700 focus:ring-red-700' : 'ring-mainGrey focus:ring-mainGreen'} placeholder:text-gray-400 focus:ring-2 focus:ring-inset`}
			/>
			<div className='h-7 pt-1 pb-2 pl-1 text-xs font-light text-red-700'>
				{errors.username?.message || ' '}
			</div>

			<input
				{...register('email')}
				type="email"
				placeholder="Email"
				className={`block w-full rounded-md border-0 py-3 ring-1 ring-inset ${errors.email ? 'ring-red-700 focus:ring-red-700' : 'ring-mainGrey focus:ring-mainGreen'} placeholder:text-gray-400 focus:ring-2 focus:ring-inset`}
			/>
			<div className='h-7 pt-1 pb-2 pl-1 text-xs font-light text-red-700'>
				{errors.email?.message || ' '}
			</div>

			<input
				{...register('password')}
				type="password"
				placeholder="Password"
				className={`block w-full rounded-md border-0 py-3 ring-1 ring-inset ${errors.password ? 'ring-red-700 focus:ring-red-700' : 'ring-mainGrey focus:ring-mainGreen'} placeholder:text-gray-400 focus:ring-2 focus:ring-inset`}
			/>
			<div className='h-7 pt-1 pb-2 pl-1 text-xs font-light text-red-700'>
				{errors.password?.message || ' '}
			</div>

			<button
				type="submit"
				disabled={isSubmitting ? true : false}
				className='disabled:opacity-75 w-full text-lg rounded-md mt-7 text-light font-semibold py-2.5 px-10 bg-mainGreen hover:shadow-md transition-all duration-300'>
				{isSubmitting ? 'Loading...' : 'Sign Up'}
			</button>

			<div className='flex justify-center mt-4'>
				<div className='font-light text-sm'>
					{`Already have an account? `}
					<Link href={'/signin'} className='text-mainGreen underline'>Sign In</Link>
				</div>
			</div>
		</form>
	);
};

export default UserSignUpForm;