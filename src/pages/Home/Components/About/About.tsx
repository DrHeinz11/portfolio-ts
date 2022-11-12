import AboutIcons from './AboutIcons'
const About = () => {
    return (
        <div id='about' className="flex flex-col gap-4 px-4 md:px-8 py-10 content-center bg-bgGray min-h-screen">
            <div className="flex flex-col p-4 gap-4 max-w-[1200px] m-[0_auto]">
                <h2 className="font-bold text-4xl sm:text-6xl md:text-6xl">About <span className="text-main">Me</span>.</h2>
                <p className='relative top-2 font-medium text-lg sm:text-xl md:text-2xl'>I'm a developer specializing in  <span className="text-main">frontend</span>, for 1 year i've been studying in a self-taught way my <span className="text-main font-medium">stack</span> are:</p>
                <AboutIcons />
            </div>
        </div>
    )
}

export default About