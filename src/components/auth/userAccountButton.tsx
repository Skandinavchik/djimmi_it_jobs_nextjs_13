'use client';
import ky from "ky";
import { useCallback, useEffect, useState } from "react";
import { JWTPayload } from 'jose';
import { useRouter } from 'next/navigation';



interface IProps {
	data: JWTPayload | undefined;
};

interface IMenuItem {
	title: string;
	path: string;
};

const menuItems: IMenuItem[] = [
	{
		title: 'My Profile',
		path: '/profile',
	},
	{
		title: 'Sign Out',
		path: '/api/auth/signout',
	},
];




const UserAccountButton = ({ data }: IProps) => {

	const [isActive, setIsActive] = useState<boolean>(false);
	const router = useRouter();

	const toggleUserMenu = useCallback((e: MouseEvent): void => {
		const target = e.target as HTMLElement;

		!isActive && target.id === 'btn' ? setIsActive(true) : setIsActive(false);

	}, [isActive]);

	useEffect(() => {
		document.body.addEventListener('click', toggleUserMenu);

		return () => {
			document.body.removeEventListener('click', toggleUserMenu);
		};

	}, [toggleUserMenu]);

	const signOut = async (path: string) => {
		try {
			return await ky.post(`http://localhost:8000${path}`, {
				json: {},
				credentials: 'include',
			}).json();
		} catch (error) {
			console.log();
		}
	};

	const renderMenuItems = (menuItems: IMenuItem[]) => {
		return menuItems.map(({ title, path }) => {
			if (title === 'Sign Out') {
				return (
					<li
						key={title}
						onClick={() => signOut(path)
							.then(() => window.location.replace('/'))
							.catch(() => console.log())}
						className='font-light px-5 py-2 hover:bg-gray-100 cursor-pointer'
					>
						{title}
					</li>
				);
			}
			return (
				<li
					key={title}
					onClick={() => router.push(path)}
					className='font-light px-5 py-2 hover:bg-gray-100 cursor-pointer'
				>
					{title}
				</li>
			);
		});
	};

	const menuItemsList = renderMenuItems(menuItems);

	return (
		<div className='relative'>
			<button id="btn" className='text-light text-lg block px-2'>
				{data?.iss}
			</button>
			<ul className={`${isActive ? 'block' : 'hidden'} w-48 bg-light absolute right-0 rounded-md py-2 border border-mainGrey`}>
				{menuItemsList}
			</ul>
		</div>
	);
};

export default UserAccountButton;