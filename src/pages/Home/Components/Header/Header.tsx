import ScrollToExplore from "../../../../components/icon/ScrollToExplore";
import HeaderFigure from "./HeaderFigure";
import HeaderLinks from "./HeaderLinks";

const Header = () => {
  return (
    <header className="flex justify-center max-w-[550px] min-h-screen mt-6 gap-8 flex-wrap text-start text-white font-serif font-semibold  ">
      <div className="flex flex-col w-full gap-4 min-h-screen">
        <h2 className='px-1 font__stroke head__title text-6xl text-start font-extrabold '>
          Front<span className='text-main'>end</span>
        </h2>
        <h2 className='px-1 sub__title text-end text-6xl'>Developer</h2>
        <hr />
        <div className="paragraph font-medium px-2 ">
          <p>I help your brand gain more engagement and start earning more revenue.</p>
          <p> My skills include professional design and front-end application development.</p>
        </div>
        <HeaderLinks />
        <ScrollToExplore />
      </div>
      <div className="flex flex-col gap-4 text-start text-white text-serif font-medium text-2xl uppercase">
        <h3 className='px-2'>About Me</h3>
        <hr />
        <HeaderFigure />
      </div>
    </header>
  );
};

export default Header;
