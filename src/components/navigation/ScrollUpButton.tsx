'use client';

import { ChevronUpIcon } from '@heroicons/react/24/outline';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';



const ScrollUpButton = () => {

	const [isActive, setIsActive] = useState<boolean>(false);

	useEffect(() => {
		window.addEventListener('scroll', () => {
			window.scrollY > window.innerHeight / 1.5 ? setIsActive(true) : setIsActive(false)
		});

		return () => {
			window.removeEventListener('scroll', () => {
				window.scrollY > window.innerHeight / 1.5 ? setIsActive(true) : setIsActive(false)
			});
		}
	}, []);

	return (
		<Button
			asChild
			onClick={() => window.scrollTo(0, 0)}
			className={`fixed ${isActive ? 'bottom-4' : '-bottom-12'} right-4 md:w-6 h-6 lg:w-8 lg:h-8 p-1 rounded-full cursor-pointer transition-all duration-300 hidden sm:block`}>
			<ChevronUpIcon className=' md:w-6 md:h-6 lg:w-8 lg:h-8' />
		</Button>
	);
};

export default ScrollUpButton;