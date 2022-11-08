import { FC } from 'react'
import { dataProjectCard } from '../../../../constant/dataProjectCard'
import ReleaseCard from './ReleaseCard'
import ReleaseCta from './ReleaseCta'

type Props = {}

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
      {dataProjectCard.map(element => <ReleaseCard title={element.title} key={element.id} id={element.id} paragraph={element.paragraph} imgUrl={element.imgUrl} imgAlt={element.imgAlt} route={element.route} links={element.links} />)}
      <ReleaseCta />
    </div>
  )
}

export default ReleaseProjects