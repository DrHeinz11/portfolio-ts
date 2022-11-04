import mobileImage from '../../../../assets/Hero__img.png'

type Props = {}

const AboutFigure = (props: Props) => {
    return (
        <picture className="w-fit">
            <img className='aspect-video object-cover object-center w-fit max-h-64' src={mobileImage} alt="figure-portada" />
        </picture>
    )
}

export default AboutFigure