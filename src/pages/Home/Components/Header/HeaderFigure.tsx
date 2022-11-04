import mobileImage from '../../../../assets/Hero__img.png'
import desktopImage from '../../../../assets/Hero__img@x2.png'
type Props = {}

const HeaderFigure = (props: Props) => {
  return (
<picture>
    <img src={mobileImage} alt="figure-portada" />
</picture>
  )
}

export default HeaderFigure