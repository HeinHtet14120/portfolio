"use client"
import { cn } from "@/lib/utils";
import { EvervaultCard } from "./evervault-card";
import {
  IconBrandGithubFilled, IconRocket
} from "@tabler/icons-react";
import Link from "next/link";
import { GlareCard } from "./glare-card";


export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 row-span-4 gap-4 max-w-full mx-3 sm:mx-5 items-center mb-12",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  titleClassName,
  imgClassName,
  spareImg,
  techs,
  iconLists,
  git,
  demo
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  id?: number;
  img?: string;
  titleClassName?: string;
  imgClassName?: string;
  spareImg?: string
  techs?: string[]
  iconLists?: string[]
  git?: string
  demo?: string | null
}
) => {

  return (
    <div
      className={cn(
        " rounded-xl group/bento h-fit hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black-100 dark:bg-opacity-[0.4] dark:border-white/[0.2] border border-transparent justify-between flex flex-col space-y-4",
        className
      )}
    >

      <div className="group-hover/bento:translate-x-1 transition duration-200 ">
        {
          id == 6 &&
          <div>
            <div>
              <Link href={`${git}`} target="_blank">
              <EvervaultCard text={title?.toString()} className=" flex my-auto" />
              </Link>
              <div className=" flex justify-between items-center gap-2 mr-2 mt-2">
                <div className=" flex items-center justify-center ">
                  {iconLists?.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black-100 w-9 h-9 lg:w-8 lg:h-8 flex justify-center items-center -ml-2"
                     
                    >
                      <img src={icon} alt="icon5" className="p-2" />
                    </div>
                  ))}
                </div>
                <div className=" flex ">
                  <Link href={`${git}`} target="_blank" rel="noopener noreferrer">
                    <IconBrandGithubFilled stroke={2} color="grey" width={28} height={28} />
                  </Link>

                  {demo && <Link href={`${demo}`} target="_blank" rel="noopener noreferrer">
                    <IconRocket stroke={2} color="gray-100" width={28} height={28} />
                  </Link>}


                </div>
              </div>
            </div>
          </div>

        }
        {
          id && id < 6 &&
          <div>
            <div>
              <GlareCard className="flex flex-col items-center justify-center">
                <img src={img} alt="" srcSet="" className=" rounded-lg" />
              </GlareCard>
            </div>
            <div className="font-sans font-bold text-[25px] md:text-[23px] sm:text-[22px] text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
              {title}
            </div>
            <div className="font-sans font-normal text-[17px] md:text-[16px] sm:text-[16px] text-left my-4 text-bet text-neutral-600 dark:text-neutral-400">
              {description}
            </div>
            <div className=" w-full flex justify-between items-center">
              <div className=" w-[80%] flex items-center justify-start flex-wrap ">
                {iconLists?.map((icon, index) => (
                  <div
                    key={index}
                    className="border border-white/[.2] rounded-full bg-black w-9 h-9 lg:w-8 lg:h-8  flex flex-wrap justify-center items-center -ml-2"
                    
                  >
                    <img src={icon} alt="icon5" className="p-2" />
                  </div>
                ))}
              </div>
              <div className=" flex gap-1 mr-1">
                <Link href={`${git}`} target="_blank" rel="noopener noreferrer">
                  <IconBrandGithubFilled stroke={2} color="grey" width={28} height={28} />
                </Link>
                {demo && <Link href={`${demo}`} target="_blank" rel="noopener noreferrer">
                  <IconRocket stroke={2} color="azure" className="" width={28} height={28} />
                </Link>}


              </div>
            </div>
          </div>
        }
      </div>
    </div>
  );
};
