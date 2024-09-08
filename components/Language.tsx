import React from 'react'
import { InfiniteMovingCards } from './ui/infinite-moving-cards'
import { BackgroundBeams } from './ui/background-beams';
import { items } from '@/data';

const Language = () => {



    return (
        <div className=' h-72 w-full dark:bg-black-100  dark:bg-dot-white/[0.3] bg-dot-black/[0.2] relative flex flex-col items-center justify-center'>
            <div className="absolute pointer-events-none inset-0 flex flex-col items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]"></div>
            <p className=" block  text-[45px] lg:text-[40px] md:text-[36px] sm:text-[33px]  font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
                Languages
            </p>
            <div className=' block'>
                <InfiniteMovingCards
                    items={items}
                    direction="right"
                    speed="slow"
                />
            </div>

        </div>



    )
}

export default Language

