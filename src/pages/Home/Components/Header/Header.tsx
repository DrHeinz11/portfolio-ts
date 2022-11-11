import { Stamp } from "../../../../components";
import ScrollToExplore from "../../../../components/icon/ScrollToExplore";
import HeaderLinks from "./HeaderLinks";
import HeaderTag from "./HeaderTag";

const Header = () => {
  return (
    <header className="flex justify-center w-full min-h-[80vh] mt-6 flex-wrap content-between md:content-center">
      <div className="flex flex-row items-center justify-center gap-10 px-4 w-full h-full text-start text-white font-serif capitalize">
        <div className='flex flex-col gap-4 '>
          <span className="text-2xl sm:text-2xl md:text-4xl font-thin">Hello!</span>
          <h3 className='text-3xl sm:text-4xl md:text-6xl'>i'm <span className="text-main">franco</span>,</h3>
          <span className='before:block before:absolute before:-inset-3 before:-skew-y-1 before:bg-main relative inline-block'>
            <h2 className=' text-3xl sm:text-4xl md:text-6xl relative'>Frontend developer!</h2>
          </span>
        </div>
        <div className="flex flex-row justify-beetwen gap-4">
          <HeaderLinks direction='col' />
        </div>
      </div>
      <HeaderTag />
    </header>
  );
};

export default Header;
