'use client';
import ky from "ky";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";


interface IFormInputs {
	username: string;
	email: string;
	password: string;
};

const signUp = async (data: IFormInputs, url: string) => {
	return await ky.post(url, {
		json: data,
		credentials: 'include',
	}).json<{ accessToken: string }>();
};


const SignUpForm = () => {

	const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<IFormInputs>({
		defaultValues: {
			username: '',
			email: '',
			password: '',
		},
	});

	const onSubmit: SubmitHandler<IFormInputs> = async (formInput: IFormInputs) => {
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

	return (
		<form
			noValidate
			onSubmit={handleSubmit(onSubmit)}>
			<input {...register('username', { required: 'Username is required' })} type="text" placeholder="Username" className={`block w-full rounded-md border-0 py-3 ring-1 ring-inset ${errors.email ? 'ring-red-700 focus:ring-red-700' : 'ring-mainGrey focus:ring-mainGreen'} placeholder:text-gray-400 focus:ring-2 focus:ring-inset`} />
			<div className='h-7 pt-1 pb-2 pl-1 text-xs font-light text-red-700'>{errors.username?.message || ' '}</div>
			<input {...register('email', { required: 'Email is required' })} type="email" placeholder="Email" className={`block w-full rounded-md border-0 py-3 ring-1 ring-inset ${errors.email ? 'ring-red-700 focus:ring-red-700' : 'ring-mainGrey focus:ring-mainGreen'} placeholder:text-gray-400 focus:ring-2 focus:ring-inset`} />
			<div className='h-7 pt-1 pb-2 pl-1 text-xs font-light text-red-700'>{errors.email?.message || ' '}</div>
			<input {...register('password', { required: 'Password is required' })} type="password" placeholder="Password" className={`block w-full rounded-md border-0 py-3 ring-1 ring-inset ${errors.password ? 'ring-red-700 focus:ring-red-700' : 'ring-mainGrey focus:ring-mainGreen'} placeholder:text-gray-400 focus:ring-2 focus:ring-inset`} />
			<div className='h-7 pt-1 pb-2 pl-1 text-xs font-light text-red-700'>{errors.password?.message || ' '}</div>
			<button type="submit" disabled={isSubmitting ? true : false} className='disabled:opacity-75 w-full text-lg rounded-md mt-7 text-light font-semibold py-2.5 px-10 bg-mainGreen hover:shadow-md transition-all duration-300'>{isSubmitting ? 'Loading...' : 'Sign Up'}</button>
			<div className='flex justify-center mt-4'>
				<div className='font-light text-sm'>
					{`Already have an account? `}
					<Link href={'/signin'} className='text-mainGreen underline'>Sign In</Link>
				</div>
			</div>
		</form>
	);
};

export default SignUpForm;