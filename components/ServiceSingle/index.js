import React, { Fragment } from 'react';
import { Dialog, Grid } from '@mui/material';
import Contact from './contact';
import Services from '../../api/service';

const ServiceSingle = ({ maxWidth, open, onClose, serviceId }) => {
    const selectedService = Services.find(service => service.Id === serviceId);

    if (!selectedService) {
        return null;
    }

    const { sTitle, description, des2, des3, ssImg1, ssImg2, icon } = selectedService;

    return (
        <Fragment>
            <Dialog
                open={open}
                onClose={onClose}
                className="modalWrapper quickview-dialog"
                maxWidth={maxWidth}
            >
                <Grid className="modalBody modal-body">
                    <div className="modal-close-btn">
                        <button onClick={onClose}><i className='fa fa-close'></i></button>
                    </div>
                    <div className="wpo-service-single-area">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 col-12">
                                    <div className="wpo-service-single-wrap">
                                        <div className="wpo-service-single-item">
                                            <div className="wpo-service-single-main-img">
                                                <img src={selectedService.sImgS} alt={sTitle} />
                                            </div>
                                            <div className="wpo-service-single-title">
                                                <h3>{sTitle}</h3>
                                            </div>
                                            <p>{description}</p>
                                            <p>{des2}</p>
                                            <p>{des3}</p>
                                            <div className="row mt-4">
                                                <div className="col-md-6 col-sm-6 col-12">
                                                    <div className="wpo-p-details-img">
                                                        <img src={ssImg1} alt={sTitle} />
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-sm-6 col-12">
                                                    <div className="wpo-p-details-img">
                                                        <img src={ssImg2} alt={sTitle} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="wpo-service-single-item list-widget">
                                            <div className="wpo-service-single-title">
                                                <h3>Mes Compétences</h3>
                                            </div>
                                            <ul>
                                                {selectedService.skills && selectedService.skills.map((skill, index) => (
                                                    <li key={index}>{skill}</li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="wpo-service-single-item">
                                            <div className="wpo-service-single-title">
                                                <h3>Mon approche</h3>
                                            </div>
                                            <p>
                                                Je mets un point d'honneur à adopter une approche personnalisée pour chaque projet, 
                                                en veillant à ce que chaque solution soit parfaitement adaptée aux besoins spécifiques du client.
                                            </p>
                                        </div>

                                        <div className="wpo-service-single-item list-widget">
                                            <div className="wpo-service-single-title">
                                                <h3>Mon processus de travail</h3>
                                            </div>
                                            <ul>
                                                <li>Analyse et planification : Compréhension des besoins et définition des objectifs.</li>
                                                <li>Conception et prototypage : Création d'interfaces et validation avant développement.</li>
                                                <li>Développement : Mise en place des fonctionnalités avec un code propre et optimisé.</li>
                                                <li>Tests et optimisation : Vérification et ajustements pour garantir la qualité du produit.</li>
                                                <li>Déploiement et maintenance : Lancement du projet et suivi régulier pour assurer la stabilité.</li>
                                            </ul>
                                        </div>

                                        <div className="wpo-service-single-item">
                                            <div className="wpo-service-single-title">
                                                <h3>Services liés</h3>
                                            </div>
                                            <div className="wpo-service-area">
                                                <div className="row align-items-center">
                                                    {Services.slice(0, 3).map((service, srvIndex) => (
                                                        <div className="col-lg-4 col-md-6 col-12" key={srvIndex}>
                                                            <div className="wpo-service-item">
                                                                <i className={`fi ${service.icon}`}></i>
                                                                <h2>{service.sTitle}</h2>
                                                                <p>{service.description}</p>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="wpo-service-single-item">
                                            <div className="wpo-service-contact-area">
                                                <div className="wpo-contact-title">
                                                    <h2>Vous avez un projet en tête ? Discutons-en</h2>
                                                    <p>Contactez-moi pour savoir comment je peux vous aider dans votre projet.</p>
                                                </div>
                                                <div className="wpo-contact-form-area">
                                                    <Contact />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Grid>
            </Dialog>
        </Fragment>
    );
};

export default ServiceSingle;