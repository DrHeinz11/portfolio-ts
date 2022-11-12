import { Link } from "wouter";
import { FC } from 'react'
type navData = { props: { navRoute: string, navText: string } }
const NavLinks: FC<navData> = ({ props: { navRoute, navText } }) => {
  return (
    <Link href={navRoute}>
      <a
        className='text-xl border-b-[1px] border-transparent hover:border-main '
      >
        {navText}
      </a>
    </Link>
  );
};

export default NavLinks;
