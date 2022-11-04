import React from 'react'
import { SpecialItem } from '../SpecialItem/SpecialItem'
import style from './Special.module.scss'
import specialTwo from '../../assets/images/specialTwo.png'
import specialThree from '../../assets/images/specialThree.png'
import specialFour from '../../assets/images/specialFour.png'

export function Special() {
    return (
        <section className={style.special}>
            <div className={style.container}>
                <h2 className={style.specialTitle}>
                    Специальные предложения
                </h2>
                <div className={style.specialList}>
                    <div className={style.specialItem}>
                        <p className={style.specialItemTitle}>
                            Скидки до 50%!
                        </p>
                        <div className={style.specialItemIllustr}>
                            <span className={style.specialDiscMain}>-50%</span>
                        </div>

                    </div>
                    <div className={style.specialItem}>
                        <p className={style.specialItemTitle}>
                            Новый год -  <br />
                            новый телевизор!
                        </p>
                        <div className={style.specialItemIllustr}>
                            <img src={specialTwo} className={style.specialDiscMain}/>
                        </div>

                    </div>
                    <div className={style.specialItem}>
                        <p className={style.specialItemTitle}>
                        Новое поступление <br />
                        товаров SONY
                        </p>
                        <div className={style.specialItemIllustr}>
                            <img src={specialThree} className={style.specialDiscMain}/>
                        </div>

                    </div>
                    <div className={style.specialItem}>
                        <p className={style.specialItemTitle}>
                            Зимняя распродажа
                        </p>
                        {/* <div className={style.specialItemIllustr}> */}
                            <img src={specialFour} className={style.specialDiscMain}/>
                        {/* </div> */}

                    </div>
                </div>
            </div>
            
        </section>
    )
}