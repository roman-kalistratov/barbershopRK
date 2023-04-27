import React from 'react';
import { useState, useEffect } from 'react';
import { Button, Divider } from '../../components';
import { FaBars } from "react-icons/fa";
import { MdClose } from "react-icons/md";


import './navbar.scss';

const Navbar = () => {
    const menu = menuLinks;
    const [activeNav, setActiveNav] = useState("#home");
    const [menuShow, setMenuShow] = useState(false);
    const [lastScrollTop, setLastScrollTop] = useState(0);


    const handleClick = (e) => {
        setActiveNav(e.target.ref);
        setMenuShow(false);
    }

    // Sticky Menu Area
    useEffect(() => {
        window.addEventListener("scroll", isSticky);
        return () => {
            window.removeEventListener("scroll", isSticky);
        };
    });

    /* Method that will fix header after a specific scrollable */
    const isSticky = () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const header = document.querySelector(".header");

        scrollTop <= lastScrollTop && scrollTop !==0
            ? (header.classList.add('sticky'))
            : (header.classList.remove('sticky'));

        setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop);

        // active link effect on each section
        document.querySelectorAll('section').forEach((el, i) => {
            if (el.offsetTop - document.querySelector('.header').clientHeight <= scrollTop) {
                document.querySelectorAll('.nav li').forEach((item) => {
                    if (item.classList.contains('active')) {
                        item.classList.remove('active');
                    }
                })
                document.querySelectorAll('.nav li')[i].classList.add('active');
            }
        })
    };

    // disable scrolling when the menu is open
    useEffect(() => {
        menuShow ?
            document.body.style.overflow = 'hidden'
            : document.body.style.overflow = 'unset';
    }, [menuShow]);


    return (
        <nav className='navbar'>
            <div className={!menuShow ? "navbar__hamburger btn_show" : "navbar__hamburger btn_hide"} onClick={() => setMenuShow(true)}><FaBars /></div>
            <div className={menuShow ? "navbar__close btn_show" : "navbar__close btn_hide"} ><MdClose onClick={() => setMenuShow(false)} /></div>
            <div className={menuShow ? "navbar__wrapper show" : "navbar__wrapper hide"}>

                <nav className="nav">
                    <ul className="nav__list">
                        {menu.map((link) =>
                            <li className={link.ref === activeNav ? 'nav__item active' : 'nav__item'} onClick={handleClick}>
                                <a href={link.ref} key={link.id} >{link.title}</a>
                            </li>
                        )}
                        <div onClick={() => setMenuShow(false)}>
                            <Button text="קביעת תור" />
                        </div>
                    </ul>
                </nav>

                <div className={!menuShow ? "navbar__divider btn_show" : null}><Divider /></div>
            </div>
        </nav>
    )
}

export default Navbar;



const menuLinks = [
    {
        id: 1,
        title: "עמוד הבית",
        ref: "#home",
        active: true
    },
    {
        id: 2,
        title: "קצת עלינו",
        ref: "#about",
        active: false
    },
    {
        id: 3,
        title: "ברברים",
        ref: "#barbers",
        active: false
    },
    {
        id: 4,
        title: "שירותים",
        ref: "#services",
        active: false
    },
    {
        id: 5,
        title: "גלריה",
        ref: "#gallery",
        active: false
    },
    {
        id: 6,
        title: "צור קשר",
        ref: "#contact",
        active: false
    }];