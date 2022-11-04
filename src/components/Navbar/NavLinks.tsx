import { Link } from "wouter";
import { FC } from 'react'
type navData = { props: { navRoute: string, navText: string } }
const NavLinks: FC<navData> = ({ props: { navRoute, navText } }) => {
  return (
    <Link href={navRoute}>
      <a
        className={`hover:text-main font-serif font-light text-4xl md:text-2xl color-lightGray ${navText !== "Contact"
          ? "text-white focus:text-main"
          : "text-main focus:text-orange-300"
          } uppercase`}
      >
        {navText}_
      </a>
    </Link>
  );
};

export default NavLinks;
