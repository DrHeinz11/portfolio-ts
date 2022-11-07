import React from 'react'
import { Arrow } from '../../../../components'

type Props = {}

const ReleaseCta = (props: Props) => {
  return (
    <div className="flex flex-col gap-2 cursor-pointer">
      <h4 className=" text-main font-medium text-2xl sm:text-3xl md:text-4xl lg:text-6xl">Show All</h4>
    </div>
  )
}

export default ReleaseCta