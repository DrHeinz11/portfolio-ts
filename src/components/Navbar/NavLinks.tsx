import { Link } from "wouter";
const NavLinks = ({ props: { navRoute, navText } }) => {
  return (
    <Link href={navRoute}>
      <a
        className={`hover:text-main font-serif font-light text-4xl md:text-2xl color-lightGray ${
          navText !== "Contact"
            ? "text-lightGray focus:text-main"
            : "text-main focus:text-orange-300"
        } uppercase`}
      >
        {navText}_
      </a>
    </Link>
  );
};

export default NavLinks;
