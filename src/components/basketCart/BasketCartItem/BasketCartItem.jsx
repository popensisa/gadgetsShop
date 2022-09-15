import React, { useState } from 'react'
import { FaMinus, FaPlus, FaCashRegister, FaCcVisa, FaCcMastercard } from 'react-icons/fa';
import style from '../../../pages/Basket/Basket.module.scss'
import { useSelector, useDispatch } from 'react-redux'
import { decrease, increase, remove } from '../../../redux/actions';

export default function BasketCartItem({ id, img, title, price, amount }) {
    // const [qua, setQua] = useState(0)

    // const increaseItem = () => {
    //     setQua(qua + 1)
    // }

    // const decreaseItem = () => {
    //     setQua(qua - 1)
    // }
    const dispatch = useDispatch();
    return (
        <div className={style.basketItem}>
            <img src={img} alt="" />
            <div className={style.basketTitle}>
                <p className={style.basketItem__title}>{title}</p>
                <div className={style.basketBtn}>
                    <button className={style.basketItem__btn}>Приобрести позже</button>
                    <button className={style.basketItem__del} onClick={() => dispatch(remove(id))}>Удалить</button>
                </div>
            </div>
            <div className={style.basketPrice}>
                <span>{price} сомов</span>
                <div className={style.basketQua}>
                    {/* <div className={style.basketDecrease}><span><FaMinus /></span></div>
                                    <div className={style.basketQuaItem}>1</div>
                                    <div className={style.basketIncrease}><span><FaPlus /></span></div> */}
                    <button className={style.basketDecrease} onClick={() => dispatch(decrease(id))}><FaMinus /></button>
                    <span className={style.basketQuaItem}>{amount}</span>
                    <button className={style.basketIncrease} onClick={() => dispatch(increase(id))}><FaPlus /></button>
                </div>
            </div>
        </div>
    )
}
