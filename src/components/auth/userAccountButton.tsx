'use client';
import Link from "next/link";
import ky from "ky";
import { useCallback, useEffect, useState } from "react";
import { JWTPayload } from 'jose';



interface IProps {
	data: Promise<JWTPayload | undefined>;
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


const UserAccountButton = ({ data }: IProps) => {

	const [isActive, setIsActive] = useState<boolean>(false);
	const [userData, setUserData] = useState<JWTPayload | undefined>();

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

	const renderMenuItems = (menuItems: IMenuItem[]) => {
		return menuItems.map(menuItem => {
			if (menuItem.title === 'Sign Out') {
				return (
					<li key={menuItem.title} className='font-light px-5 py-2 hover:bg-gray-100'>
						<button onClick={() => signOut(menuItem.path)
							.then(() => window.location.replace('/'))
							.catch(() => console.log())}>
							{menuItem.title}
						</button>
					</li>
				);
			}
			return (
				<li key={menuItem.title} className='font-light px-5 py-2 hover:bg-gray-100'>
					<Link href={menuItem.path}>
						{menuItem.title}
					</Link>
				</li>
			);
		});
	};

	const menuItemsList = renderMenuItems(menuItems);

	useEffect(() => {
		data.then(data => {
			if (data) {
				setUserData(data);
			}
		});
	}, [data]);

	return (
		<div className='relative'>
			<button id="btn" className='text-light text-lg block'>
				{userData?.iss}
			</button>
			<ul className={`${isActive ? 'block' : 'hidden'} w-48 bg-light absolute right-0 rounded-md py-2 border border-mainGrey`}>
				{menuItemsList}
			</ul>
		</div>
	);
};

export default UserAccountButton;