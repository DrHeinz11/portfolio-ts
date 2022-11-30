
import { HeaderLinks } from '../../pages'
import { Stamp } from '../icon'

type Props = {}

const Footer = (props: Props) => {
  return (<>
    <div className=" flex flex-col gap-6 px-2 md:px-8 mt-10">
      <h3 className='font-bold text-4xl sm:text-6xl md:text-7xl'>Let's
        <span className='mx-4 my-2 before:block before:absolute before:-inset-2 before:-skew-y-2 before:bg-main relative inline-block'>
          <h2 className='font-bold text-4xl sm:text-6xl md:text-7xl py-1 relative'>
            work
          </h2>
        </span>
        together...</h3>
      {/* <p className='font-medium text-xl sm:text-2xl md:text-3xl'>How do you take your coffee ?</p> */}
      <div className="flex flex-row justify-start gap-10">
        <Stamp />
        <HeaderLinks direction='row' />
      </div>
      <p className="text-center">© Created for <a href='https://github.com/Franco-Martin11' rel='noopener noreferrer' target='_blank' className="cursor-pointer hover:text-main underline">
        FrancMartin
      </a>
      </p>
    </div>
  </>
  )
}

export default Footer