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
	DropdownMenuShortcut,
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
					<Avatar className='w-10 h-10 font-medium'>
						<AvatarImage />
						<AvatarFallback>{data && data.iss ? data.iss.slice(0, 1) : null}</AvatarFallback>
					</Avatar>
					<span>{data?.iss}</span>
				</div>
			</DropdownMenuTrigger>

			<DropdownMenuContent
				align='end'
				className="w-56"
			>
				<DropdownMenuLabel>My Account</DropdownMenuLabel>

				<DropdownMenuSeparator />

				<DropdownMenuGroup>
					<DropdownMenuItem
						onClick={() => router.push('/profile')}
						className='cursor-pointer'
					>
						Profile
						<DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
					</DropdownMenuItem>
				</DropdownMenuGroup>

				<DropdownMenuSeparator />

				<DropdownMenuItem
					onClick={() => signOut()
						.then(() => window.location.replace('/'))
						.catch((e) => console.log(e))
					}
					className='cursor-pointer'
				>
					Sign Out
					<DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
				</DropdownMenuItem>

			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export default UserAccountButton;