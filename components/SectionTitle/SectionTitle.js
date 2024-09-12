import React from 'react'

const SectionTitle = (props) => {
    return (
        <div className="row justify-content-center">
            <div className="col-lg-6 col-12">
                <div className="wpo-section-title">
                    <h2>{props.Title}</h2>
                    <p>Je propose une gamme de services, allant du développement de sites web modernes et réactifs à la création de jeux vidéo immersifs. Que ce soit pour la conception d'applications web, le développement de jeux sur mesure ou l'optimisation de performances, je mets mes compétences à votre service pour donner vie à vos projets numériques.</p>
                </div>
            </div>
        </div>
    )
}

export default SectionTitle;