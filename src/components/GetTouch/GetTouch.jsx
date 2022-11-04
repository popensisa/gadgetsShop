import React from 'react'
import formTouch from '../../assets/images/formTouch.png'
import { YellowBtn } from '../YellowBtn/YellowBtn'
import style from './GetTouch.module.scss'

export function GetTouch() {
    return (
        <section className={style.getTouch}>
            <div className={style.container}>
                <div className={style.formTouch}>
                    <div className={style.formTouchInfo}>
                        <div className={style.formTouchTitle}>
                            Вопросы по качeству? <br />
                            Свяжитесь с нами!
                        </div>
                        <div className={style.formTouchForm}>
                            <input type="text" placeholder="Электронная почта" className={style.formTouchInput}/>
                            <button className={style.formTouchBtn}> > </button>
                            
                        </div>
                        
                    </div>
                    <img src={formTouch} alt="" />
                </div>
            </div>
        </section>
    )
}