
import { AOSanimation } from '../../components';
import './about.scss';
const About = () => {
  return (
    <section className='about' id='about'>
      <div className="about__img"></div>
      <div className="about__inner">
        <div className="about__info">
          <AOSanimation animation="fade-up" duration="1000">
            <h3 className="about__subtitle " >- היכרו -</h3>
          </AOSanimation>

          <AOSanimation animation="fade-up" duration="1500">
            <h2 className="about__title" >The Barber Shop</h2>
          </AOSanimation>

          <p className="about__descr">
            אנחנו לא רק מספרה לגברים ולא רק מועדון לאליטה, אנחנו בדיוק המקום שבו הסגנון החדש שלך והחדש שלך גר! רק תאמינו לנו, אנחנו לא זורקים מילים לאוויר. אנו מתמחים בתספורות מסוגננות לגברים ובגילוח סכין גילוח ישר, יתרה מכך, אנו בטוחים ב-100% שאנו עושים זאת טוב יותר מאחרים.
            ברברים שלנו עובדים קשה כדי לגרום לך להרגיש בנוח ולשמח תמיד כשאתה רואה את ההשתקפות שלך במראה. אנחנו נדאג גם לילד שלכם, שיסתפר עליו תמיד.          </p>
        </div>
      </div>
    </section>
  )
}

export default About;
