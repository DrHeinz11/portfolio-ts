import { FC } from 'react'
import { Link } from "wouter";
import Hamburger from "./Hamburger/Hamburger";
import NavLinks from "./NavLinks";
import { dataNavigation } from "../../constant/dataNavigation";
import { Logo } from '../icon';

const Navbar: FC = () => {
  return (
    <nav className="flex flex-row gap-10 justify-between items-center p-4 md:p-0 md:py-6 md:px-8 border-b-2 border-black">
      <Link href={"/"}>
        <div className="cursor-pointer">
          <Logo className={'w-16 md:w-20'} />
        </div>
      </Link>
      <div>
        <nav
          className=" flex-row
      gap-8 w-full h-full items-center  text-center hidden md:flex"
        >
          {dataNavigation.map((element) => (
            <NavLinks props={element} key={element.id} />
          ))}
        </nav>
      </div>
      <div className="md:hidden">
        <Hamburger />
      </div>
    </nav>
  );
};

export default Navbar;
