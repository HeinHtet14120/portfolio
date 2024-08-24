import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/text-generate-effect'
import { SparklesCore } from './ui/sparkles'
import { HoverBorderGradient } from './ui/hover-border-gradient'
import { FaLocationArrow } from 'react-icons/fa'
import MagicButton from './ui/magicButton'
import { GlobeDemo } from './ui/World'
import { TypewriterEffect } from './ui/typewriter-effect'
import { FlipWords } from './ui/flip-words'
import React from 'react'

const HeroNew = () => {
  const words = ["modern", "responsive", "dynamic", "interactive"];

  return (
    <div className='w-screen min-h-screen relative'>
      <div className='z-0 relative'>
        <Spotlight className='-top-20 -left-10 md:-left-32 md:-top-20 h-screen' fill='#00FFFF' />
        <div className="w-full absolute inset-0 h-screen dark:bg-black-100 z-0">
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={70}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />
        </div>
      </div>

      <div className='w-full h-auto flex lg:flex-row md:flex-row sm:flex-col z-10 py-20 px-5 relative justify-center items-center'>
        <div className='w-[50%] sm:w-full flex flex-col justify-center items-start px-5 sm:px-3  sm:items-center'>
          <h2 className=' uppercase tracking-normal text-center text-blue-100 pb-5'>
            <HoverBorderGradient
              duration={2}
              clockwise
              containerClassName="rounded-full"
              as="button"
              className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
            >
              <span className='text-sm md:text-xs sm:text-xs'>Hein Htet, Full-Stack Developer.</span>
            </HoverBorderGradient>
          </h2>
          <TextGenerateEffect className=' w-[80%] lg:w-[100%] text-pretty pb-5 sm:text-center text-[50px] lg:text-[40px] md:text-[36px] sm:text-[33px]' words={'In the world of development, possibilities are limitless.'} />
          <div className="w-[80%] sm:w-[100%] items-start h-20 lg:h-28 md:h-32 sm:h-20 leading-8 text-[18px] lg:text-[16px] md:text-[15px] text-left sm:text-center mb-5 font-normal text-neutral-600 dark:text-neutral-400">
            With expertise in full stack development, I build <FlipWords words={words} className=' px-0' /> websites that deliver exceptional user experiences.
          </div>
          <a href="#about" >
            <MagicButton title="Show my work"
              icon={<FaLocationArrow />}
              position='right' />

          </a>
        </div>
        <div className='w-[50%] sm:w-full'>
          <div className='mx-auto relative overflow-hidden h-[22rem] lg:h-[20rem] md:h-[15rem] sm:h-[13rem]'>
            <GlobeDemo />
          </div>
        </div>
      </div>
    </div>

  )
}

export default HeroNew