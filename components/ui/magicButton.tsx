import React from 'react'

const MagicButton = ({title, icon, position, handleClick, otherClasses} : {
    title : string, icon : React.ReactNode, position : string, handleClick?: () => void, otherClasses?: string
}) => {
    return (
        <button className={`inline-flex text-neutral-200 h-12 animate-shimmer items-center justify-center rounded-lg border border-slate-800 text-sm bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-4  transition-colors focus:outline-none md:w-40 md:mt-5 lg:mt-5 sm:mt-2 gap-2 ${otherClasses}`}>
            {position === 'left' && icon}
            {title}
            {position === 'right' && icon}
        </button>
    )
}

export default MagicButton