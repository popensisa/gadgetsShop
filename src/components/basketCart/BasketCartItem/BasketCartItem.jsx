import React, { useState } from 'react'
import { FaMinus, FaPlus, FaCashRegister, FaCcVisa, FaCcMastercard } from 'react-icons/fa';
import style from '../../../pages/Basket/Basket.module.scss'

export default function BasketCartItem() {
    const [qua, setQua] = useState(0)

    const increaseItem = () => {
        setQua(qua + 1)
    }

    const decreaseItem = () => {
        setQua(qua - 1)
    }
    return (
        <div className={style.basketItem}>
            <img src="https://login.kg/image/cache/catalog/new/Phones/Samsung/A52%204G/2-500x500.jpg" alt="" />
            <div className={style.basketTitle}>
                <p className={style.basketItem__title}>Смартфон Samsung Galaxy A52 5G <br /> 128 Гб EU</p>
                <div className={style.basketBtn}>
                    <button className={style.basketItem__btn}>Приобрести позже</button>
                    <button className={style.basketItem__del}>Удалить</button>
                </div>
            </div>
            <div className={style.basketPrice}>
                <span>45 000 сомов</span>
                <div className={style.basketQua}>
                    {/* <div className={style.basketDecrease}><span><FaMinus /></span></div>
                                    <div className={style.basketQuaItem}>1</div>
                                    <div className={style.basketIncrease}><span><FaPlus /></span></div> */}
                    <button className={style.basketDecrease} onClick={decreaseItem}><FaMinus /></button>
                    <span className={style.basketQuaItem}>{qua}</span>
                    <button className={style.basketIncrease} onClick={increaseItem}><FaPlus /></button>
                </div>
            </div>
        </div>
    )
}
