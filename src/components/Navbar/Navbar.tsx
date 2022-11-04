import Icon from "../../assets/Svg/LogoBold.svg";
import { FC } from 'react'
import { Link } from "wouter";
import Hamburger from "./Hamburger/Hamburger";
import NavLinks from "./NavLinks";
import { dataNavigation } from "../../constant/dataNavigation";

const Navbar: FC = () => {
  return (
    <nav className="flex flex-row gap-4 justify-between items-center p-1 py-2 md:p-0 md:py-4 md:px-2">
      <Link href="/">
        <img
          src={Icon}
          alt="FavIcon-logo"
          className="w-32 lg:w-40 hover:opacity-80 cursor-pointer "
        />
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
        <div className="md:hidden">
          <Hamburger />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
