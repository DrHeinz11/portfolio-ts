import React from 'react'
import { ReleaseProjects } from '../../pages'

type Props = {}

const Maintenance = (props: Props) => {
    return (
        <div className="flex flex-col justify-center bg-[#00000038] items-center gap-4 w-full min-h-screen">
            <h1 className=" my-6 text-2xl sm:text-3xl md:text-6xl lg:text-8xl capitalize text-center items-center text-black font-medium">under
                <span className='ml-4 my-2 before:block before:absolute before:-inset-2 before:-skew-y-2 before:bg-main relative inline-block'>
                    <h2 className=' text-white py-1 relative'>
                        Maintenance
                    </h2>
                </span></h1>

            <ReleaseProjects />
        </div>
    )
}

export default Maintenance