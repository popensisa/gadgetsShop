import React, { useState } from 'react'
import { FaMinus, FaPlus, FaCashRegister, FaCcVisa, FaCcMastercard } from 'react-icons/fa';
import style from '../../pages/Basket/Basket.module.scss'
import BasketCartItem from './BasketCartItem/BasketCartItem';

export default function BasketCart() {

    return (
        <div className={style.basket}>
            <span>Детали заказа</span>
            <ul className={style.basketItems}>
                <BasketCartItem />
                <BasketCartItem />

            </ul>
            <div className={style.line}></div>
            <div className={style.basketTotal}>
                <h3>Итого: </h3>
                <span>50 000 сомов</span>
            </div>
        </div>
    )
}
