import React from 'react'
import Link from 'next/link'
import SectionTitle from '../SectionTitle/SectionTitle'

const Expriences = [
    {
        date: '2014 - 2019',
        logo: 'images/work/gmod.png',
        position: 'Developpeur LUA',
        companyName: 'Florian GIRARD, France',
        workFrom: '(Remote)',
        link: 'https://www.gmodstore.com/',
    },
    {
        date: '2019 - 2022',
        logo: 'images/work/tp.png',
        position: 'Developpeur SQF',
        companyName: 'The-Programmer, France',
        workFrom: '(Remote)',
        link: 'https://www.the-programmer.com/',
    },
    {
        date: '2022 - Maintenant',
        logo: 'images/work/tp.png',
        position: 'Leader',
        companyName: 'The-Programmer, France',
        workFrom: '(Remote)',
        link: 'https://www.the-programmer.com/',
    },
    {
        date: '2022 - Maintenant',
        logo: 'images/work/zokogames.png',
        position: 'Freelance',
        companyName: 'Florian GIRARD, France',
        workFrom: '(Remote)',
        link: 'https://florian-girard.dev/',
    },

]


const ExprienceSec = (props) => {
    return (
        <div className="wpo-work-area section-padding">
            <div className="container">
            <SectionTitle 
                Title={'Mes Expériences Professionnelles'} 
                Description={'Au fil de mes années de pratique en tant que développeur web et créateur de jeux vidéo, j\'ai eu l\'opportunité de travailler sur une variété de projets. De la conception d\'applications web sur mesure à l\'élaboration de systèmes complexes de gameplay, chaque expérience m\'a permis d\'acquérir des compétences précieuses et de perfectionner mon savoir-faire technique. Mon parcours est marqué par la volonté constante de repousser les limites du développement numérique pour offrir des solutions innovantes et performantes.'} 
            />
                <div className="wpo-work-wrap">
                    {Expriences.map((exprience, exp) => (
                        <div className="wpo-work-item" key={exp}>
                            <ul>
                                <li className="date">{exprience.date}</li>
                                <li className="logo"><img src={exprience.logo} alt="" /></li>
                                <li className="position">{exprience.position} <span>{exprience.companyName} <span>{exprience.workFrom}</span></span></li>
                                <li className="link">
                                    <Link href={exprience.link}>
                                        Visiter le site
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
            <div className="shape-wk">
                <svg width="1500" height="1500" viewBox="0 0 1500 1500" fill="none">
                    <g opacity="0.45" filter="url(#filter0_f_39_4214)">
                        <circle cx="750" cy="750" r="200" />
                    </g>
                    <defs>
                        <filter id="filter0_f_39_4214" x="0" y="0" width="1500" height="1500"
                            filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="275" result="effect1_foregroundBlur_39_4212" />
                        </filter>
                    </defs>
                </svg>
            </div>
        </div>
    )
}

export default ExprienceSec;