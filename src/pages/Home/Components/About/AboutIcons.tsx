import { FC } from 'react'
import { Github, Linkdin } from '../../../../components'
import IconsBox from './IconsBox'

type dataIcon = Array<{ text: string, icon: JSX.Element, id: number }>
const dataIcon: dataIcon = [{ text: 'hola', icon: <Github />, id: 22 }, { text: 'hola', icon: <Linkdin />, id: 22 }]

const AboutIcons: FC = (props) => {
  return (
    <div className="grid-cols-iconsContainer grid items-end">
      {dataIcon.map(element => <IconsBox key={element.id} name={element.text}>
        {element.icon}
      </IconsBox>)}
    </div>
  )
}

export default AboutIcons