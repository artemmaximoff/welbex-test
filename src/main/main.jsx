import React from "react";
import s from './main.module.scss'
import bg_mob from '../assets/bg_mob.png'



export const Main = () => {
    return (
        <div className={s.main}>
            <div className={s.mainLeft}>
                <div className={s.more}>
                    Зарабатывайте больше
                </div>
                <div className={s.welbex}>с WELBEX</div>
                <div className={s.develop}>Развиваем и контролируем <br></br> продажи за вас</div>
            </div>
            <div className={s.mainRight}>
                <div className={s.consultation}>Вместе c
                    <span className={s.free}> бесплатной</span><br></br><span className={s.free}>консультацией</span> мы дарим:
                </div>
                <div className={s.gifts}>
                    <div className={s.gift}>
                        <div className={s.giftHeader}>Виджеты</div>
                        <div className={s.giftDesc}>30 готовых решений</div>
                    </div>
                    <div className={s.gift}>
                        <div className={s.giftHeader}>Dashboard</div>
                        <div className={s.giftDesc} >с показателями
                            вашего бизнеса</div>
                    </div>
                    <div className={s.gift}>
                        <div className={s.giftHeader}>Skype Аудит</div>
                        <div className={s.giftDesc} >отдела продаж<br></br> и CRM системы</div>
                    </div>
                    <div className={s.gift}>
                        <div className={s.giftHeader}>35 дней</div>
                        <div className={s.giftDesc} >использования CRM</div>
                    </div>
                    <div className={s.gift && s.giftMob}>
                        <div className={s.giftHeader}>Skype аудит</div>
                    </div>
                    <div className={s.gift && s.giftMob}>
                        <div className={s.giftHeader}>Dashboard</div>
                    </div>
                    <div className={s.gift && s.giftMob}>
                        <div className={s.giftHeader}>30 виджетов</div>
                    </div>
                    <div className={s.gift && s.giftMob}>
                        <div className={s.giftHeader}>Месяц аmoCRM</div>
                    </div>

                </div>

                <button>Получить консультацию</button>
            </div>

        </div >
    )
}

