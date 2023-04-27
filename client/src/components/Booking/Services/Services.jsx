import { setService } from '../../../reducers/appointmentReducer';
import { useDispatch } from 'react-redux';
import { images } from '../../../constants';
import './services.scss'

const Services = ({ service, setIsActiveCategory, setTitle }) => {
    const dispatch = useDispatch()

    const handleService = (title) => {
        dispatch(setService(title));
        setIsActiveCategory('');
        setTitle("קביעת מועד");
    }

    return (
        <ul className="booking__list active" >

            {services.map((item) =>
                <li key={item.id}
                    className={`service ${service === item.title && "active"}`}
                    id={item.id}>
                    <img className='service__img' src={item.img} alt={item.title} />
                    <div className="service__wrapper">
                        <h2 className="service__title">{item.title}</h2>
                        <h3 className='service__descr'>{item.descr}</h3>
                        <button className='service__btn' type='button' onClick={() => handleService(item.title)}>
                            +
                        </button>
                        <span className='service__price'>{item.price}&#8362;</span>
                    </div>
                </li>
            )}
        </ul>
    )
}

export default Services

const services = [
    {
        id: 1,
        img: images.men_haircut,
        title: "תספורת גברים",
        descr: "תספורת בכל מורכבות. העבודה נעשית גם במכונה וגם במספריים. תספורת גברים כוללת שמפו (לפני ואחרי התספורת). כלול גם קצה ראש ישר של סכין גילוח. לאחר התספורת, העיצוב נעשה (לא חובה)",
        price: 100
    },
    {
        id: 2,
        img: images.haircut_machine,
        title: "תספורת קליפר",
        descr: "השירות כולל שמפו (לפני ואחרי התספורת), תספורת רק במכונה וכן הסרת שיער ברקות ובחלק האחורי של הראש (לא חובה)",
        price: 80
    },
    {
        id: 3,
        img: images.head_shaving,
        title: "גילוח: ראש",
        descr: "השירות כולל גילוח ראש בלבד (ללא זקן). אידוי מקדים חובה של עור הפנים במספר שלבים וקירור העור בסיום כלול.בסוף מורחים תחליב או קרם אפטר שייב.",
        price: 130
    },
    {
        id: 4,
        img: images.drawing,
        title: "ציור",
        descr: "כיום, דפוסים ודפוסים מגולחים שונים על הראש הפכו פופולריים למדי. תספורות גברים עם דוגמה יכולות להתבצע על כל הראש, אבל רוב הגברים מעדיפים להגביל את עצמם לדוגמא ברקות או בחלק האחורי של הראש.",
        price: 70
    },
    {
        id: 5,
        img: images.beard,
        title: "תיקון זקן",
        descr: "השירות כולל עיצוב (באמצעות מכונה או מספריים) והשחזה בסכין גילוח ישר. השירות כולל עבודה עם כל מסת הזקן, עם השפם. אם תרצה, אתה יכול לעשות דוגמנות עם מכונת גילוח (סכין גילוח חשמלי). בסוף כל ההליך, מורחים על הזקן מזור או שמן להזנת הזקן ולחותו.",
        price: 90
    },
    {
        id: 6,
        img: images.beard_painting,
        title: "עיצוב זקן",
        descr: "זהו שירות סלון מיוחד המאפשר להחזיר תוך מספר דקות את צבע השיער הטבעי והאחיד בעזרת צבע מיוחד.",
        price: 110
    },
    {
        id: 7,
        img: images.hair_camouflage,
        title: "הסוואה שיער אפור: ראש",
        descr: "זהו שירות סלון מיוחד המיועד לגברים המאפשר לך להפחית שיער אפור עם צבע תוך 5-10 דקות.",
        price: 70
    },
    {
        id: 8,
        img: images.beard_camouflage,
        title: "הסוואה שיער אפור: זקן",
        descr: "הסוואה של שיער אפור של זקן או ראש זה כמו למרוח צבע על השיער עם מברשת מיוחדת. כמה דקות של מריחה, המתנה לפעולה בין חמש לעשר דקות, תלוי באפקט הרצוי, שטיפת השיער במים חמים. התוצאה המתקבלת נמשכת כשבועיים עד שלושה.",
        price: 40
    }
]
