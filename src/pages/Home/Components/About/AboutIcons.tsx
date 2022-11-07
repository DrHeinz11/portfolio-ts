import { FC } from 'react'
import { Css3, Git, Github, Html5, JavaScript, React, Sass, Tailwind, Terminal, TypeScript, VisualStudio } from '../../../../components'
import IconsBox from './IconsBox'

type dataIcon = Array<{ text: string, icon: JSX.Element, id: number }>
type dataToll = Array<{ text: string, icon: JSX.Element, id: number }>
const dataIcon = [{ text: 'HTML5', icon: <Html5 />, id: 22 }, { text: 'CSS3', icon: <Css3 />, id: 223 }, { text: 'Sass', icon: <Sass />, id: 224 }, { text: 'Tailwind.css', icon: <Tailwind />, id: 225 }, { text: 'JavaScript', icon: <JavaScript />, id: 226 }, { text: 'TypeScript', icon: <TypeScript />, id: 227 }, { text: 'React.js', icon: <React />, id: 228 }]
const dataToll = [{ text: 'Git', icon: <Git />, id: 122 }, { text: 'VSCode', icon: <VisualStudio />, id: 123 }, { text: 'Github', icon: <Github />, id: 124 }, { text: 'Terminal', icon: <Terminal />, id: 125 }]

const AboutIcons: FC = (props) => {
  return (<>
    <div className="grid-cols-iconsContainer grid gap-4">
      {dataIcon.map(element => <IconsBox key={element.id} name={element.text}>
        {element.icon}
      </IconsBox>)}
    </div>
    <h2 className=' font-medium text-xl capitalize'>My <span className="text-main">tolls</span> are:</h2>
    <div className="grid-cols-iconsContainer grid gap-4">
      {dataToll.map(element => <IconsBox key={element.id} name={element.text}>
        {element.icon}
      </IconsBox>)}
    </div>
  </>
  )
}

export default AboutIcons