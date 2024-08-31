import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/bento-grid'
import { BackgroundBeamsWithCollision } from './ui/background-beams-with-collision'
import { Spotlight } from './ui/Spotlight'
import { gridItems } from '@/data'
import { EvervaultCard } from './ui/evervault-card'
import { TextHoverEffect } from './ui/text-hover-effect'


const Grid = () => {
    return (
        <div >
            <BackgroundBeamsWithCollision className='w-screen min-h-screen relative dark:bg-black-100 overflow-hidden'>
                <div className=' w-full'>
                    <h2 className='w-[80%] lg:w-[100%] sm:text-center text-[50px] lg:text-[40px] md:text-[36px] sm:text-[33px] dark:text-white text-black leading-snug tracking-wide font-bold text-center mx-auto py-10'>
                        <TextHoverEffect text='What I Bring to the Table'/>
                    </h2>

                </div>
                <BentoGrid className='z-10 relative'>

                    {
                        gridItems.map(({ id, title, description, className, imgClassName, titleClassName, img, spareImg }) => (
                                <BentoGridItem
                                    id={id}
                                    key={id}
                                    title={title}
                                    description={description}
                                    img={img}
                                    className={className}
                                    titleClassName={titleClassName}
                                    imgClassName={imgClassName}
                                    spareImg={spareImg}
                                />

                        ))
                    }
                </BentoGrid>
            </BackgroundBeamsWithCollision>

        </div>
    )
}

export default Grid