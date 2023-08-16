import UserSignUpForm from '@/components/forms/user/UserSignUpForm';


const SignUp = () => {

	return (
		<main>
			<section className='min-h-[calc(100vh-5rem-193px)] py-20'>
				<div className='container'>
					<div className='w-full flex justify-center items-center'>
						<div className='w-[500px] px-5 py-8 border border-mainGrey rounded-xl bg-white'>
							<h1 className='text-xl font-normal mb-8'>Sign In to Djimmi</h1>
							<UserSignUpForm />
						</div>
					</div>
				</div>
			</section>
		</main>
	);
};

export default SignUp;