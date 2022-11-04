import React from 'react'
import ptnOne from '../../assets/images/hp.svg'
import ptnTwo from '../../assets/images/onePlus.svg'
import ptnThree from '../../assets/images/mi.svg'
import ptnFour from '../../assets/images/apple.svg'
import ptnFifth from '../../assets/images/sony.svg'
import ptnSixth from '../../assets/images/beko.svg'
import ptnSeven from '../../assets/images/huawei.svg'
import ptnEight from '../../assets/images/dell.svg'
import ptnNine from '../../assets/images/lg.svg'
import ptnTen from '../../assets/images/samsung.svg'
import ptnEleven from '../../assets/images/oppo.svg'
import ptnTwelve from '../../assets/images/philips.svg'

import style from './Partners.module.scss'

export function Partners() {
    return (
        <section className={style.partners}>
            <div className={style.container}>
                <h2 className={style.partnersTitle}>Партнеры BTech</h2>
                <div className={style.partnersList}>
                    <a className={style.partnersItem}>
                        <img src={ptnOne} alt="" />
                    </a>
                    <a className={style.partnersItem}>
                        <img src={ptnTwo} alt="" />
                    </a>
                    <a className={style.partnersItem}>
                        <img src={ptnThree} alt="" />
                    </a>
                    <a className={style.partnersItem}>
                        <img src={ptnFour} alt="" />
                    </a>
                    <a className={style.partnersItem}>
                        <img src={ptnFifth} alt="" />
                    </a>
                    <a className={style.partnersItem}>
                        <img src={ptnSixth} alt="" />
                    </a>
                    <a className={style.partnersItem}>
                        <img src={ptnSeven} alt="" />
                    </a>
                    <a className={style.partnersItem}>
                        <img src={ptnEight} alt="" />
                    </a>
                    <a className={style.partnersItem}>
                        <img src={ptnNine} alt="" />
                    </a>
                    <a className={style.partnersItem}>
                        <img src={ptnTen} alt="" />
                    </a>
                    <a className={style.partnersItem}>
                        <img src={ptnEleven} alt="" />
                    </a>
                    <a className={style.partnersItem}>
                        <img src={ptnTwelve} alt="" />
                    </a>
                </div>
            </div>
            
        </section>
    )
}