import { FC } from "react";
import HamburgerClose from "./HamburguerClose";
import NavLinks from "../NavLinks";
import { dataNavigation } from "../../../constant/dataNavigation";


const HamburgerOption: FC = () => {
  return (
    <div className="flex flex-row gap-4 h-screen absolute top-0 left-0 right-0 backdrop-blur-lg ">
      <HamburgerClose  />
      <nav className="flex flex-col py-14 w-full h-full items-center gap-4 text-center">
        {dataNavigation.map((element) => (
          <NavLinks props={element} key={element.id} />
        ))}
      </nav>
    </div>
  );
};

export default HamburgerOption;
