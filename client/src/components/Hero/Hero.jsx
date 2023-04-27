import React from 'react';
import { Button } from '../../components';
import './hero.scss';

const Hero = () => {
  return (
    <section className='hero' id='home'>
      <div className="hero__bg"></div>
      <div className="hero__wrapper container">
        <h3 className='hero__subtitle'>- סגנון שיער קלאסי & גילוח -</h3>
        <h1 className='hero__title'>סגנונות השיער שלנו<br />משפר את החיוך שלך.</h1>
        <p className="hero__descr">המספרה שלנו היא הטריטוריה שנוצרה אך ורק עבור גברים שמעריכים <br />  איכות פרימיום, זמן ומראה ללא רבב.</p>
        <div className='hero__btn'><Button text="קביעת תור" /></div>
      </div>
    </section>
  )
}

export default Hero
