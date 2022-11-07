import { FC } from 'react'
import { ReleaseCardData } from '../../../../types/type'
import ReleaseCard from './ReleaseCard'
import ReleaseCta from './ReleaseCta'

type Props = {}
const RelaseProjectData: Array<ReleaseCardData> = [{ id: 2, title: 'string', paragraph: 'stringLorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae, illum nam quaerat natus repellat aperiam cumque eveniet illo perferendis, corrupti neque non.', route: 'string', links: { deploy: 'string', repository: 'string' }, imgUrl: 'string', imgAlt: 'string' }, { id: 22, title: 'string', paragraph: 'string', route: 'string', links: { deploy: 'string', repository: 'string' }, imgUrl: 'string', imgAlt: 'string' }, { id: 23, title: 'string', paragraph: 'string', route: 'string', links: { deploy: 'string', repository: 'string' }, imgUrl: 'string', imgAlt: 'string' }, { id: 24, title: 'string', paragraph: 'string            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae, illum nam quaerat natus repellat aperiam cumque eveniet illo perferendis, corrupti neque non.', route: 'string', links: { deploy: 'string', repository: 'string' }, imgUrl: 'string', imgAlt: 'string' }]

const ReleaseProjects: FC = (props: Props) => {
  return (
    <div className='grid-cols-projectContainer grid gap-8 py-20 px-4 items-center bg-[#0b0b0b]'>
      <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-medium'>These are some of my
        <span className='ml-4 my-2 before:block before:absolute before:-inset-2 before:-skew-y-2 before:bg-main relative inline-block'>
          <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-6xl py-1 relative'>
            project
          </h2>
        </span>
      </h2>
      {RelaseProjectData.map(element => <ReleaseCard title='as' key={element.id} id={element.id} paragraph={element.paragraph} imgUrl='https://pbs.twimg.com/media/Fg60v3XXgAAfUIg?format=jpg&name=4096x4096' imgAlt='prueba' route={element.route} links={{ repository: 'dasdas', deploy: 'dasdas' }} />)}
      <ReleaseCta />
    </div>
  )
}

export default ReleaseProjects