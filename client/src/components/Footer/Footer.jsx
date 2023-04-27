import './footer.scss';
import { images } from '../../constants';

export const Footer = () => {
    return ( 
        <section className='footer'>  
            <div className="footer__copyright">
                <a className='footer__copyright-link' href="# ">
                    <img className='footer__copyright-logo' src={images.logo_footer} alt="logo-rk" />
                </a>
                Designed & Built by
            </div>
        </section >
    )
}

export default Footer;