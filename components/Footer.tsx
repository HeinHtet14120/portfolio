import React from 'react'

const Footer = () => {
    return (
        <div className='w-full h-auto flex justify-between text-neutral-600'>
            <div className=' mx-auto py-10'>
              &copy; {new Date().getFullYear()} Hein Htet. All rights reserved.
            </div>
        </div>
    )
}

export default Footer