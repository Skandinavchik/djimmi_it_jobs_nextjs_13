'use client';
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';


interface ICarouselItem {
	review: string;
	fullName: string;
	position: string;
};

const carouselItems: ICarouselItem[] = [
	{
		review: `" Awesome service, helped me to find a regular customer for a week, with whom I have been working for almost 3 years. "`,
		fullName: 'Sean Rice',
		position: 'React Frontend Developer',
	},
	{
		review: `" It happens that you need to find a new job. Djimmi makes your job look for you. "`,
		fullName: 'Ricardo Blair',
		position: 'Node.js Backend Developer',
	},
	{
		review: `" I've already found work twice on Djimmi and every time it's been better :) So keep it! "`,
		fullName: 'Amy Greer',
		position: 'React / Node.js Fullstack Developer',
	},
];

const variants = {
	initial: { opacity: 0 },
	animate: { opacity: 1 },
	exit: { opacity: 0 },
};

const Carousel = () => {

	const [index, setIndex] = useState(0);

	const nextItem = (): void => {
		if (index === carouselItems.length - 1) {
			setIndex(0);
			return;
		}
		setIndex(index => index + 1);
	};

	const prevItem = (): void => {
		if (index === 0) {
			setIndex(carouselItems.length - 1);
			return;
		}
		setIndex(index => index - 1);
	};

	return (
		<div
			className='w-full h-80 flex justify-center items-center'>
			<ChevronLeftIcon
				className='w-10 h-10 text-slate-400 cursor-pointer'
				onClick={prevItem}
			/>
			<AnimatePresence mode="wait" initial={false}>
				<motion.div
					variants={variants}
					initial='initial'
					animate='animate'
					exit='exit'
					transition={{ duration: 0.25 }}
					key={index}
					className='w-[800px] h-full flex flex-col justify-center items-center'
				>
					<p className='max-w-[500px] text-center text-lg font-light italic mb-6'>{carouselItems[index].review}</p>
					<div className='flex justify-center items-center gap-5'>
						<Avatar className='w-12 h-12 text-lg font-medium'>
							<AvatarImage />
							<AvatarFallback className='bg-lightGrey'>{carouselItems[index].fullName.slice(0, 1)}</AvatarFallback>
						</Avatar>
						<p>{`${carouselItems[index].fullName}, ${carouselItems[index].position}`}</p>
					</div>
				</motion.div>
			</AnimatePresence>
			<ChevronRightIcon
				className='w-10 h-10 text-slate-400 cursor-pointer'
				onClick={prevItem}
			/>
		</div>
	);
};

export default Carousel;