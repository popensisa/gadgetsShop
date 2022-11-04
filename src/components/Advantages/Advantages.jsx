import React from 'react'
import style from './Advantages.module.scss'
import advOne from '../../assets/images/advOne.svg'
import advTwo from '../../assets/images/advTwo.svg'
import advThree from '../../assets/images/advThree.svg'
import advFour from '../../assets/images/advFour.svg'


export function Advantages() {
    return (
        <section className={style.advantages}>
            <div className={style.container}>
                <h2 className={style.advantagesTitle}>
                    Наши преимущества
                </h2>
                <div className={style.advantagesList}>
                    <div className={style.advantagesItem}>
                        <img src={advOne} alt="" />
                        <h3>Гарантия преимущества</h3>
                    </div>
                    <div className={style.advantagesItem}>
                        <img src={advTwo} alt="" />
                        <h3>Быстрая доставка</h3>
                    </div>
                    <div className={style.advantagesItem}>
                        <img src={advThree} alt="" />
                        <h3>Рассрочка без %</h3>
                    </div>
                    <div className={style.advantagesItem}>
                        <img src={advFour} alt="" />
                        <h3>Онлайн поддержка</h3>
                    </div>
                </div>
            </div>
            
        </section>
    )
}