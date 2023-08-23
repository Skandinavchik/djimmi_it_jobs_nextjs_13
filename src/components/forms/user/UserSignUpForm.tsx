'use client';
import ky from "ky";
import Link from "next/link";
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ReloadIcon } from "@radix-ui/react-icons";
import { useEffect } from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { EnvelopeIcon, LockClosedIcon, UserIcon } from '@heroicons/react/24/outline';



interface IFormInputs {
	username: string;
	email: string;
	password: string;
};

const validationSchema = yup.object({
	username: yup.string()
		.required('Username is required')
		.min(2, 'Username must be at least 2 characters long'),
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

	const { register, handleSubmit, reset, setFocus, formState: { errors, dirtyFields, isSubmitting } } = useForm<IFormInputs>({
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
			<div>
				<div className='relative'>
					<UserIcon className={`absolute left-2 top-1/2 -translate-y-1/2 w-4 ${dirtyFields.username ? 'text-main dark:text-main-light' : 'text-slate-500'}`} />
					<Input
						{...register('username', { required: 'Username is required' })}
						type="text"
						placeholder="Username"
						className='font-sans pl-8'
					/>
				</div>
				<div className='mb-1 h-7 pt-1 pb-2 pl-1 text-[0.72rem] font-sans font-light text-red-700 dark:text-red-400'>
					{errors.username?.message || ' '}
				</div>
			</div>

			<div>
				<div className='relative'>
					<EnvelopeIcon className={`absolute left-2 top-1/2 -translate-y-1/2 w-4 ${dirtyFields.email ? 'text-main dark:text-main-light' : 'text-slate-500'}`} />
					<Input
						{...register('email', { required: 'Email is required' })}
						type="email"
						placeholder="Email"
						className='font-sans pl-8'
					/>
				</div>
				<div className='mb-1 h-7 pt-1 pb-2 pl-1 text-[0.72rem] font-sans font-light text-red-700 dark:text-red-400'>
					{errors.email?.message || ' '}
				</div>
			</div>

			<div>
				<div className='relative'>
					<LockClosedIcon className={`absolute left-2 top-1/2 -translate-y-1/2 w-4 ${dirtyFields.password ? 'text-main dark:text-main-light' : 'text-slate-500'}`} />
					<Input
						{...register('password', { required: 'Password is required' })}
						type="password"
						placeholder="Password"
						className='font-sans pl-8'
					/>
				</div>
				<div className='h-7 pt-1 pb-2 pl-1 text-[0.72rem] font-sans font-light text-red-700 dark:text-red-400'>
					{errors.password?.message || ' '}
				</div>
			</div>

			<Button
				type='submit'
				size={'lg'}
				disabled={isSubmitting ? true : false}
				className='text-lg font-sans font-normal mt-7 w-full'
			>
				{isSubmitting ? <ReloadIcon className="mr-2 h-4 w-4 animate-spin" /> : null}
				{isSubmitting ? 'Loading...' : 'Sign Up'}
			</Button>

			<div className='flex justify-center mt-4'>
				<div className='text-main font-sans font-light text-sm dark:text-main-light'>
					{`Already have an account? `}
					<Button
						asChild
						variant={'link'}
						className='px-1 font-normal'
					>
						<Link href={'/signin'}>Sign In</Link>
					</Button>
				</div>
			</div>
		</form>
	);
};

export default UserSignUpForm;