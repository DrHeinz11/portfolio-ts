import HeaderFigure from "./HeaderFigure";
import HeaderLinks from "./HeaderLinks";

const Header = () => {
  return (
    <header className="flex justify-center max-w-[550px] min-h-screen mt-4 px-2  gap-8 flex-wrap text-start text-white font-serif font-semibold  ">
      <div className="flex flex-col w-full gap-4">
        <h2 className=' font__stroke head__title text-6xl text-start font-extrabold '>
          Front<span className='text-main'>end</span>
        </h2>
        <h2 className=' sub__title text-end text-6xl'>Developer</h2>
        <hr />
        <div className="paragraph font-medium">
          <p>I help your brand gain more engagement and start earning more revenue.</p>
          <p> My skills include professional design and front-end application development.</p>
        </div>
        <HeaderLinks />
      </div>
      <HeaderFigure />
    </header>
  );
};

export default Header;
