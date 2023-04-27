import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { AnimateItem, AOSanimation } from '../../components';
import { showSidebar } from '../../reducers/sidebarReducer';
import { barbers } from '../../actions/user';
import { images } from '../../constants';
import { API_URL } from '../../config';
import './barbers.scss';

const Barbers = () => {
    const dispatch = useDispatch();
    const [barbersList, setBarbersList] = useState([]);

    useEffect(() => {
        dispatch(barbers()).then(result => setBarbersList(result))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <section className='barbers' id='barbers'>
            <AnimateItem url={images.razor} side={"left"} />
            <AOSanimation animation="fade-up" duration="1000">
                <h2 className="barbers__title">- ברברים שלנו -</h2>
            </AOSanimation>
            <AOSanimation animation="fade-up" duration="1500">
                <p className="barbers__descr">
                    עובדים קשה, נשארים צנועים ומספקים לכולם <br />את השירותים הטובים ביותר שאנחנו יכולים.
                </p>
            </AOSanimation>

            <div className="barbers__wrapper container">
                {
                    barbersList && barbersList.map(barber => (
                        <div className="barbers__avatar" >
                            <div className="barbers__front">
                                <img className="barbers__img" src={barber.avatar ? API_URL + barber.avatar : images.avatar} alt={barber.name} />
                              
                                <div className="inner">
                                    <p className='barbers__name'>{barber.name}</p>
                                </div>
                            </div>
                            <div className="barbers__back">
                                <img className="barbers__img" src={barber.avatar ? API_URL + barber.avatar : images.avatar} alt={barber.name} />
                             
                                <div className="inner">
                                    <span className='barbers__btn' onClick={() => dispatch(showSidebar('booking'))}>הזמינו עכשיו</span>
                                </div>
                            </div>
                        </div>
                    ))
                }
             


            </div>
        </section>
    )
}

export default Barbers;
