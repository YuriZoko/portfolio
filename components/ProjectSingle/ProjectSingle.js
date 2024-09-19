import React, { Fragment } from 'react';
import { Dialog, Grid } from '@mui/material';
import Contact from './contact';
import RelatedProject from './related';
import Projects from '../../api/project';

const ProjectSingle = ({ maxWidth, open, onClose, projectId }) => {
    const project = Projects.find(proj => proj.Id === projectId);
    if (!project) return null;

    return (
        <Fragment>
            <Dialog
                open={open}
                onClose={onClose}
                className="modalWrapper quickview-dialog"
                maxWidth={maxWidth}
            >
                <Grid className="modalBody modal-body project-modal">
                    <div className="modal-close-btn">
                        <button onClick={onClose}><i className='fa fa-close'></i></button>
                    </div>
                    <div className="wpo-project-single-area">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-12 col-12">
                                    <div className="wpo-project-single-wrap">
                                        <div className="wpo-project-single-item">
                                            <div className="row align-items-center mb-5">
                                                <div className="col-lg-7">
                                                    <div className="wpo-project-single-title">
                                                        <h3>{project.title}</h3>
                                                    </div>
                                                    <p>{project.description}</p>
                                                </div>
                                                <div className="col-lg-5">
                                                    <div className="wpo-project-single-content-des-right">
                                                        <ul>
                                                            <li>Lieu :<span>{project.projectDetails.location}</span></li>
                                                            <li>Client :<span>{project.projectDetails.client}</span></li>
                                                            <li>Interlocuteur :<span>{project.projectDetails.consult}</span></li>
                                                            <li>Type :<span>{project.projectDetails.projectType}</span></li>
                                                            <li>Durée :<span>{project.projectDetails.duration}</span></li>
                                                            <li>Date de fin :<span>{project.projectDetails.completion}</span></li>
                                                            <li>Tags :<span>{project.projectDetails.share}</span></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="wpo-project-single-main-img">
                                                <div className="thumbnail">
                                                    <img src={project.pImg} alt={project.title} />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="wpo-project-single-item list-widget">
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <div className="wpo-project-single-title">
                                                        <h3>Ma Stratégie</h3>
                                                    </div>
                                                    <p>{project.strategies.description}</p>
                                                    <ul>
                                                        {project.strategies.points.map((point, index) => (
                                                            <li key={index}>{point}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="wpo-project-single-item-quote">
                                                        <p>{project.quote.text}</p>
                                                        <span>{project.quote.author}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="wpo-project-single-item">
                                            <div className="wpo-project-single-title">
                                                <h3>Mon Approche</h3>
                                            </div>
                                            <p>{project.approach}</p>
                                        </div>

                                        <div className="wpo-project-single-item list-widget">
                                            <div className="wpo-project-single-title">
                                                <h3>Compétences</h3>
                                            </div>
                                            <div className="competency-logos">
                                                {project.competencies.map((competency, index) => (
                                                    <img
                                                        key={index}
                                                        src={`images/icon/${competency.icon}`}
                                                        alt={competency.name}
                                                        className="competency-logo"
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                        
                                        <div className="wpo-project-single-item list-widget">
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <div className="wpo-project-single-title">
                                                        <h3>Objectifs</h3>
                                                    </div>
                                                    <ul>
                                                        {project.goals.map((goal, index) => (
                                                            <li key={index}>{goal}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="wpo-project-single-title">
                                                        <h3>Résultats</h3>
                                                    </div>
                                                    <ul>
                                                        {project.results.map((result, index) => (
                                                            <li key={index}>{result}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        {project.projectLink && (
                                            <div className="wpo-project-single-item-projectLink">
                                                <a class="theme-btn" href={project.projectLink} target="_blank" rel="noopener noreferrer">
                                                    Cliquez ici pour visiter le site du projet
                                                </a>
                                            </div>
                                        )}

                                        <RelatedProject />
                                        <div className="wpo-project-single-item">
                                            <div className="wpo-project-contact-area">
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
}

export default ProjectSingle;
