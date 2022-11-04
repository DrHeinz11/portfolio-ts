import { Link } from "wouter";

const CardProjects = ({
  props: {
    heading,
    title,
    paragraph,
    imageurl,
    altimage,
    route,
    repository,
    _id,
  },
}) => {
  const ImageUrl = imageurl.asset._ref;

  return (
    <div
      className=" flex flex-col gap-1 px-4 
    py-8 border-4 border-main  shadow-slate-50 shadow-md hover:shadow-lg hover:shadow-slate-300 hover:border-main"
    >
      <figure className="cursor-pointer flex flex-col gap-2">
        <Link href={`${route}/${_id}`}>
          <img className="aspect-video" src={ImageUrl} alt={altimage} />
        </Link>
        <Link href={`${route}/#${heading.split(" ").join("-")}`}>
          <figcaption className="text-center capitalize text-slate-700  text-lg font-medium font-serif">
            {`${heading}_`}
          </figcaption>
        </Link>
      </figure>
      <div className="flex flex-col gap-2 text-center font-serif">
        <h4 className="capitalize font-semibold text-xl font-serif">{title}</h4>
        <p className="text-gray-800 font-serif">{altimage}</p>
        <div
          className="flex flex-row gap-4
        justify-center align-middle"
        >
          <Link href={`${route}/${_id}`}>
            <a className="text-xl font-normal border-b-transparent hover:border-b-orange-600 border-b-2 ">
              Details_
            </a>
          </Link>
          <Link href={`${route}/${_id}`}>
            <a className="text-xl font-normal border-b-transparent hover:border-b-orange-600 border-b-2 ">
              Web site_
            </a>
          </Link>
          {/* <a
            href={repository}
            className="text-xl font-normal border-b-transparent hover:border-b-orange-600 border-b-2"
            rel="noreferrer noopener"
            target="_blank"
          >
            Repository
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default CardProjects;
