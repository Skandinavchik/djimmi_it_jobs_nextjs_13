'use client';

import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';
import { useState, useEffect } from 'react';



const ThemeToggle = () => {

	const { resolvedTheme, setTheme } = useTheme();
	const [mounted, setMounted] = useState<boolean>(false);

	useEffect(() => {
		setMounted(true)
	}, []);

	if (!mounted) {
		return <Button variant={'ghost'} size={'icon'} />;
	}

	const changeTheme = () => {
		setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
	}

	return (
		<Button
			variant={'ghost'}
			size={'icon'}
			onClick={changeTheme}
		>
			{
				resolvedTheme === 'dark'
					? <SunIcon className='w-4 h-4 text-orange-200' />
					: <MoonIcon className='w-4 h-4' />
			}
		</Button>
	);
};

export default ThemeToggle;