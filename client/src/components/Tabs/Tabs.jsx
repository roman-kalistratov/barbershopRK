import React, { useState } from 'react';
import { images } from '../../constants';
import './tabs.scss';

const Tabs = () => {
    const [btnActive, setBtnActive] = useState(1);
    const btns = tabBtns;
    const contents = tabContents;    
    
    const tabsBtns = btns.map((btn) =>        
        <li key={btn.id} className={btnActive === btn.id ? 'tabs__btns-item current-tab' : 'tabs__btns-item'} onClick={() => (setBtnActive(btn.id))}>
           <img className='tabs__btns-img' src={btn.img} alt={btn.title}/>
            {btn.title}
        </li>
    );

    const tabscontens = contents.map((content) =>
        <li key={content.id} className={btnActive === content.id ? 'tabs__content-item tab-active' : 'tabs__content-item'}>
            <ul className="tabs__info-list">
                {
                    content.contentData.map((item,i) => {
                        return (
                            <li key={i} className="tabs__info-item">
                                <span className='tabs__info-title'>{item.title}</span>{item.price} &#8362;
                            </li>
                        )
                    })
                }
            </ul>
        </li>
    );

    return (
        <>
            <div className="tabs container">
                <ul className="tabs__btns-list">
                    {tabsBtns}
                </ul>

                <ul className="tabs__content-list">
                    {tabscontens}
                </ul>
            </div>
        </>
    )
}

export default Tabs;


const tabBtns = [
    {
        id: 1,
        title: "תספורת",
        img: images.tab1,
        active: true
    },
    {
        id: 2,
        title: "זקן",
        img: images.tab2,
        active: false
    },
    {
        id: 3,
        title: "בנוסף",
        img: images.tab3,
        active: false
    }   
];

const tabContents = [
    {
        id: 1,
        active: true,
        contentData: [
            {
                title: "תספורת גברים",
                price: "100"
            },
            {
                title: "תספורת קליפר",
                price: "80"
            },
            {
                title: "גילוח: ראש",
                price: "130"
            },
            {
                title: "ציור",
                price: "70"
            }
        ]
    },
    {
        id: 2,
        active: false,
        contentData: [
            {
                title: "תיקון זקן",
                price: "90"
            },
            {
                title: "עיצוב זקן",
                price: "110"
            },
            {
                title: "תספורת שפם",
                price: "35"
            },
            {
                title: "תספורת מעוצבת",
                price: "220"
            }
        ]
    },
    {
        id: 3,
        active: false,
        contentData: [
            {
                title: "הסוואה שיער אפור: ראש",
                price: "70"
            },
            {
                title: "הסוואה שיער אפור: זקן",
                price: "40"
            },
            {
                title: "תיקון גבות",
                price: "30"
            },
            {
                title: "עיסוי ראש",
                price: "30"
            },
            {
                title: "הסרת שיער בשעווה: אף",
                price: "35"
            }           
        ]
    }    
];
