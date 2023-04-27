
import { AnimateItem, Divider, Tabs, AOSanimation } from '../../components';
import { images } from '../../constants';
import './servicesBlock.scss';


const ServicesBlock = () => {
    return (
        <section className='services' id='services'>
           
            <AnimateItem url={images.brush} />
            <AOSanimation animation="fade-up" duration="1000">
                <h2 className="services__title">- מחירון שלנו -</h2>
            </AOSanimation>
            <AOSanimation animation="fade-up" duration="1500">
                <p className="services__descr">
                    המחירים שלנו מיועדים לאניני טעם אמיתיים של נוחות, איכות וקסם גברי אמיתי. בעבודתנו אנו משתמשים רק בקוסמטיקה מקצועית עבור לקוחותינו.
                </p>
            </AOSanimation>
            <Divider />
            <Tabs />
        </section>

    )
}

export default ServicesBlock;

