'use client';
import ky from "ky";
import { useForm, SubmitHandler } from "react-hook-form";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { ReloadIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";



interface IFormInputs {
	email: string;
	password: string;
};

const signIn = async (data: IFormInputs, url: string) => {
	return await ky.post(url, {
		json: data,
		credentials: 'include',
	}).json<{ accessToken: string }>();
};


const UserSignInForm = () => {

	const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<IFormInputs>({
		defaultValues: {
			email: '',
			password: '',
		},
	});

	const onSubmit: SubmitHandler<IFormInputs> = async (formInput: IFormInputs) => {
		await signIn(formInput, 'http://localhost:8000/api/auth/signin')
			.then(res => {
				if (res.accessToken) {
					reset();
					window.location.replace('/jobs');
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
			<Input
				{...register('email', { required: 'Email is required' })}
				type="email"
				placeholder="Email"
				className='font-sans'
			/>
			<div className='mb-1 h-7 pt-1 pb-2 pl-1 text-[0.72rem] font-sans font-light text-red-700 dark:text-red-400'>{errors.email?.message || ' '}</div>

			<Input
				{...register('password', { required: 'Password is required' })}
				type="password"
				placeholder="Password"
				className='font-sans'
			/>
			<div className='h-7 pt-1 pb-2 pl-1 text-[0.72rem] font-sans font-light text-red-700 dark:text-red-400'>{errors.password?.message || ' '}</div>

			<Button
				type='submit'
				size={'lg'}
				disabled={isSubmitting ? true : false}
				className='text-lg font-sans font-normal mt-7 w-full'
			>
				{isSubmitting ? <ReloadIcon className="mr-2 h-4 w-4 animate-spin" /> : null}
				{isSubmitting ? 'Loading...' : 'Sign In'}
			</Button>

			<div className='flex justify-between items-center mt-4'>
				<div className='text-main font-sans font-light text-sm dark:text-main-light'>
					{`Don't have an account? `}
					<Button
						asChild
						variant={'link'}
						className='px-1 font-normal'
					>
						<Link href={'/signup'}>Sign Up</Link>
					</Button>
				</div>

				<Button
					asChild
					variant={'link'}
					className='px-1 font-sans font-normal'
				>
					<Link href={'/'}>Forgot Password?</Link>
				</Button>
			</div>
		</form>
	);
};

export default UserSignInForm;