import React from "react";
import HamburgerClose from "./HamburguerClose";
import NavLinks from "../NavLinks";

export const datas = [
  { navText: "About Me", navRoute: "/about-me", id: 1 },
  { navText: "Project", navRoute: "/project/all", id: 2 },
  { navText: "Contact", navRoute: "/contact", id: 3 },
];
const HamburgerOption = () => {
  return (
    <div className="flex flex-row gap-4 h-screen absolute top-0 left-0 right-0 backdrop-blur-lg ">
      <HamburgerClose className="absolute right-4 top-4" />
      <nav className="flex flex-col py-14 w-full h-full items-center gap-4 text-center">
        {datas.map((element) => (
          <NavLinks props={element} key={element.id} />
        ))}
      </nav>
    </div>
  );
};

export default HamburgerOption;
