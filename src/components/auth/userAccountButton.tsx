'use client';
import ky from 'ky';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useRouter } from 'next/navigation';
import { JWTPayload } from 'jose';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";



interface IProps {
	data: JWTPayload | undefined;
};


const UserAccountButton = ({ data }: IProps) => {

	const router = useRouter();

	const signOut = async () => {
		return await ky.post('http://localhost:8000/api/auth/signout', {
			json: {},
			credentials: 'include',
		}).json();
	};


	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<div className='flex justify-center items-center gap-2 cursor-pointer'>
					<Avatar className='w-10 h-10 text-main font-sans font-normal dark:text-main-light'>
						<AvatarImage />
						<AvatarFallback>{data && data.iss ? data.iss.slice(0, 1) : null}</AvatarFallback>
					</Avatar>
					<span className='text-main text-[1rem] font-sans dark:text-main-light'>{data?.iss}</span>
				</div>
			</DropdownMenuTrigger>

			<DropdownMenuContent
				align='start'
				className="w-56"
			>
				<DropdownMenuLabel className='text-main font-sans dark:text-main-light'>My Account</DropdownMenuLabel>

				<DropdownMenuSeparator />

				<DropdownMenuGroup>
					<DropdownMenuItem
						onClick={() => router.push('/profile')}
						className='text-main font-sans font-light cursor-pointer dark:text-main-light'
					>
						Profile
					</DropdownMenuItem>
				</DropdownMenuGroup>

				<DropdownMenuSeparator />

				<DropdownMenuItem
					onClick={() => signOut()
						.then(() => window.location.replace('/'))
						.catch((e) => console.log(e))
					}
					className='text-main font-sans font-light cursor-pointer dark:text-main-light'
				>
					Sign Out
				</DropdownMenuItem>

			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export default UserAccountButton;