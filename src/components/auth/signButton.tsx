'use client';
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import Link from "next/link";
import ky from "ky";
import { decodeAccessToken } from "@/utils/accessToken";
import { useCallback, useEffect, useState } from "react";
import { IUserData, IUser } from "@/types/userTypes";


interface IProps {
    accessCookie: RequestCookie | undefined;
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

const getUserData = async (token: string) => {
    try {
        const user: IUser = decodeAccessToken(token).user as IUser;
        return user;

    } catch (error) {
        console.log(error);
        return null;
    }
};

const signOut = async (path: string) => {
    try {
        return await ky.post(`http://localhost:3000${path}`).json();
    } catch (error) {
        console.log();
    }
};


const SignButton = ({ accessCookie }: IProps) => {

    const [isActive, setIsActive] = useState<boolean>(false);
    const [userData, setUserData] = useState<IUser | null>();

    useEffect(() => {
        if (accessCookie?.name === 'accessToken') {
            getUserData(accessCookie.value)
                .then(data => setUserData(data))
                .catch();
        }

    }, [accessCookie?.name, accessCookie?.value]);

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
                    <li key={menuItem.title} className='text-base font-light px-5 py-2 hover:bg-gray-100'>
                        <button onClick={() => signOut(menuItem.path)
                            .then(() => window.location.replace('/'))
                            .catch(() => console.log())}>
                            {menuItem.title}
                        </button>
                    </li>
                );
            }
            return (
                <li key={menuItem.title} className='text-base font-light px-5 py-2 hover:bg-gray-100'>
                    <Link href={menuItem.path}>
                        {menuItem.title}
                    </Link>
                </li>
            );
        });
    };

    const menuItemsList = renderMenuItems(menuItems);

    if (userData) {
        return (
            <div className='relative'>
                <button id="btn" className='text-light text-lg block'>
                    {userData.username}
                </button>
                <ul className={`${isActive ? 'block' : 'hidden'} w-48 bg-light absolute right-0 rounded-md py-2 border border-mainGrey`}>
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