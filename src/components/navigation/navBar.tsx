import Link from "next/link";
import UserAccountButton from '@/components/auth/userAccountButton';
import ThemeToggle from '@/components/theme/ThemeToggle';
import { cookies } from 'next/headers';
import { verifyAccessToken } from '@/libs/accessToken';
import { JWTPayload } from 'jose';
import { Button } from '@/components/ui/button';



const NavBar = async () => {

	const accessCookie = cookies().get('accessToken')?.value;

	let verifiedUserData: JWTPayload | undefined;

	if (accessCookie) {
		verifiedUserData = await verifyAccessToken(accessCookie);
	}


	return (
		<header className='h-20 w-full flex justify-center items-center shadow-md shadow-grey-dark dark:bg-main dark:shadow-none'>
			<div className=' container'>
				<nav className='flex justify-between items-center'>
					<Link href={'/'} className='text-xl text-main font-sans font-bold dark:text-main-light'>
						djimmi
					</Link>

					<div className='flex gap-10 justify-center items-center'>
						{accessCookie
							? <UserAccountButton data={verifiedUserData} />
							: <Button asChild className='font-sans font-normal'>
								<Link href={'/signin'}>Sign In</Link>
							</Button>
						}

						<ThemeToggle />
					</div>
				</nav>
			</div>
		</header>
	);
};

export default NavBar;