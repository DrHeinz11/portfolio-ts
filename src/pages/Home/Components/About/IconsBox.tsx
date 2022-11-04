import { FC } from 'react'

type IconBox = { name: string, children: JSX.Element }

const IconsBox: FC<IconBox> = ({ name, children }) => {
    return (
        <div className="flex flex-col gap-2 items-center p-4 ">
            {children}
            <h6>{name}</h6>
        </div>
    )
}

export default IconsBox