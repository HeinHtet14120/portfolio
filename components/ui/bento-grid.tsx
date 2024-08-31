import { cn } from "@/lib/utils";
import { EvervaultCard } from "./evervault-card";

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
        "grid grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 md:auto-rows-[18rem] sm:auto-rows-[15rem] gap-4 max-w-full mx-3 sm:mx-5 ",
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
  spareImg
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  id?: number;
  img?: string;
  titleClassName?: string;
  imgClassName?: string;
  spareImg?: string
}
) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black-100 dark:bg-opacity-[0.4] dark:border-white/[0.2] border border-transparent justify-between flex flex-col space-y-4",
        className
      )}
    >
      { id == 2 && <EvervaultCard text="hover"/>}
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
          {title}
        </div>
        <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
          {description}
        </div>
      </div>
    </div>
  );
};
