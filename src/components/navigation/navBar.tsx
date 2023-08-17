import Link from "next/link";
import UserAccountButton from '@/components/auth/userAccountButton';
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
		<header className='bg-mainGreen h-20 w-full flex justify-center items-center'>
			<div className=' container'>
				<nav className='flex justify-between items-center'>
					<Link href={'/'} className='text-light text-xl font-bold'>
						djimmi
					</Link>

					{accessCookie
						? <UserAccountButton data={verifiedUserData} />
						: <Button asChild>
							<Link href={'/signin'}>Sign In</Link>
						</Button>
					}

				</nav>
			</div>
		</header>
	);
};

export default NavBar;