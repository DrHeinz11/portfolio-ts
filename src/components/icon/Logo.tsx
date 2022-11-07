import { FC } from 'react'

type Props = { className?: string }

const Logo: FC<Props> = ({ className }) => {
    return (
        <svg className={className} viewBox="0 0 29 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.2146 2.975V0H0V17H3.32026V10.0819H9.93755V7.17778H3.32026V2.975H11.2146Z" fill="#cacaca" />
            <path d="M20.2002 13.2931L15.3707 0H11.2146V17H14.4652V10.7194C14.5116 8.94861 14.4884 6.70556 14.2794 4.93472L18.5981 17H21.6629L25.9584 5.38333C25.7958 6.91806 25.7262 8.97222 25.7262 10.7194V17H29V0H25.0296L20.2002 13.2931Z" fill="#cacaca" />
            <path d="M20 14L15 -7.97623e-09L26 0L20 14Z" fill="#FE6C2D" />
        </svg>

    )
}

export default Logo