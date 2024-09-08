import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/bento-grid'
import { BackgroundBeamsWithCollision } from './ui/background-beams-with-collision'
import { gridItems } from '@/data'



const Grid = () => {
    return (
        <div >
            {/* <BackgroundBeamsWithCollision className='w-screen min-h-screen relative dark:bg-black-100 overflow-hidden'> */}
                <div className=' w-full'>
                    <h2 className='w-[80%] lg:w-[100%] sm:text-center text-[45px] lg:text-[40px] md:text-[36px] sm:text-[33px] bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 leading-snug tracking-wide font-bold text-center mx-auto py-10'>
                        Developed by ME
                    </h2>
                </div>

                <BentoGrid className='z-10 relative'>
                    {
                        gridItems.map(({ id, title, description, className, imgClassName, titleClassName, img, spareImg, techs, iconLists, git, demo }) => (
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
                                techs={techs}
                                iconLists={iconLists}
                                git={git}
                                demo={demo}
                            />

                        ))
                    }
                </BentoGrid>
            {/* </BackgroundBeamsWithCollision> */}

        </div>
    )
}

export default Grid