import React, { useState } from 'react'
import { FaMinus, FaPlus, FaCashRegister, FaCcVisa, FaCcMastercard } from 'react-icons/fa';
import style from '../../pages/Basket/Basket.module.scss'
import BasketCartItem from './BasketCartItem/BasketCartItem';
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react';
import { getCartTotal } from '../../redux/actions';

export default function BasketCart() {
    const { cart, totalAmount } = useSelector(state => state.cart)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCartTotal())
    }, [cart])

    if (cart.length === 0) {
        return (
            <div className={style.basket}>
                <span>Детали заказа</span>
                <h3 className={style.shopping}>
                    Your shopping cart <br />
                    is empty
                </h3>
                <div className={style.line}></div>
                <div className={style.basketTotal}>
                    <h3>Итого: </h3>
                    <span>{totalAmount} сомов</span>
                </div>
            </div>
        )
    }
    return (
        <div className={style.basket}>
            <span>Детали заказа</span>
            <ul className={style.basketItems}>
                {cart.map((item) => {
                    return <BasketCartItem key={item.id} {...item} />
                })}

            </ul>
            <div className={style.line}></div>
            <div className={style.basketTotal}>
                <h3>Итого: </h3>
                <span>{totalAmount} сомов</span>
            </div>
        </div>
    )
}
