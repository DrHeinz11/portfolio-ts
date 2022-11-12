import React, { useState, FC } from "react";
import HamburgerOpen from "./HamburguesOpen";
import HamburgerOption from './HamburguerOption'

const Hamburger: FC = () => {
  const [icon, setIcon] = useState(false);
  const handleSetIcon = () =>
    setIcon(!icon)


  return (
    <div onClick={handleSetIcon}>
      {icon ? <HamburgerOption /> : <HamburgerOpen />}
    </div>
  );
};

export default Hamburger;
