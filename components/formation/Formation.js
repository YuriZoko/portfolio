import React from 'react'
import Link from 'next/link'
import SectionTitle from '../SectionTitle/SectionTitle'

const Formations = [
    {
        date: '2023 - 2024',
        logo: 'images/formation/openclassrooms.png',
        degree: 'Certification Développeur Web',
        institution: 'OpenClassRooms',
        location: '(A distance)',
        link: 'https://www.openclassrooms.com/',
    },
    {
        date: '2023',
        logo: 'images/formation/udemy.png',
        degree: 'Créer une application mobile avec Flutter',
        institution: 'Udemy',
        location: '(A distance)',
        link: 'https://www.udemy.com/',
    },
    {
        date: '2022',
        logo: 'images/formation/udemy.png',
        degree: 'Maitriser les bases de la modélisation 3D et des animations avec Blender',
        institution: 'Udemy',
        location: '(A distance)',
        link: 'https://www.udemy.com/',
    },
    {
        date: '2020',
        logo: 'images/formation/tuto.png',
        degree: 'Développer son premier jeux vidéo avec Unreal Engine',
        institution: 'Tuto.com',
        location: '(A distance)',
        link: 'https://fr.tuto.com/',
    }
]

const FormationSec = (props) => {
    return (
        <div className="wpo-work-area section-padding">
            <div className="container">
            <SectionTitle 
                Title={'Mes Formations'} 
                Description={'Tout au long de mon parcours, j\'ai suivi plusieurs formations qui m\'ont permis d\'approfondir mes connaissances et compétences en développement web et jeux vidéo. Voici un aperçu de mes diplômes et certifications.'} 
            />
                <div className="wpo-work-wrap">
                    {Formations.map((formation, index) => (
                        <div className="wpo-work-item" key={index}>
                            <ul>
                                <li className="date">{formation.date}</li>
                                <li className="logo"><img src={formation.logo} alt="" /></li>
                                <li className="degree">{formation.degree} <span>{formation.institution} <span>{formation.location}</span></span></li>
                                <li className="link">
                                    <Link href={formation.link}>
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

export default FormationSec;
