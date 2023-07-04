'use client';
import Link from "next/link";
import { useState } from "react";


interface IProps {
    hasCookie: boolean;
};

const menuItems: string[] = ['My Profile', 'Settings', 'Sign Out'];


const SignButton = ({ hasCookie }: IProps) => {

    const [isActive, setIsActive] = useState(false);

    const renderMenuItems = (arr: string[]) => {
        return arr.map(item => {
            return (
                <li key={item}>
                    {item}
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