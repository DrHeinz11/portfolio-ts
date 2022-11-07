import React from 'react'
import AboutIcons from './AboutIcons'

type Props = {}

const About = (props: Props) => {
    return (
        <div className="flex flex-col gap-4 px-4">
            <div className="flex flex-col gap-2">

                <h2 className="font-bold text-4xl">About <span className="text-main">Me</span>.</h2>
                <p className='relative top-2 font-medium'>I'm a developer specializing in  <span className="text-main">frontend</span>, for 1 year i've been studying in a self-taught way my <span className="text-main font-medium">stack</span> are:</p>
            </div>
            <AboutIcons/>
        </div>
    )
}

export default About