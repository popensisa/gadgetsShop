import style from './Basket.module.scss'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import BasketForm from '../../components/basketForm/BasketForm';
import BasketCart from '../../components/basketCart/BasketCart';
const Basket = () => {
    const location = useLocation()
    console.log(location)

    return (
        <div className={style.container}>
            <div className={style.navRouter}>
                <span>Главная   /   Смартфоны   /   Samsung Galaxy A52 5G EU / Корзина </span>
            </div>
            <div className={style.cart}>
                <BasketForm />
                <BasketCart />
            </div >
        </div >
    );
}

export default Basket;