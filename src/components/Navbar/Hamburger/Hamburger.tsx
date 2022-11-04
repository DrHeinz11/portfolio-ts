import React, { useState } from "react";
import HamburgerOpen from "./HamburguesOpen";
import HamburgerOption from './HamburguerOption'

const Hamburger = () => {
  const [icon, setIcon] = useState(false);
  const handleSetIcon = () => setIcon(!icon);

  return (
    <div onClick={handleSetIcon}>
      {icon ? <HamburgerOpen /> : <HamburgerOption />}
    </div>
  );
};

export default Hamburger;
