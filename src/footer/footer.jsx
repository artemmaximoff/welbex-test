import React from "react";
import s from './footer.module.scss';
import tg from "../assets/Frame 106.svg"
import viber from "../assets/viber.svg"
import wa from "../assets/whatsapp.svg"



export const Footer = () => {
    return (
        <div className={s.footer}>
            <div className={s.footerContainer}>
                <div className={s.about}>
                    <div className={s.subtitle}>О компании</div>
                    <div className={s.link}>
                        <a href="">Партнёрская программа</a>
                    </div>
                    <div className={s.link}>
                        <a href="">Вакансии</a>
                    </div>
                </div>
                <div className={s.menu} >
                    <div className={s.subtitle}>Меню</div>
                    <div className={s.menuRow}>
                        <div className={s.menuCol}>
                            <div className={s.link}>
                                <a href="">Расчёт стоимости</a>
                            </div>
                            <div className={s.link}>
                                <a href="">Услуги</a>
                            </div>
                            <div className={s.link}>
                                <a href="">Виджеты</a>
                            </div>
                            <div className={s.link}>
                                <a href="">Интеграции</a>
                            </div>
                            <div className={s.link}>
                                <a href="">Наши клиенты</a>
                            </div>
                        </div>
                        <div className={s.menuCol}>
                            <div className={s.link && s.linkMob}>
                                <a href="">Благорность клиентов</a>
                            </div>
                            <div className={s.link}>
                                <a href="">Кейсы</a>
                            </div>
                            <div className={s.link}>
                                <a href="">Сертификты</a>
                            </div>
                            <div className={s.link && s.linkDesc}>
                                <a href="">Благодарственные письма</a>
                            </div>
                            <div className={s.link}>
                                <a href="">Блог на Youtubeы</a>
                            </div>
                            <div className={s.link}>
                                <a href="">Вопрос / Ответ</a>
                            </div>
                        </div>
                    </div>

                </div>
                <div className={s.contacts}>
                    <div className={s.subtitle}>Контакты</div>
                    <div>+7 555 555-55-55</div>
                    <div className={s.messangers}>
                        <span><a href=""><div><img src={tg} alt="tg" /></div></a></span>
                        <span><a href=""><div><img src={viber} alt="viber" /></div></a></span>
                        <span><a href=""><div><img src={wa} alt="logo" /></div></a></span>
                    </div>
                    <div>Москва, Путевой проезд 3с1, к 902</div>
                </div>
            </div>
            <div className={s.copyrights}>
                ©WELBEX 2022. Все права защищены.<br></br>
                <a href="">Политика конфиденциальности</a>
            </div>

        </div>
    )
}

