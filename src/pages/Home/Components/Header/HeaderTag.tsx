import React from 'react'

type Props = {}

function HeaderTag({ }: Props) {
    return (
        <div className=" rotate-[22deg] md:rotate-0 h-fit">
            <div className="flex flex-row gap-4 items-center m-inline text-[8rem] font-display font-stroke">
                <h2 className='text-main text-[8rem] font-display'>Frontend</h2>
                <h2 className='text-[#ccc] text-[8rem] font-display'>Developer</h2>
                <h2 className='text-main text-[8rem] font-display'>Desing</h2>
                <h2 className=' text-[#ccc]'>UI</h2>
            </div>
        </div>
    )
}

export default HeaderTag