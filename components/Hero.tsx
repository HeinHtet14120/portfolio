import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/text-generate-effect'
import { SparklesCore } from './ui/sparkles'
import { HoverBorderGradient } from './ui/hover-border-gradient'
import { FaLocationArrow } from 'react-icons/fa'
import MagicButton from './ui/magicButton'


const Hero = () => {
  return (
    <div className=' pb-20 pt-18'>
      <div>
        <Spotlight className=' -top-20 -left-10 md:-left-32 md:-top-20 h-screen' fill='#00FFFF' />
        <Spotlight className=' top-50 left-full h-[80vh] w-[50vw]' fill='#003366' />
      </div>
      <div className="h-screen absolute top-0 left-0 w-full dark:bg-black-100 flex flex-col items-center justify-center overflow-hidden rounded-md">
        <div className="w-full absolute inset-0 h-screen">
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

      <div className=' flex justify-center relative my-20 z-10'>
        <div className=' max-w-[89vw] md:max-w-2xl lg:max-w-6xl flex flex-col items-center justify-center'>

          <h2 className=' flex flex-col items-start uppercase tracking-normal text-center text-blue-100 max-w-80'>
            <HoverBorderGradient
              duration={2}
              clockwise
              containerClassName="rounded-full"
              as="button"
              className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
            >
              <span className='text-sm'>It&apos;s Hein Htet, Full-Stack Developer.</span>
            </HoverBorderGradient>
          </h2>
          <TextGenerateEffect className=' text-center text-[40px] md:text-5xl lg:text-6xl' words={'In the world of development, possibilities are limitless.'} />
          <a href="#about">
          <MagicButton title="Show my work"
          icon={<FaLocationArrow/>}
          position='right'/>
          </a>
          
        </div>
      </div>
    </div>
  )
}

export default Hero