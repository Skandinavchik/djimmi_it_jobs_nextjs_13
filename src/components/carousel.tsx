'use client';
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";


interface ICarouselItem {
    review: string;
    fullName: string;
    position: string;
};

const carouselItems: ICarouselItem[] = [
    {
        review: `"Awesome service, helped me to find a regular customer for a week, with whom I have been working for almost 3 years".`,
        fullName: 'Sean Rice',
        position: 'React Frontend Developer',
    },
    {
        review: `"It happens that you need to find a new job. Djimmi makes your job look for you".`,
        fullName: 'Ricardo Blair',
        position: 'Node.js Backend Developer',
    },
    {
        review: `"I've already found work twice on Djimmi and every time it's been better :) So keep it!"`,
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

    const nextItem = () => {
        if (index === carouselItems.length - 1) {
            setIndex(0);
            return;
        }
        setIndex(index + 1);
    };

    const prevItem = () => {
        if (index === 0) {
            setIndex(carouselItems.length - 1);
            return;
        }
        setIndex(index - 1);
    };

    return (
        <div
            className='w-full h-80 flex justify-center items-center'>
            <button className='w-8 h-8 border-t-[3px] border-l-[3px] -rotate-45 border-mainGreen' onClick={prevItem}></button>
            <AnimatePresence mode="wait" initial={false}>
                <motion.div
                    variants={variants}
                    initial='initial'
                    animate='animate'
                    exit='exit'
                    transition={{ duration: 0.25 }}
                    key={index}
                    className='w-[1000px] h-full flex flex-col justify-center items-center'
                >
                    <p className='max-w-[500px] text-center text-xl font-light mb-6'>{carouselItems[index].review}</p>
                    <div className='flex justify-center items-center gap-5'>
                        <div className='w-12 h-12 rounded-full bg-mainGreen flex justify-center items-center text-xl text-light'>{carouselItems[index].fullName.slice(0, 1)}</div>
                        <p className='font-light'>{`${carouselItems[index].fullName}, ${carouselItems[index].position}`}</p>
                    </div>
                </motion.div>
            </AnimatePresence>
            <button className='w-8 h-8 border-t-[3px] border-r-[3px] rotate-45 border-mainGreen' onClick={nextItem}></button>
        </div>
    );
};

export default Carousel;