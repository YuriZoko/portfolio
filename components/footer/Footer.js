import React from 'react'
import { Link} from 'react-scroll'


const SubmitHandler = (e) => {
    e.preventDefault()
}

const Footer = (props) => {
    return (
        <footer className="wpo-site-footer">
            <div className="upper-footer">
                <div className="container">
                    <div className="row">
                        <div className="col col-lg-4 col-md-6 col-12">
                            <div className="widget about-widget">
                                <div className="logo widget-title">
                                    <Link className="site-logo" to="/"><img
                                        src="images/logo.webp" alt=""/>Florian GIRARD</Link>
                                </div>
                                <p>Passionné par l'innovation numérique et la création d'expériences interactives uniques. Explorez mes projets et découvrez mon parcours à travers mes réalisations.</p>
                                <div className="social-icons">
                                    <ul>
                                        <li><Link to="/"><i className="ti-linkedin"></i></Link></li>
                                        <li><Link to="/"><i className="ti-github"></i></Link></li>
                                        <li><Link to="/"><i className="ti-youtube"></i></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col col-lg-2 col-md-6 col-12">
                            <div className="widget link-widget">
                                <div className="widget-title">
                                    <h3>Navigation</h3>
                                </div>
                                <ul>
                                    <li><Link to="about" spy={true} smooth={true}  duration={500}>A propos</Link></li>
                                    <li><Link to="contact" spy={true} smooth={true}  duration={500}>Contact</Link></li>
                                    <li><Link to="portfolio" spy={true} smooth={true}  duration={500}>Projets Récents</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col col-lg-3 col-md-6 col-12">
                            <div className="widget link-widget service-link-widget">
                                <div className="widget-title">
                                    <h3>Mes Services</h3>
                                </div>
                                <ul>
                                    <li><Link to="service" spy={true} smooth={true}  duration={500}>Développement Web</Link></li>
                                    <li><Link to="service" spy={true} smooth={true}  duration={500}>Jeux Vidéo</Link></li>
                                    <li><Link to="service" spy={true} smooth={true}  duration={500}>Développement Mobile</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col col-lg-3 col-md-6 col-12">
                            <div className="widget newsletter-widget">
                                <div className="widget-title">
                                    <h3>Partenaire</h3>
                                </div>
                                <div className="partner-item">
                                    <a href="https://www.the-programmer.com/" target="_blank" rel="noopener noreferrer">
                                        <img src="images/work/tp.png" alt="The-Programmer Logo" style={{ width: '100px' }} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="shadow-shape">
                    <svg width="1319" height="1567" viewBox="0 0 1319 1567" fill="none">
                        <g filter="url(#filter0_f_39_3833)">
                            <circle cx="803" cy="803" r="303" fill="#59C378" fillOpacity="0.5" />
                        </g>
                        <defs>
                            <filter id="filter0_f_39_3833" x="0" y="0" width="1606" height="1606"
                                filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                <feGaussianBlur stdDeviation="250" result="effect1_foregroundBlur_39_3832" />
                            </filter>
                        </defs>
                    </svg>
                </div>
            </div>
            <div className="lower-footer">
                <div className="container">
                    <div className="row">
                        <div className="separator"></div>
                        <p className="copyright">Copyright &copy; 2024 Florian GIRARD. Tous droits réservés.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;