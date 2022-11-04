import mobileImage from '../../../../assets/Hero__img.png'
type Props = {}

const HeaderFigure = (props: Props) => {
  return (
    <picture>
      <img className='aspect-video object-cover object-center' src={mobileImage} alt="figure-portada" />
    </picture>
  )
}

export default HeaderFigure