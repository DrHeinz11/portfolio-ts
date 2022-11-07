import ScrollToExplore from "../../../../components/icon/ScrollToExplore";
import HeaderLinks from "./HeaderLinks";
import HeaderTag from "./HeaderTag";

const Header = () => {
  return (
    <header className="flex justify-center max-w-[550px] md:max-w-none w-full min-h-screen mt-6 gap-4 flex-wrap">
      <div className="flex flex-row items-center gap-1 px-4 text-4xl w-full h-full text-start text-white font-serif capitalize">
        <div className='flex flex-col gap-2'>
          <span className="text-xl font-thin">Hello!</span>
          <h3 className='md:text-[6rem]'>i'm <span className="text-main">franc</span>,</h3>
          <h1 className='md:text-[8rem]'>Frontend developer!</h1>
        </div>
        <HeaderLinks />
      </div>
      <HeaderTag />
    </header>
  );
};

export default Header;
