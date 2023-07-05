'use client';
import Link from "next/link";
import ky from "ky";
import { useState } from "react";


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

    const renderMenuItems = (arr: IMenuItem[]) => {
        return arr.map(item => {
            if (item.title === 'Sign Out') {
                return (
                    <li key={item.title}>
                        <button onClick={() => signOut(item.path)}>
                            {item.title}
                        </button>
                    </li>
                );
            }
            return (
                <li key={item.title}>
                    <Link href={item.path} >
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
                <button
                    className='text-light font-light block'
                    onClick={() => setIsActive(isActive => !isActive)}
                >
                    User Name
                </button>
                <ul className={`${isActive ? 'block' : 'hidden'} w-40 bg-light absolute right-0 rounded-md`}>
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