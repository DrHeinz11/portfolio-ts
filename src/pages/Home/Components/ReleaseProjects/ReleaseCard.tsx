import { FC } from 'react'
import { Link } from 'wouter'
import { ReleaseCardData, WithKeyProps } from '../../../../types/type'
import HandleScrollTop from '../../../../utils/HandleScrollTop';

const ReleaseCard: FC<ReleaseCardData & WithKeyProps> = ({ title, paragraph, route, links, imgUrl, imgAlt, id }) => {
    return (
        <article className="flex flex-col gap-4 items-center border-white border-2 px-2 py-4 min-h-[400px] md:min-h-[460px] justify-between ">
            <Link onClick={HandleScrollTop} href={`${route}/${id}`}>
                <figure className="flex flex-col gap-4 items-center max-w-sm cursor-pointer">
                    <h2 className="font-semibold text-2xl capitalize">{title}</h2>
                    <img className='aspect-video object-contain' src={imgUrl} alt={imgAlt} />
                    <figcaption className="text-md text-gray-300 font-medium">{paragraph}</figcaption>
                </figure>
            </Link>
            <nav className='flex flex-row gap-4 text-xl font-medium'>
                {links?.deploy && <a className='ease-out duration-500 hover:text-main hover:underline p-2 border-2 hover:border-x-main' rel='noopener noreferrer' target='_blank' href={links.deploy}>Web site demo</a>}
                {links?.repository && <a className='ease-out duration-500 hover:text-main hover:underline p-2 border-2 hover:border-x-main' href={links.repository} rel='noopener noreferrer' target='_blank'>Repository</a>}
            </nav>
        </article>
    )
}

export default ReleaseCard