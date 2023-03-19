import React from "react";
import s from './header.module.scss'
import logo from "../assets/logo_welbex.svg";
import tg from "../assets/Frame 106.svg"
import viber from "../assets/viber.svg"
import wa from "../assets/whatsapp.svg"


export const Header = () => {
    return (
        <div className={s.header}>
            <div className={s.logoContainer}>
                <div>
                    <img src={logo} alt="logo"></img>
                </div>
                <span>крупный интегратор CRM
                    <br></br> в Росcии и ещё 8 странах
                </span>
            </div>
            <nav className={s.menu} >
                <li><a href="">Услуги</a></li>
                <li><a href="">Виджеты</a></li>
                <li><a href="">Интеграции</a></li>
                <li><a href="">Кейсы</a></li>
                <li><a href="">Сертификаты</a></li>
            </nav>
            <div className={s.contacts} >
                <li><a href="">+7 555 555-55-55</a></li>
                <li><a href=""><div><img src={tg} alt="tg" /></div></a></li>
                <li><a href=""><div><img src={viber} alt="viber" /></div></a></li>
                <li><a href=""><div><img src={wa} alt="logo" /></div></a></li>
            </div>
        </div>
    )
}

