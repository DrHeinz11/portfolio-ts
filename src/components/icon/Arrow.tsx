import React from 'react'

type Props = {}

const Arrow = (props: Props) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="88" height="88" viewBox="0 0 88 88">
            <g id="Arroy-grey" {...props}>
                <path id="bx-down-arrow-alt" className="cls-1" fill='#afafaf' strokeWidth='2px' d="M43.293,3.873,39.287-.133,27.126,12.029V-22.4L21.46-15.127V12.029L9.3-.133,5.293,3.873l19,19Z" transform="translate(2350.207 1658.903)" />
                <g id="Elipse_1" data-name="Elipse 1" fill='transparent' stroke='#afafaf' className="cls-2" strokeWidth='2px' transform="translate(2330 1615)">
                    <circle className="cls-3" cx="44" cy="44" r="44" />
                    <circle className="cls-4" stroke='none' fill='transparent' cx="44" cy="44" r="43" />
                </g>
            </g>
        </svg>
    )
}

export default Arrow