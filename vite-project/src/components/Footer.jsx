
import '../assets/Footer.css';
import { Link } from 'react-router-dom'; 

const Footer = () => {
    return (

            <footer className="bg-dark text-light">
                <div className="container">
                    <div className="row justify content-evenly">
                        <div className="col-md-3 pt-4 ps-4">
                            <h4>Aymeric Lopez</h4>
                            <ul className="linkFooter socialIcon list-unstyled">
                                <li><a target="_blank" 
                                href="https://www.google.com/maps/place/H%C3%B4tel+de+Ville+de+La+Rochelle/@46.1597217,-1.1519979,18.75z/data=!4m15!1m8!3m7!1s0x480153af46723d7f:0xf8c5b8d2fa70ec3d!2s3+Pl.+de+l'H%C3%B4tel+de+ville,+17000+La+Rochelle!3b1!8m2!3d46.1598124!4d-1.1519234!16s%2Fg%2F11fkkld6y6!3m5!1s0x480153af50747dcb:0x2e30dde28f881ba7!8m2!3d46.159678!4d-1.151414!16s%2Fg%2F1238mb3q?hl=fr&entry=ttu&g_ep=EgoyMDI1MTIwMS4wIKXMDSoASAFQAw%3D%3D" 
                                className="text-decoration-none text-white">3 Place de l'Hôtel de ville
                                </a></li>
                                <li><a target="_blank" 
                                href="https://www.google.com/maps/place/H%C3%B4tel+de+Ville+de+La+Rochelle/@46.1597217,-1.1519979,18.75z/data=!4m15!1m8!3m7!1s0x480153af46723d7f:0xf8c5b8d2fa70ec3d!2s3+Pl.+de+l'H%C3%B4tel+de+ville,+17000+La+Rochelle!3b1!8m2!3d46.1598124!4d-1.1519234!16s%2Fg%2F11fkkld6y6!3m5!1s0x480153af50747dcb:0x2e30dde28f881ba7!8m2!3d46.159678!4d-1.151414!16s%2Fg%2F1238mb3q?hl=fr&entry=ttu&g_ep=EgoyMDI1MTIwMS4wIKXMDSoASAFQAw%3D%3D" 
                                className="text-decoration-none text-white">17000 La Rochelle, France
                                </a></li>
                                <li><a target="_blank" 
                                href="mailto:john.doe@gmail.com" 
                                className="text-decoration-none text-white">05 46 51 51 51
                                </a></li>
                                <li><a target="_blank" 
                                href="tel:1020304050" 
                                className="text-decoration-none text-white">aymericlopez.92@gmail.com</a></li>
                            </ul>
                            <div className="col pt-2">
                                <a href="https://github.com/" className="text-secondary"><i className="socialIcon fa-brands fa-github fs-2"></i></a>
                                <a href="https://x.com/" className="text-secondary"><i className="socialIcon  mx-1 fa-brands fa-x-twitter fs-2 ms-2"></i></a>
                                <a href="https://fr.linkedin.com/" className="text-secondary"><i className="socialIcon  mx-1 fa-brands fa-linkedin fs-2 ms-2"></i></a>
                            </div>
                        </div>
                        <div className="col-md-3 pt-4 ps-4">
                            <h4>Liens utiles</h4>
                            <ul className="linkFooter socialIcon list-unstyled">
                                <li><Link to="/" className="text-decoration-none text-white">Acceuil</Link></li>
                                <li><Link to="/Services" className="text-decoration-none text-white">Services</Link></li>
                                <li><Link to="/Portfolio" className="text-decoration-none text-white">Portfolio</Link></li>
                                <li><Link to="/Contact" className="text-decoration-none text-white">Me contacter</Link></li>
                                <li><Link to="/Mentions" className="text-decoration-none text-white">Mentions légales</Link></li>
                            </ul>
                        </div>
                        <div className="col-md-3 py-4 ps-4">
                            <h4>Mes dernières réalisations</h4>
                            <ul className="linkFooter socialIcon list-unstyled">
                                <li><a href="#" className="text-decoration-none text-white">Fresh Food</a></li>
                                <li><a href="#" className="text-decoration-none text-white">Restaurant Akira</a></li>
                                <li><a href="#" className="text-decoration-none text-white">Espace bien-être</a></li>
                                <li><a href="#" className="text-decoration-none text-white">SEO</a></li>
                                <li><a href="#" className="text-decoration-none text-white">Création d'une API</a></li>
                                <li><a href="#" className="text-decoration-none text-white">Maquette d'un site</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        
    );
}

export default Footer;