import { Github, Gmail, Linkdin, Stamp } from '../../../../components'

type Props = {}

const HeaderLinks = (props: Props) => {
    return (
        <div className="flex flex-col gap-4 items-center  ">
            <a className='p-2' href="https://github.com/DrHeinz11" rel="noopener noreferrer" target="_blank">
                <Github />
            </a>
            <a className='p-2' href="https://www.linkedin.com/in/franco-martin-148206243/" rel="noopener noreferrer" target="_blank">
                <Linkdin />
            </a>
            <a className='p-2' href="" rel="noopener noreferrer" target="_blank">
                <Gmail />
            </a>
        </div>
    )
}

export default HeaderLinks