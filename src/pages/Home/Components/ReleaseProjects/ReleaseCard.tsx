import { FC } from 'react'
import { Link } from 'wouter'
import { ReleaseCardData } from '../../../../types/type'

interface WithKeyProps {
    key: React.Key;
}

const ReleaseCard: FC<ReleaseCardData & WithKeyProps> = ({ title, paragraph, route, links, imgUrl, imgAlt }) => {
    return (
        <article className="flex flex-col gap-4 items-center border-white border-2 px-2 py-4 min-h-[400px] md:min-h-[460px] justify-between ">
            <Link href={`/${route}`}>
                <figure className="flex flex-col gap-4 items-center max-w-sm cursor-pointer">
                    <h2 className="font-semibold text-2xl">{`< ${title} />`}</h2>
                    <img className='aspect-video object-cover' src={imgUrl} alt={imgAlt} />
                    <figcaption>{paragraph}</figcaption>
                </figure>
            </Link>
            <nav className='flex flex-row gap-4 text-xl font-medium'>
                {links?.deploy && <a rel='noopener noreferrer' target='_blank' href={links.deploy}>Web site demo</a>}
                {links?.repository && <a href={links.repository} rel='noopener noreferrer' target='_blank'>Repository</a>}
            </nav>
        </article>
    )
}

export default ReleaseCard