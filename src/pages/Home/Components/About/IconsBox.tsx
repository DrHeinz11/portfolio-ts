import { FC } from 'react'

type IconBox = { name: string, children: JSX.Element }

const IconsBox: FC<IconBox> = ({ name, children }) => {
    return (
        <div className="flex flex-col gap-2 items-center justify-between p-4 ">
            {children}
            <h5 className="text-xl font-normal">{name}</h5>
        </div>
    )
}

export default IconsBox