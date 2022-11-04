
import SectionHeader from '../../../../components/SectionHeader'
import AboutFigure from './AboutFigure'

type Props = {}

const AboutHeader = (props: Props) => {
    return (
        <div className="flex flex-col gap-4 text-start bg-lightGray text-white">
            <SectionHeader text='About me' />
            <AboutFigure />
            <div className="flex flex-col gap-2 px-2">
                <p className='font-normal text-lg'>My name is Franc, for 1 year I study programming and design in a self-taught way.</p>
                <h3 className='font-normal text-xl'>My stack:</h3>
            </div>
        </div>
    )
}

export default AboutHeader