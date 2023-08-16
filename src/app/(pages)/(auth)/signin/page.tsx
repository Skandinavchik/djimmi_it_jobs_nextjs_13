import UserSignInForm from '@/components/forms/user/UserSignInForm';


const SignIn = () => {

	return (
		<main>
			<section className='min-h-[calc(100vh-5rem-193px)] py-20'>
				<div className='container'>
					<div className='w-full flex justify-center'>
						<div className='w-[500px] px-5 py-8 border border-darkGrey rounded-xl bg-white'>
							<h1 className='text-xl font-normal mb-8'>Sign In to Djimmi</h1>
							<UserSignInForm />
						</div>
					</div>
				</div>
			</section>
		</main>
	);
};

export default SignIn;