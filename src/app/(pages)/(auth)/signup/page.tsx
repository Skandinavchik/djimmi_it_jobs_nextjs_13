import UserSignUpForm from '@/components/forms/user/UserSignUpForm';


const SignUp = () => {

	return (
		<main>
			<section className='min-h-[calc(100vh-5rem-197px)] pt-10 pb-20'>
				<div className='container'>
					<div className='w-full flex justify-center items-center'>
						<div className='w-[500px] px-5 py-8 border border-grey-dark rounded-xl bg-white dark:bg-main dark:border-slate-800'>
							<h1 className='text-xl text-main text-center font-sans font-normal mb-8 dark:text-main-light'>Sign In to Djimmi</h1>
							<UserSignUpForm />
						</div>
					</div>
				</div>
			</section>
		</main>
	);
};

export default SignUp;