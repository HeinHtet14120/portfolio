import { cn } from "@/lib/utils";
import {
    IconTimeline,
    IconCloud,
    IconLock,
    IconCode,
    IconBrandSpeedtest,
    IconBug,
    IconBrandGithub,
    IconDeviceDesktop,
} from "@tabler/icons-react";
import { BackgroundBeamsWithCollision } from "./ui/background-beams-with-collision";
import { TextHoverEffect } from "./ui/text-hover-effect";

export function Features() {
    const features = [
        {
            title: "Responsive Design",
            description:
                "Expert in creating responsive and dynamic user interfaces for all devices.",
            icon: <IconDeviceDesktop stroke={1} />,
        },
        {
            title: "Back-End",
            description:
                "Experienced in creating robust back-end architectures and RESTful APIs.",
            icon: <IconCode stroke={2} />,
        },
        {
            title: "Encryption & Security",
            description:
                "Implemented advanced encryption techniques in sensitive data handling for various web applications.",
            icon: <IconLock />,
        },
        {
            title: "Database",
            description: "Designed and maintained scalable databases with optimized queries for performance.",
            icon: <IconCloud />,
        },
        {
            title: "Version Control",
            description: "Proficient in using Git for version control, ensuring seamless collaboration and code management.",
            icon: <IconBrandGithub />,
        },
        {
            title: "Testing & Debugging",
            description:
                "Adept at writing unit, integration, and end-to-end tests to ensure code quality and reliability.",
            icon: <IconBug />,
        },
        {
            title: "Real-Time Applications",
            description:
                "Specialized in building real-time features for applications using WebSockets and server-sent events.",
            icon: <IconTimeline />,
        },
        {
            title: "Performance",
            description: "Focused on optimizing web applications for speed and performance, ensuring a smooth user experience.",
            icon: <IconBrandSpeedtest />,
        },
    ];
    return (
        <div className=" h-full">
            <div className=' w-full'>
                <h2 className='w-[80%] lg:w-[100%] sm:text-center text-[50px] lg:text-[40px] md:text-[36px] sm:text-[33px] dark:text-white text-black leading-snug tracking-wide font-bold text-center mx-auto py-10'>
                    What I bring to the <span className=' text-neutral-400'>Table</span>
                </h2>
            </div>
            <div className="grid grid-cols-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 mx-5">
                {features.map((feature, index) => (
                    <Feature key={feature.title} {...feature} index={index} />
                ))}
            </div>
        </div>


    );
}

const Feature = ({
    title,
    description,
    icon,
    index,
}: {
    title: string;
    description: string;
    icon: React.ReactNode;
    index: number;
}) => {
    return (
        <div
            className={cn(
                "flex flex-col py-10 relative group/feature ",
            )}
        >
            <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none rounded-xl" />

            <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
                {icon}
            </div>
            <div className="text-lg font-bold mb-2 relative z-10 px-10">
                <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
                <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
                    {title}
                </span>
            </div>
            <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
                {description}
            </p>
        </div>
    );
};
