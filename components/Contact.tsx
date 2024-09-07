import React from 'react'
import { ContactForm } from './Contact-form'
import { IconBrandInstagram, IconMail, IconBrandFacebook, IconBrandWhatsapp, IconBrandX, IconBrandGithub } from '@tabler/icons-react';
import { FloatingDock } from './ui/floating-dock';

const Contact = () => {
    const links = [
    
        {
          title: "Mail",
          icon: (
            <IconMail className="h-full w-full text-neutral-500 dark:text-neutral-300" />
          ),
          href: "mailto:heinhtet14120@gmail.com?subject=Hello%20There&body=I'm%20interested%20in%20your%20services.",
        },
        // {
        //   title: "Aceternity UI",
        //   icon: (
        //     <Image
        //       src="https://assets.aceternity.com/logo-dark.png"
        //       width={20}
        //       height={20}
        //       alt="Aceternity Logo"
        //     />
        //   ),
        //   href: "#",
        // },
        {
          title: "Whatsapp",
          icon: (
            <IconBrandWhatsapp className="h-full w-full text-neutral-500 dark:text-neutral-300" />
          ),
          href: "https://wa.me/959964238343",
        },
    
        {
          title: "X",
          icon: (
            <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
          ),
          href: "https://x.com/HeinHte05030700",
        },
        {
          title: "GitHub",
          icon: (
            <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
          ),
          href: "https://github.com/HeinHtet14120",
        },
      ];
    return (
        <>
            <div className=' w-full h-auto my-16 flex md:flex-col sm:flex-col items-center dark:bg-black-100 dark:bg-grid-neutral-200/[0.2] bg-grid-black/[0.2] bg-small-grid relative'>
                <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_5%,black)]"></div>
                <div className=' w-[50%] md:w-full sm:w-full text-center md:mb-5 sm:mb-5'>
                    <div className=' w-full '>
                        <h1 className=' w-[80%] text-left pl-7 sm:w-[70%] sm:text-center sm:pl-0 sm:mx-auto md:mx-auto lg:text-left text-5xl lg:text-4xl md:text-3xl sm:text-3xl mb-3 text-neutral-200 font-extrabold leading-snug sm:leading-10 sm:my-8'>Ready to Bring Your Ideas to Life?</h1>
                        <p className=' w-[80%] pl-7 sm:w-[70%] sm:text-justify sm:pl-0 sm:mx-auto md:mx-auto text-justify text-neutral-400 leading-6 text-md sm:mb-8'>If you're looking for innovative solutions or creative collaboration, I’m here to help. Get in touch today, and let’s discuss how we can make your project a reality!</p>
                    </div>
                    <div className=" sm:my-7">
                        <FloatingDock
                        desktopClassName=' w-fit '
                            mobileClassName="translate-y-20" // only for demo, remove for production
                            items={links}
                        />
                    </div>
                </div>
                <div className=' w-[50%] md:w-full sm:w-full '>
                    <ContactForm />
                </div>
            </div>
        </>
    )
}

export default Contact