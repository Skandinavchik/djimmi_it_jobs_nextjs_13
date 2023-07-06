'use client';
import Link from "next/link";
import ky from "ky";
import { useCallback, useEffect, useState } from "react";


interface IProps {
    hasCookie: boolean;
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
        title: 'Settings',
        path: '/settings',
    },
    {
        title: 'Sign Out',
        path: '/api/signout',
    },
];

const signOut = async (path: string) => {
    return await ky.post(`http://localhost:3000${path}`).json()
        .then(() => window.location.replace('/'))
        .catch(() => console.log());
};


const SignButton = ({ hasCookie }: IProps) => {

    const [isActive, setIsActive] = useState(false);

    const handleUserMenu = useCallback((e: MouseEvent): void => {
        const target = e.target as HTMLElement;

        !isActive && target.id === 'btn' ? setIsActive(true) : setIsActive(false);

    }, [isActive]);

    useEffect(() => {
        document.body.addEventListener('click', handleUserMenu);

        return () => {
            document.body.removeEventListener('click', handleUserMenu);
        };

    }, [handleUserMenu]);

    const renderMenuItems = (arr: IMenuItem[]) => {
        return arr.map(item => {
            if (item.title === 'Sign Out') {
                return (
                    <li key={item.title} className='text-base font-light px-5 py-2 hover:bg-gray-100'>
                        <button onClick={() => signOut(item.path)}>
                            {item.title}
                        </button>
                    </li>
                );
            }
            return (
                <li key={item.title} className='text-base font-light px-5 py-2 hover:bg-gray-100'>
                    <Link href={item.path}>
                        {item.title}
                    </Link>
                </li>
            );
        });
    };

    const menuItemsList = renderMenuItems(menuItems);

    if (hasCookie) {
        return (
            <div className='relative'>
                <button id="btn" className='text-light font-light block'>
                    User Name
                </button>
                <ul className={`${isActive ? 'block' : 'hidden'} w-48 mt-2 bg-light absolute right-0 rounded-md py-2 border border-mainGrey`}>
                    {menuItemsList}
                </ul>
            </div>
        );
    }

    return (
        <Link href={'/signin'} className='text-light text-base font-light border rounded-full px-5 py-2 hover:shadow-md transition-all duration-300'>
            Sign In
        </Link>
    );
};

export default SignButton;