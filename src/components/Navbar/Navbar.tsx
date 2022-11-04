import Icon from "../../assets/Svg/LogoBold.svg";
import { Link } from "wouter";
import { Hamburger } from "./Hamburger";
import { datas } from "./Hamburger/HamburguerOption";
import NavLinks from "./NavLinks";

const Navbar = () => {
  return (
    <nav className="flex flex-row gap-4 justify-between items-center p-4 md:p-0 md:py-4 md:px-2">
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
          {datas.map((element) => (
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
