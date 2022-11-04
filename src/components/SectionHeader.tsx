import { FC } from 'react'

type Props = { text: string }

const SectionHeader: FC<Props> = ({ text }) => {
    return (
        <div className="flex row items-center gap-2 w-full h-16">
            <span className=" w-6 h-[2px] bg-main"></span>
            <h2 className="text-white font-serif font-medium text-center uppercase text-xl">{text}</h2>
            <span className="flex-1 w-full h-[2px] bg-main"></span>
        </div>
    )
}

export default SectionHeader