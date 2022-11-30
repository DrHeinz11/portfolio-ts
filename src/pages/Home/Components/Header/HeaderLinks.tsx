import { Github, Gmail, Linkdin, Stamp } from "../../../../components";
import { FC } from "react";

type direction = { direction: string; };

const HeaderLinks: FC<direction> = ({ direction }) => {
  return (

    <nav className={`flex flex-${direction} gap-8 items-center relative transition-colors`}>
      <a
        className="p-2 hover:bg-main "
        href="https://github.com/Franco-Martin11"
        rel="noopener noreferrer"
        target="_blank"
      >
        <Github />
      </a>
      <a
        className="p-2 hover:bg-main "
        href="https://www.linkedin.com/in/franco-martin-148206243/"
        rel="noopener noreferrer"
        target="_blank"
      >
        <Linkdin />
      </a>
      <a
        className="p-2 hover:bg-main"
        href="mailto:main.francomartin@gmail.com"
        rel="noopener noreferrer"
        target="_blank"
      >
        <Gmail />
      </a>
    </nav>
  );
};

export default HeaderLinks;
